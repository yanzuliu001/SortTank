# zqddn_zhb_level-10001 项目说明

## 1. 当前目标

当前主要开发关卡是 `zqddn_zhb_level-10001`，关卡 ID 为 `-10001`。

该关卡已经从原项目的“车辆/乘客排序玩法”分支出一套新的坦克装配流程：

1. 等待区根据静态配置动态创建坦克。
2. 玩家点击坦克，坦克离开等待区并预订装配台。
3. 传送带生产不同颜色的坦克零件。
4. 零件匹配装配台坦克，播放碎裂吸入动画并增加装配进度。
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
- 传送带路径点读取、零件生产和移动。
- 零件颜色匹配、容量预占、碎裂吸入。
- 装配进度、坦克离场和胜利判断。
- 速度滑条、倍速按钮和调试面板。
- `okPrefab` 胜利节点显隐。

该文件已从约 7700 行收缩到约 2100 行，只保留装配玩法、等待区调试和必要生命周期。
当前修改时可优先定位这些方法组：

- `initTankAssemblyParkingSlots`
- `initTankWaitingBoard`
- `initTankAssemblyConveyor`
- `buildTankAssemblyPathPoints`
- `updateTankAssemblyConveyor`
- `createTankAssemblyPart`
- `tryAbsorbTankAssemblyPart`
- `absorbTankAssemblyPart`
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
- `TankAssemblyConveyorConfig`：生产速度、移动速度、吸入类型、碎片数量和动画时间。
- `TankAssemblyBottomButtonsHiddenLevelIds`：隐藏 Game 公共底栏。

零件吸入类型：

```ts
Direct = 1         // 传送带上出现同色零件后直接飞入
BottomAligned = 2  // 到下排并与坦克世界 X 对齐后飞入
```

### 3.3 等待区关卡配置

`assets/script/scripts/Level-29086_tankBoardConfig.ts`

这是编辑第一关坦克布局时最重要的配置文件：

- `TankDirectionVector`：8方向移动向量。
- `TankDirectionAngle`：碰撞多边形使用的方向角。
- `TankTypeConfig`：4种坦克的贴图前缀、颜色 ID、容量和逻辑碰撞尺寸。
- `TankWaitingBoardCommonConfig`：等待区通用移动、碰撞和视觉缩放参数。
- `TankWaitingBoardByLevel["-10001"].tanks`：第一关16辆坦克的类型、方向和坐标。

新增关卡通常只需要增加一份：

```ts
"-关卡ID": {
    tanks: [
        { id, type, direction, x, y }
    ]
}
```

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

### 3.7 碎裂动画

代码：

- `assets/script/scripts/Level-29086_tankPartShatter.ts`
- `assets/resources/zqddn_zhb/effect/tank-part-shatter.effect`

职责：

- 自定义 `cc.RenderComponent + cc.Assembler` 创建三角碎片网格。
- Effect 顶点 Shader 驱动碎片沿曲线飞向 `tankStop`。
- 当前 `4 x 4` 网格生成32个三角碎片、96个顶点。
- 每个效果仍为一个渲染节点和一个 Draw Call。

## 4. 关卡预制体

文件：

`assets/resources/zqddn_zhb/prefab/level/zqddn_zhb_level-10001.prefab`

预制体不仅是画面资源，也是代码依赖的节点接口。以下节点名不能随意修改。

### 4.1 等待区和道路

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

### 4.2 装配台

- `game/element/parkingRoot`
  - 当前有 `p0 ... p7` 共8个装配台。
  - 前4个为第一排，后4个为第二排。
- 每个装配台需要：
  - `tankStop`：坦克停靠点及碎片飞行终点。
  - `progressRoot`：装配百分比 Label。

装配台在坦克点击成功时立即预订。`isEmpty = false` 同时表示“已有坦克”或“已有坦克正在驶来”。

### 4.3 传送带

- `game/element/assemblyTopRoot`
  - 顶部传送带总节点。
- `conveyorPathRoot`
  - 直接子节点名必须为 `c001 / c002 / ...`。
  - 代码读取所有符合 `/^c\d+$/` 的直接子节点，并按数字排序。
  - 路径点数量没有固定上限。
- `partLayer`
  - 普通传送带零件父节点。
- `absorbEffectLayer`
  - 碎裂吸入效果层。
- `countBoardRoot`
  - 四种坦克的完成数量面板。

### 4.4 调试和速度控制

- `debugLayer`：4种坦克、8方向样例和布局编辑 UI。
- `curLevel`：显示当前关卡。
- `levelEdit`：指定打印配置的目标关卡 ID。
- `speedLabel / speedSlider`：零件移动速度。
- `scLabel / scSlider`：零件生产速度。
- `tank_speed`：1倍/2倍速度切换按钮。

打开调试面板时，传送带更新和生产计时暂停；关闭后从原状态继续。

### 4.5 胜利节点

- `game/okPrefab`
  - 初始化时隐藏。
  - 所有坦克装配完成并离场后显示。

## 5. 主要资源目录

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

### 碎裂 Effect

`assets/resources/zqddn_zhb/effect/tank-part-shatter.effect`

## 6. 框架依赖文件

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

## 7. 遗留代码与清理边界

### 7.1 当前不是主逻辑，但不能直接删除

`Level-29086_control.ts` 已不再静态引用龙、乘客、复活、旧车辆和平台存档模块。
但 `zqddn_zhb_level-10001.prefab/carPrefab` 的 15 个隐藏模板节点仍序列化了
`Level-29086_boxCarItem.ts`。新等待区坦克实际使用 `Level-29086_tankItem.ts`，但在从预制体
删除 `carPrefab` 之前，`Level-29086_boxCarItem.ts` 仍需保留以保证反序列化正常。

### 7.2 第一关运行时通常不会使用

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

### 7.3 推荐清理顺序

不要直接批量删除。建议按以下顺序逐步收敛：

1. 先保持 `-10001` 功能稳定，为启动、点击、装配、胜利建立回归测试。
2. 从 `-10001.prefab` 删除 `carPrefab` 等旧模板节点和旧脚本组件。
3. 根据全项目引用扫描删除不再被其他关卡使用的旧模块。
4. 视维护成本再将传送带、装配台和调试面板拆成独立控制器。
5. 最后才处理其他关卡预制体、广告、商城、原玩法 UI 和公共框架。

## 8. 当前数据流

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
  -> create/moveTankAssemblyPart
  -> tryAbsorbTankAssemblyPart
  -> 预占 assemblyIncoming
  -> TankPartShatter 动画
  -> applyTankAssemblyPartToParking
  -> 更新 collected / capacity 百分比
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

## 9. 常用修改入口

### 修改第一关坦克布局

编辑：

`assets/script/scripts/Level-29086_tankBoardConfig.ts`

修改 `TankWaitingBoardByLevel["-10001"].tanks`。

### 修改等待区大小

优先在预制体调整 `rectNode` 的宽高。运行时会覆盖通用配置中的 `board`。

### 修改传送带路径

在预制体调整 `conveyorPathRoot` 下的 `c001...` 节点坐标和顺序。

### 修改零件速度和碎裂

编辑 `Level-29086_config.ts` 中的 `TankAssemblyConveyorConfig`。

### 修改碎裂运动方式

- 网格和运行时数据：`Level-29086_tankPartShatter.ts`
- Shader 轨迹和透明度：`tank-part-shatter.effect`

### 修改装配台结构

编辑预制体 `parkingRoot/p0...p7`，并同步检查 `tankStop`、`progressRoot` 和代码中的排数判断。

## 10. 验证

等待区配置验证：

```bash
node verify_tank_waiting_board.js -10001
```

该脚本验证配置结构和至少一条可解顺序，但不能替代 Cocos Creator 中的实际动画、坐标和触摸测试。
