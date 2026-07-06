# zqddn_zhb_level-10001 项目说明

## 1. 当前目标

当前主要开发关卡是 `zqddn_zhb_level-10001`，关卡 ID 为 `-10001`。

该关卡已经从原项目的“车辆/乘客排序玩法”分支出一套新的坦克装配流程：

1. 等待区根据静态配置动态创建坦克。
2. 玩家点击坦克，坦克离开等待区并预订装配台。
3. 传送带初始化固定颜色和数量的零件长龙，并沿路径整体推进。
4. 零件匹配装配台坦克，分出小零件精灵飞向坦克并增加装配进度。
5. 坦克装满后离开装配台。
6. 所有坦克完成后显示 `okPrefab`。

项目公共框架和其他关卡仍保留原项目代码，但 `Level-29086_control.ts` 和
`Level-29086_config.ts` 已收缩为坦克装配玩法专用实现。预制体的隐藏 `carPrefab` 中仍序列化了
`Level-29086_boxCarItem` 旧组件，因此该组件文件暂时不能物理删除。

## 2. 启动和加载流程

### 2.1 启动场景

- `settings/project.json`
  - `start-scene` 指向 `assets/firstPackage/App.fire`。
- `assets/firstPackage/App.fire`
  - 常驻 `Canvas`、`sceneRoot` 和 `transition`。
  - `App.ts` 挂在启动场景中。

### 2.2 直达第一关

入口文件：`assets/scripts/App.ts`

当前配置：

```ts
const DIRECT_TANK_ASSEMBLY_DEMO = true;
```

启用后流程为：

1. `App.onLoad()` 初始化公共管理器。
2. `initSceneManagerWithoutLoading()` 跳过原 Loading 页面。
3. `sucEnterMain()` 调用 `gotoGame()`。
4. `gotoGame()` 写入：
   - `CURRENT_MODE = 0`
   - `CURRENT_LEVEL = 1`
5. `SceneManager.loadScene("Game")` 加载 `gameBundle/prefab/scene/Game`。

### 2.3 Game 选择关卡

主要文件：

- `assets/scripts/SceneManager.js`
- `assets/scripts/Game.ts`
- `assets/scripts/ConfigManager.js`
- `assets/scripts/ResManager.js`
- `assets/resources/config/theme0.json`

`theme0.json` 中顺序关第 1 关配置为：

```text
id = 1
levelID = -10001
```

`Game.ts` 据此生成资源路径：

```text
zqddn_zhb/prefab/level/zqddn_zhb_level-10001
```

随后通过 `ResManager.Res.load()` 加载、实例化，并挂到 Game 场景的关卡容器中。

### 2.4 关卡控制器初始化

关卡预制体根节点挂载：

```text
assets/script/scripts/Level-29086_control.ts
```

其父类为：

```text
assets/script/scripts/BrainLevelBase.js
```

父类主要负责：

- 扫描 `game` 和 `temp` 下的节点。
- 根据节点名建立 `this.dict`。
- 处理 `14=road` 这类名称，将等号右侧 `road` 作为字典 key，并把节点重命名为 `road`。
- 加载预制体中未直接绑定的图片、Spine 和音频。
- 资源完成后调用 `onLevelReady()`。

`Level29086Control.onLevelReady()` 直接初始化坦克装配玩法：

```text
initTankAssemblyParkingSlots()
  -> initTankWaitingBoard()
  -> initTankAssemblyConveyor()
  -> onTouch()
```

控制器已不再包含原玩法的龙、乘客、车辆排序和复活流程。

## 3. 当前核心代码文件

### 3.1 总控制器

`assets/script/scripts/Level-29086_control.ts`

当前关卡最主要的控制文件，负责：

- 判断是否进入坦克装配玩法。
- 初始化装配台和等待区。
- 连接预制体节点与代码。
- 传送带路径点读取、固定长龙创建和统一移动。
- 零件颜色匹配、并发锁定、容量预占和小零件吸入。
- 零件被吸收后的前段后退补位和路径终点失败判断。
- 装配进度、坦克离场和胜利判断。
- 速度滑条、倍速按钮和调试面板。
- `okPrefab` 胜利节点显隐。

该文件已从约 7700 行收缩到约 2400 行，只保留装配玩法、等待区调试和必要生命周期。
当前修改时可优先定位这些方法组：

- `initTankAssemblyParkingSlots`
- `initTankWaitingBoard`
- `initTankAssemblyConveyor`
- `buildTankAssemblyPathPoints`
- `updateTankAssemblyConveyor`
- `createTankAssemblyPartChain`
- `moveTankAssemblyPartChain`
- `planTankAssemblyChainAbsorptions`
- `absorbTankAssemblyPart`
- `completeTankAssemblyPartAbsorption`
- `applyTankAssemblyPartToParking`
- `finishTankAssemblyParking`
- `completeTankAssemblyParking`
- `finishTankAssemblyStage`
- `bindTankLayoutDebugButtons`

### 3.2 装配玩法通用配置

`assets/script/scripts/Level-29086_config.ts`

该文件已收缩为装配玩法通用配置，不再包含原玩法的关卡、颜色、乘客、龙、火炮和路线数据：

- `TankAssemblyLevelIds`：哪些关卡启用装配玩法。
- `TankAssemblyTypes`：零件颜色、计数板和贴图对应关系。
- `TankAssemblyConveyorConfig`：长龙间距、移动/后退速度和吸入动画参数。
- `TankAssemblyBottomButtonsHiddenLevelIds`：隐藏 Game 公共底栏。

### 3.3 等待区关卡配置

`assets/script/scripts/Level-29086_tankBoardConfig.ts`

这是编辑第一关坦克布局时最重要的配置文件：

- `TankDirectionVector`：8方向移动向量。
- `TankDirectionAngle`：碰撞多边形使用的方向角。
- `TankTypeConfig`：4种坦克的贴图前缀、颜色 ID、容量和逻辑碰撞尺寸。
- `TankWaitingBoardCommonConfig`：等待区通用移动、碰撞和视觉缩放参数。
- `TankWaitingBoardByLevel[1].t/d/c`：第一关16辆坦克的编号、方向和坐标。
- `TankWaitingBoardByLevel[1].pt/pn`：第一关零件长龙的颜色段和对应数量。

第一关使用紧凑并行数组配置：

```ts
1: {
    i: 1,
    t: [10031, 10011],
    d: [2, 2],
    c: [[-180, 170], [-60, 170]],
    pt: [4, 2],
    pn: [2, 4]
}
```

`t/d/c`必须等长，`pt/pn`必须等长。运行时通过显式映射把资源关卡`-10001`关联到
流程关卡`i=1`，再在读取入口内部转换成旧逻辑需要的`tanks/parts`。

### 3.4 等待区运行时

`assets/script/scripts/Level-29086_tankBoard.ts`

负责等待区整体逻辑：

- 根据 `tanks` 配置动态创建坦克。
- 接收点击并判断坦克能否离开。
- 计算离开等待区、进入道路和驶向装配台的路径。
- 预订装配台，避免连续点击重复占位。
- 装配台不足时提示“位置不足”。
- 调试模式中新增、删除和打印坦克布局。

当前允许连续点击多辆可开出坦克。行进中的坦克之间暂不做动态碰撞处理。

### 3.5 单辆等待区坦克

`assets/script/scripts/Level-29086_tankItem.ts`

负责单辆坦克：

- 保存 `type / direction / capacity / colorId`。
- 加载方向贴图和箭头。
- 父节点保持 `0` 度，方向由贴图表示。
- 提供点击命中、多边形碰撞和抖动反馈。

### 3.6 坦克碰撞轮廓

`assets/script/scripts/Level-29086_tankHitPolygons.ts`

保存不同坦克贴图的碰撞多边形数据，由 `Level-29086_tankItem.ts` 使用。它只影响等待区寻路判断，不控制视觉大小。

### 3.7 零件吸入动画

代码：

- `assets/script/scripts/Level-29086_tankPartShatter.ts`
- `assets/resources/zqddn_zhb/effect/tank-part-shatter.effect`

以上 Shader 碎裂实现目前保留但未启用。正式运行使用 `Level-29086_control.ts` 中的
`playTankAssemblyMiniPartFlight()`：从被吸收的零件本体生成多个缩小精灵，连续飞向装配位的
`tankStop`。飞行全部到达后才增加坦克装配进度。

保留的 Shader 方案职责：

- 自定义 `cc.RenderComponent + cc.Assembler` 创建三角碎片网格。
- Effect 顶点 Shader 驱动碎片沿曲线飞向 `tankStop`。
- 当前 `4 x 4` 网格生成32个三角碎片、96个顶点。
- 每个效果仍为一个渲染节点和一个 Draw Call。

## 4. 玩法数量、颜色与配置规则

### 4.1 当前第一关总量

第一关固定配置如下：

| 内容 | 数量 | 说明 |
| --- | ---: | --- |
| 等待区坦克 | 16辆 | 4种颜色，每种4辆 |
| 装配位（炮台位） | 8个 | `parkingRoot/p0...p7`，第一排4个、第二排4个 |
| 零件长龙 | 88节 | 数量严格等于16辆坦克的总装配容量 |
| 同时吸收上限 | 8个 | 每个已停车且未完成的坦克最多锁定1个零件 |

当前玩法没有独立炮台节点。停入装配位的坦克本身就相当于一个炮台：它会从长龙中锁定一个
同色零件并播放吸入动画。空装配位、正在离场的坦克和已经装满的坦克都不会吸收零件。

### 4.2 坦克编号、零件类型和容量对应关系

紧凑配置使用两套编号：

- `t`保存坦克编号：`10001=绿、10011=蓝、10021=紫、10031=橙`。
- `pt`保存零件颜色：`1=绿、2=蓝、3=紫、4=橙`。
- `pn`保存对应`pt`颜色连续出现的零件数量。
- `colorId` 只作为运行时装配匹配键保留在类型配置中。
- 运行时转换后的坦克`type`、零件`type`和`colorId`使用同一套1-4颜色编号。
- 容量单独读取`TankTypeConfig.capacity`，不从坦克编号中推导。

| 颜色 | `t`坦克编号 | `pt`零件类型 | 内部类型 | colorId | 单辆容量 | 第一关坦克数 | 第一关零件需求 |
| --- | ---: | ---: | --- | ---: | ---: | ---: | ---: |
| 绿 | 10001 | 1 | `green` | 1 | 6 | 4 | 24 |
| 蓝 | 10011 | 2 | `blue` | 2 | 4 | 4 | 16 |
| 紫 | 10021 | 3 | `purple` | 3 | 10 | 4 | 40 |
| 橙/黄 | 10031 | 4 | `yellow` | 4 | 2 | 4 | 8 |
| **合计** | - | - | - | - | - | **16** | **88** |

核心公式：

```text
某颜色零件总数 = 该颜色坦克数量 × 该颜色单辆容量
全关零件总数 = 所有坦克 capacity 之和
```

因此第一关为：

```text
橙 4×2=8，蓝 4×4=16，绿 4×6=24，紫 4×10=40，总计88。
```

### 4.3 当前88节长龙如何生成

配置位置：`Level-29086_tankBoardConfig.ts / TankWaitingBoardByLevel[1].pt/pn`。

`pt`保存从链头到链尾的连续颜色段，`pn`保存每段数量。`pn`相加就是本关零件总数，
因此可以是任意值，不要求是22或其他数量的整倍数。第一项是链头，最后一项是链尾。

调试打印按从上到下、从左到右的坦克顺序生成`pt/pn`，其中`pn`读取对应坦克容量。例如：

```ts
pt: [4, 2],
pn: [2, 4]
```

第一关16辆坦克配置为16个颜色段，运行时展开后共88节。需要调整关卡节奏时，可以在打印后
交换颜色段顺序或拆分颜色段，但四种颜色的总数必须保持与坦克容量需求一致。

长龙初始化时一次创建全部88个逻辑节段：第一节位于路径入口，后续节段按
`-index × chainSpacing` 排在入口外并隐藏，移动进入路径后才显示。当前 `chainSpacing=42`。

### 4.4 装配位、锁定和补位规则

1. 玩家点击坦克成功后立即预订一个空装配位，坦克尚在路上时该位置也不能被其他坦克占用。
2. 装配位按 `parkingRoot` 子节点顺序使用，先填第一排4个，再填第二排4个。
3. 每帧按装配位顺序寻找长龙中第一个“已进入路径、未锁定、同色”的零件。
4. `perParkingConcurrency=1`，同一辆坦克一次只能吸收一个零件；同一零件也只能被一个坦克锁定。
5. 零件开始飞行时，位于它前方的链段立即累计后退一个 `chainSpacing`，后方链段保持原位。
6. 当前 `retreatSpeedMultiplier=4`。长龙仍正常前进，因此视觉净后退约为基础速度的3倍。
7. 小零件全部到达 `tankStop` 后才把 `assemblyCollected` 加1并刷新百分比。

链头到达 `conveyorPathRoot` 终点时，会先尝试本帧匹配。若链头未被吸收且已经没有飞行中的零件，
则冻结长龙和新的坦克点击，并提示“零件到达终点”。胜利条件仍是16辆坦克全部装满并完成离场。

### 4.5 新增或修改关卡时如何配置

1. 在调试模式中完成等待区坦克布局并点击打印。
2. `t`使用10001/10011/10021/10031；`d`使用0-7；`c`是`carRoot`本地坐标。
3. 打印逻辑按坦克顺序和容量自动生成`pt/pn`，并输出完整的`i/t/d/c/pt/pn`配置。
4. 将配置复制到`TankWaitingBoardByLevel`；如需改变零件节奏，成对调整`pt/pn`。
5. 装配位数量由预制体 `parkingRoot` 的有效子节点决定，不在关卡配置中填写。当前固定为8个。
6. 修改后运行 `node verify_tank_waiting_board.js -关卡ID`，检查坦克布局可解且零件颜色总量等于容量需求。

必须保持的配置约束：

- 零件少于需求：对应颜色坦克永远无法全部装满，关卡不可胜利。
- 零件多于需求：完成所有坦克后多余零件会被胜利清理，但会破坏关卡数量设计。
- 某颜色零件出现顺序过晚：可能在对应坦克进场前让链头到达终点，形成难度或死局。
- 修改坦克编号、`capacity/type`映射时，必须同步检查`TankAssemblyTypes`、长龙数量和计数板贴图映射。

## 5. 关卡预制体

文件：

`assets/resources/zqddn_zhb/prefab/level/zqddn_zhb_level-10001.prefab`

预制体不仅是画面资源，也是代码依赖的节点接口。以下节点名不能随意修改。

### 5.1 等待区和道路

- `game/element/carRoot`
  - 等待区运行时根节点。
  - 子坦克由 `Level29086TankBoard` 动态创建，预制体内无需预放坦克。
- `game/element/rectNode`
  - 等待区实际范围来源。
  - 运行时读取宽高并换算到 `carRoot` 坐标。
- `game/element/14=road`
  - 下排道路；父类加载后字典 key 和节点名为 `road`。
- `game/element/toproad`
  - 上排坦克离场道路。

### 5.2 装配台

- `game/element/parkingRoot`
  - 当前有 `p0 ... p7` 共8个装配台。
  - 前4个为第一排，后4个为第二排。
- 每个装配台需要：
  - `tankStop`：坦克停靠点及小零件飞行终点。
  - `progressRoot`：装配百分比 Label。

装配台在坦克点击成功时立即预订。`isEmpty = false` 同时表示“已有坦克”或“已有坦克正在驶来”。

### 5.3 传送带

- `game/element/assemblyTopRoot`
  - 顶部传送带总节点。
- `conveyorPathRoot`
  - 直接子节点名必须为 `c001 / c002 / ...`。
  - 代码读取所有符合 `/^c\d+$/` 的直接子节点，并按数字排序。
  - 路径点数量没有固定上限。
- `partLayer`
  - 零件长龙节点父节点。
- `absorbEffectLayer`
  - 小零件吸入效果层。
- `countBoardRoot`
  - 四种坦克的完成数量面板。

### 5.4 调试和速度控制

- `debugLayer`：4种坦克、8方向样例和布局编辑 UI。
- `curLevel`：显示当前关卡。
- `levelEdit`：指定打印配置的目标关卡 ID。
- `speedLabel / speedSlider`：零件移动速度。
- `scLabel / scSlider`：旧生产速度控件；固定长龙不再按时间生产，运行时隐藏。
- `tank_speed`：1倍/2倍速度切换按钮。

打开调试面板时，长龙移动暂停；关闭后从原位置继续。

### 5.5 胜利节点

- `game/okPrefab`
  - 初始化时隐藏。
  - 所有坦克装配完成并离场后显示。

## 6. 主要资源目录

### 坦克和零件

`assets/resources/zqddn_zhb/texture/tank/`

当前四组主要资源：

- `tank_yellow_a` 和 `tank_yellow_a_0..7`
- `tank_blue_a` 和 `tank_blue_a_0..7`
- `tank_green_a` 和 `tank_green_a_0..7`
- `tank_purple_a` 和 `tank_purple_a_0..7`

无方向后缀的图片用于传送带零件，`_0..7` 用于等待区坦克方向。

### 装配 UI

`assets/resources/zqddn_zhb/texture/sorttank/`

包括方向箭头、速度按钮、装配阶段图标等。

### 备用碎裂 Effect

`assets/resources/zqddn_zhb/effect/tank-part-shatter.effect`

## 7. 框架依赖文件

这些文件不是当前玩法核心，但加载流程仍直接依赖：

- `assets/scripts/App.ts`
- `assets/scripts/SceneManager.js`
- `assets/scripts/Game.ts`
- `assets/scripts/ConfigManager.js`
- `assets/scripts/ResManager.js`
- `assets/scripts/UserManager.js`
- `assets/scripts/EventManager.js`
- `assets/script/scripts/BrainLevelBase.js`
- `assets/script/scripts/LevelConstant.ts`
- `assets/script/scripts/PoolMgr.ts`

如果未来制作独立、纯净的坦克装配工程，才适合逐步替换这些公共框架。

## 8. 遗留代码与清理边界

### 8.1 当前不是主逻辑，但不能直接删除

`Level-29086_control.ts` 已不再静态引用龙、乘客、复活、旧车辆和平台存档模块。
但 `zqddn_zhb_level-10001.prefab/carPrefab` 的 15 个隐藏模板节点仍序列化了
`Level-29086_boxCarItem.ts`。新等待区坦克实际使用 `Level-29086_tankItem.ts`，但在从预制体
删除 `carPrefab` 之前，`Level-29086_boxCarItem.ts` 仍需保留以保证反序列化正常。

### 8.2 第一关运行时通常不会使用

- `Level-29086_tankLayoutConfig.ts` 中的 `TankLayoutByLevel`
  - 新等待区已经改读 `tankBoardConfig`。
  - 该文件目前主要服务 `debugLayer` 样例布局。
- `Level-29086_manager.js`
  - 是旧版/编辑式关卡加载器。
  - 当前正式链路由 `Game.ts + ResManager` 加载预制体。
- 其他 `zqddn_zhb_level-xxxxx.prefab`
  - 第一关不会主动加载，但属于原项目其他关卡资源。
- 根目录下 `add_tank_nodes.js`、`verify_tank_layout.js`、`apply_writeback.js` 等
  - 属于开发期生成、迁移或验证工具，不参与游戏运行。
- `packages/magic_layout`
  - Cocos 编辑器布局插件，只在编辑器使用，不参与游戏运行。

### 8.3 推荐清理顺序

不要直接批量删除。建议按以下顺序逐步收敛：

1. 先保持 `-10001` 功能稳定，为启动、点击、装配、胜利建立回归测试。
2. 从 `-10001.prefab` 删除 `carPrefab` 等旧模板节点和旧脚本组件。
3. 根据全项目引用扫描删除不再被其他关卡使用的旧模块。
4. 视维护成本再将传送带、装配台和调试面板拆成独立控制器。
5. 最后才处理其他关卡预制体、广告、商城、原玩法 UI 和公共框架。

## 9. 当前数据流

### 点击坦克

```text
Level29086Control.touchStart
  -> Level29086TankBoard.handleTouchStart
  -> 判断 TankItem 状态和静态路径
  -> findFirstEmptyParking
  -> 立即预订 parking
  -> runSegments
  -> finishTankAssemblyParking
```

### 零件装配

```text
Level29086Control.update
  -> updateTankAssemblyConveyor
  -> moveTankAssemblyPartChain
  -> planTankAssemblyChainAbsorptions
  -> 预占 assemblyIncoming
  -> 从长龙移除目标并立即安排前方链段后退
  -> playTankAssemblyMiniPartFlight
  -> completeTankAssemblyPartAbsorption
  -> applyTankAssemblyPartToParking
  -> 更新 collected / capacity 百分比
```

### 路径终点失败

```text
长龙链头到达路径终点
  -> 先执行本帧同色匹配
  -> 等待已经起飞的小零件全部落地
  -> 链头仍未被吸收
  -> checkTankAssemblyChainEndFailure
  -> 冻结长龙和新坦克点击
  -> 提示“零件到达终点”
```

### 完成和胜利

```text
collected >= capacity
  -> completeTankAssemblyParking
  -> 隐藏 progressRoot
  -> 坦克驶离装配台
  -> finishTankAssemblyParkingExit
  -> 所有坦克完成
  -> finishTankAssemblyStage("allComplete")
  -> 显示 okPrefab
```

## 10. 常用修改入口

### 修改第一关坦克布局

编辑：

`assets/script/scripts/Level-29086_tankBoardConfig.ts`

修改 `TankWaitingBoardByLevel[1]` 中一一对应的`t/d/c`数组。

### 将调试配置粘贴到 Excel/WPS

当前打印按钮只输出一条可复制的`{i,t,d,c,pt,pn}`紧凑配置。TSV生成函数仍保留，
但`Level-29086_control.ts / printTankWaitingBoardConfig()`中的两条TSV日志已经注释，暂不打印。
需要恢复时取消这两行注释，再把日志正文粘贴到Excel或WPS的`A1`单元格。

TSV 每辆坦克一行，列为：关卡ID、坦克ID、坦克类型、颜色、方向、X、Y、容量、零件顺序、
零件类型、零件数量。该表仅用于查看、归档和人工调整，不提供 Excel 自动回写代码功能。

### 修改等待区大小

优先在预制体调整 `rectNode` 的宽高。运行时会覆盖通用配置中的 `board`。

### 修改传送带路径

在预制体调整 `conveyorPathRoot` 下的 `c001...` 节点坐标和顺序。

### 修改零件长龙和吸入效果

零件顺序编辑 `Level-29086_tankBoardConfig.ts` 中对应关卡的`pt/pn`；移动和动画参数编辑
`Level-29086_config.ts` 中的 `TankAssemblyConveyorConfig`。

常用字段：

- `TankWaitingBoardByLevel[1].pt/pn`：连续颜色段及对应数量；`pn`之和为零件总数量。
- `chainSpacing`：相邻零件间距。
- `moveSpeed`：长龙基础前进速度。
- `retreatSpeedMultiplier`：吸收后的前段补位速度。
- `perParkingConcurrency`：单装配位同时吸收数，当前必须保持为1。
- `miniPartCount / miniPartScale / miniPartFlySpeed`：小零件飞行表现。

### 修改备用 Shader 碎裂方式

- 网格和运行时数据：`Level-29086_tankPartShatter.ts`
- Shader 轨迹和透明度：`tank-part-shatter.effect`

### 修改装配台结构

编辑预制体 `parkingRoot/p0...p7`，并同步检查 `tankStop`、`progressRoot` 和代码中的排数判断。

## 11. 验证

等待区配置验证：

```bash
node verify_tank_waiting_board.js -10001
```

该脚本验证坦克配置、至少一条可解顺序，以及长龙各颜色数量是否等于对应坦克容量需求，
但不能替代 Cocos Creator 中的实际动画、坐标和触摸测试。


<!-- {i=1,t={10031,10011,10001,10021,10011,10001,10021,10031,10001,10021,10031,10011,10021,10031,10011,10001},d={2,2,3,0,1,4,6,5,0,7,7,3,1,4,6,5},c={{-180,170},{-60,170},{60,170},{180,170},{-180,70},{-60,70},{60,70},{180,70},{-180,-20},{-60,-20},{60,-20},{180,-20},{-180,-130},{-60,-130},{60,-130},{180,-130}},pt={4,2,1,3,2,1,3,4,1,3,4,2,3,4,2,1},pn={2,4,6,10,4,6,10,2,6,10,2,4,10,2,4,6}},
关卡：i=流程关卡ID；t=坦克编号；d=方向0左上、1左、2上、3右上、4左下、5右、6右下、7下；c=坐标（x,y）；pt=零件类型；pn=对应数量。 -->
