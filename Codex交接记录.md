# Codex 交接记录

更新时间：2026-06-11

## 项目状态

项目路径：`/Users/user/Documents/cocosCreator/SortTank`

当前主要目标：把原 `Level-29086` 营救女孩/打龙玩法中的“箱子移动”部分逐步改造成“坦克组装”玩法 demo。当前重点关卡是第一关 `-29095`，对应 prefab：

`assets/resources/zqddn_zhb/prefab/level/zqddn_zhb_level-29095.prefab`

第二关是 `-29290`，对应 prefab：

`assets/resources/zqddn_zhb/prefab/level/zqddn_zhb_level-29290.prefab`

根目录已有一个普通文件 `文档`，里面是玩法文案/需求梳理，不是目录。

## 新会话恢复方式

新 Codex 会话开始后，先执行：

```text
请先阅读 Codex交接记录.md、根目录 文档、当前 git status 和 git diff，恢复项目上下文
```

建议同时查看：

```bash
git status --short
git diff
```

当前写交接文档时，未提交改动主要在：

- `assets/scripts/App.ts`
- `assets/script/scripts/Level-29086_control.ts`

## 启动流程

`assets/scripts/App.ts` 里有 demo 开关：

```ts
const DIRECT_TANK_ASSEMBLY_DEMO = true;
```

当前逻辑：

- demo 模式直接进入 `Game` 场景。
- 不再加载 `loadingPrefab`。
- 使用 `initSceneManagerWithoutLoading()` 只初始化 `SceneManager.default.sceneRoot / transition` 等必要引用。
- `gotoGame()` 设置：

```ts
CURRENT_MODE = 0
CURRENT_LEVEL = 1
```

`assets/resources/config/theme0.json` 第一关 `id = 1` 对应 `levelID = -29095`，所以最终加载：

```text
zqddn_zhb/prefab/level/zqddn_zhb_level-29095
```

## 公共 UI 隐藏

`assets/scripts/Game.ts` 里已做坦克组装关卡的公共底栏隐藏逻辑。

关键点：

- `-29095 / -29290` 会隐藏 `bottomBar0`、`content` 和底部刷新/消除/排序等按钮。
- 加载关卡 prefab 前会先隐藏一次，避免短暂露出。
- 加载完成后会再次隐藏。

主要方法：

- `isTankAssemblyBottomButtonsHiddenLevel`
- `getBottomBar0Node`
- `setTankAssemblyBottomBar0Hidden`

## 坦克组装配置

核心配置在：

`assets/script/scripts/Level-29086_config.ts`

重点配置段：

- `TankSkinLevelIds`
- `TankAssemblyLevelIds`
- `TankAssemblyGuideDisabledLevelIds`
- `TankAssemblyBottomButtonsHiddenLevelIds`
- `TankAssemblyProgressTextureDir`
- `TankAssemblyProgressStages`
- `TankAssemblyTypes`
- `TankAssemblyConveyorConfig`
- `TankAssemblyRouteConfig`

当前只支持 4 个已有 A 色资源：

| colorId | 类型说明 | 坦克资源 | 零件资源 |
| --- | --- | --- | --- |
| 1 | 黄 / tank A | `tank_yellow_a_0..7` | `tank_yellow_a` |
| 2 | 蓝 / destroyer A | `tank_blue_a_0..7` | `tank_blue_a` |
| 4 | 绿 / howitzer A | `tank_green_a_0..7` | `tank_green_a` |
| 6 | 紫 / rocket A | `tank_purple_a_0..7` | `tank_purple_a` |

未来 B 色不要复用 A 色配置，追加独立配置项，例如 `tank_yellow_b`。

`TankAssemblyConveyorConfig` 当前有注释，主要参数：

- `spawnInterval`：零件生成间隔，越小生成越快。
- `moveSpeed`：零件沿传送带移动速度。
- `startDelay`：首个零件延迟。
- `absorbDuration`：零件飞向停车位耗时。
- `absorbShrinkDelayRatio`：吸收飞行后段才开始缩小。
- `absorbEndScale`：吸收结束时缩放。
- `partScale`：传送带零件缩放。

当前 `TankAssemblyDebugLog = true`，会输出 `[TankAssembly]` 调试日志。正式收尾时可以改为 `false`。

## 关卡控制核心

核心代码在：

`assets/script/scripts/Level-29086_control.ts`

当前已实现/改造点：

- `isTankAssemblyLevel()`
- `initTankAssemblyParkingSlots()`
- `finishTankAssemblyParking(carNode, parkingNode)`
- `initTankAssemblyConveyor()`
- `buildTankAssemblyPathPoints()`
- `createTankAssemblyPart()`
- `moveTankAssemblyPart()`
- `tryAbsorbTankAssemblyPart()`
- `absorbTankAssemblyPart()`
- `applyTankAssemblyPartToParking()`
- `completeTankAssemblyParking()`
- `resetTankAssemblyParking()`

停车位逻辑：

- 底部坦克按原移动/碰撞逻辑驶出。
- 到达 `parkingRoot/p0...` 后，不创建旧炮台，不播放箱子打开动画。
- 原移动坦克隐藏：`carNode.active = false`。
- 停车位显示 `tankStop` 和 `progressRoot`。
- 初始进度 `30%`。
- 零件吸收后按 `assemblyCollected / assemblyCapacity` 更新进度档位。
- 进度满后计数板加一，停车位释放。

## 编辑器节点约定

### 中间停车位

结构：

```text
parkingRoot
├── p0
│   ├── empty          cc.Sprite
│   ├── tankStop       cc.Sprite
│   └── progressRoot   cc.Label
├── p1
...
└── p7
```

规则：

- `p0 ~ p7` 的层级顺序就是停车顺序。
- `tankStop` 显示进度坦克图，不使用底部移动坦克资源。
- `progressRoot` 显示 `30% / 70% / 100%`。

### 顶部组装区

结构：

```text
assemblyTopRoot
├── conveyorVisualRoot
├── conveyorPathRoot
│   ├── c001
│   ├── c002
│   └── ...
├── partLayer
├── absorbEffectLayer
└── countBoardRoot
    ├── p0
    │   ├── bg
    │   ├── icon
    │   └── count
    ├── p1
    ├── p2
    └── p3
```

规则：

- `conveyorPathRoot` 是全屏节点，大小按当前 640x1136 处理。
- `c001/c002/...` 是路径点，Sprite 组件可以隐藏，但节点必须 active。
- `c001` 是第一个移动位置，也是新零件刷新位置。
- 代码会严格读取名字匹配 `/^c\d+$/` 的子节点并按数字排序。
- `partLayer` 是运行时零件父节点。
- `absorbEffectLayer` 是零件飞向停车位时的父节点。
- `countBoardRoot/p0~p3` 对应黄蓝绿紫四个计数板。

## 传送带零件

运行时节点名：

- `tankAssemblyPart_1`
- `tankAssemblyPart_2`
- `tankAssemblyPart_4`
- `tankAssemblyPart_6`

节点位置：

```text
assemblyTopRoot/partLayer
```

图片加载路径来自 `TankSkinTextureDir`：

```text
zqddn_zhb/texture/tank/tank_yellow_a
zqddn_zhb/texture/tank/tank_blue_a
zqddn_zhb/texture/tank/tank_green_a
zqddn_zhb/texture/tank/tank_purple_a
```

不是 `TankAssemblyProgressTextureDir`。

吸收动画当前已拆分：

- 位置飞完整 `absorbDuration`。
- 缩放延迟到 `absorbShrinkDelayRatio` 后才开始。

## 资源命名

坦克方向图：

```text
tank_yellow_a_0..7
tank_blue_a_0..7
tank_green_a_0..7
tank_purple_a_0..7
```

零件图：

```text
tank_yellow_a
tank_blue_a
tank_green_a
tank_purple_a
```

方向箭头在 `TankAssemblyProgressTextureDir` 下：

```text
tank_arrow_0..7
```

进度停车位图：

```text
sort_tank_icon1  // 30%
sort_tank_icon2  // 70%
sort_tank_icon3  // 100%
```

## carPrefab 的结论

`zqddn_zhb_level-29095.prefab` 里的 `carPrefab` 不能直接删。

它不是场上实际坦克，而是旧逻辑的车辆模板库。当前场上实际坦克在 `carRoot`，第一关目前只有 4 个初始坦克。

`carPrefab` 被这些逻辑使用：

- `changeCar()` 按名字克隆不同方向/长度模板。
- 初始化时遍历 `this.dict.carPrefab.children` 设置旧箱子 sprite。
- 旧 `carpark/transport` 逻辑会用模板生成备用车/运输箱。

虽然视觉上箱子已经换成坦克，但旧模板尺寸仍影响：

- 转向克隆。
- `node.width / node.height` 相关出界和碰撞判断。
- `seatTotalAmount`，现在被复用为坦克组装容量。

短期建议：保留 `carPrefab` 及子模板，只把它当隐藏逻辑模板库。

## 拖尾效果

拖尾节点名：`tailGas`

prefab 中位置：

- `zqddn_zhb_level-29095.prefab`
- `zqddn_zhb_level-29290.prefab`

组件：`cc.MotionStreak`

生成函数：

`Level-29086_control.ts` 的 `addTailGasSpine(t)`

当前未提交改动里，已经在此方法开头加了临时关闭：

```ts
//暂时关闭拖尾
if (true){
    return;
}
```

建议后续整理为配置开关，例如 `TankAssemblyTailGasEnabled = false`，不要长期保留 `if (true)`。

## 当前未提交改动

写本文档时 `git status --short` 显示：

```text
 M assets/script/scripts/Level-29086_control.ts
 M assets/scripts/App.ts
```

`App.ts` 改动：

- demo 模式不再实例化 `loadingPrefab`。
- 新增 `initSceneManagerWithoutLoading()`，只初始化 `SceneManager` 必要引用。

`Level-29086_control.ts` 改动：

- `addTailGasSpine()` 开头临时 `return`，关闭拖尾。

## cocos-mcp-2x 状态

用户希望使用 `cocos-mcp-2x` 检查 Cocos 连接。

已检查：

- `/Users/user/.codex/config.toml` 中存在：

```toml
[mcp_servers.cocos-mcp-2x]
enabled = true
command = "/Users/user/Documents/cocosCreator/SortTank/packages/cocos-mcp-2x/server/.venv/bin/python"
args = ["-m", "main", "--transport", "stdio"]
cwd = "/Users/user/Documents/cocosCreator/SortTank/packages/cocos-mcp-2x/server/src"
```

- 本地 Python 路径存在。
- `server/src` 存在。
- `python -c "import main"` 成功。

但当前 Codex 会话的工具列表没有挂载 `cocos-mcp-2x`，`tool_search` 返回 0。新会话如果工具挂载成功，应先调用相关 MCP 工具检查连接。

## 后续建议

1. 新会话先读本文档、根目录 `文档` 和 `git diff`。
2. 如果要继续调 Cocos 节点，先确认 `cocos-mcp-2x` 是否挂载成功。
3. 如果继续优化第一关布局，优先编辑 `zqddn_zhb_level-29095.prefab` 的 `carRoot / parkingRoot / assemblyTopRoot`，不要删 `carPrefab`。
4. 收尾前把 `TankAssemblyDebugLog` 改为 `false`。
5. 把 `addTailGasSpine()` 的临时 `if (true) return` 改成配置化开关。
6. 如果要扩展第二关 `-29290`，需要确认它是否已经有 `assemblyTopRoot / conveyorPathRoot / parkingRoot` 等同构节点。


## 方向
0 - 7 分别对应 左上， 左， 上， 右上，左下，右， 右下， 下