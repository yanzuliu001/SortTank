// @ts-nocheck

// 当前只启用第一个坦克装配关卡。
export const TankAssemblyLevelIds = {
    "-10001": true
};

// 坦克装配关卡不显示原玩法的手势和文字引导。
export const TankAssemblyGuideDisabledLevelIds = {
    "-10001": true
};

// Game 场景和关卡预制体中的原玩法底部按钮均需隐藏。
export const TankAssemblyBottomButtonsHiddenLevelIds = {
    "-10001": true
};

// 坦克和传送带零件贴图目录。
export const TankSkinTextureDir = "zqddn_zhb/texture/tank/";

// 顶部传送带总开关。
export const TankAssemblyTopEnabled = true;

// 顶部传送带关闭时的备用流程；当前顶部开启，因此通常不会触发。
export const TankAssemblyAutoNextWhenTopDisabledLevelIds = {
    "-10001": true
};
export const TankAssemblyAutoNextDelay = 0.35;

// 四种装配零件及计数板映射。
export const TankAssemblyTypes = [
    { colorId: 1, counterNode: "p0", counterSprite: "tank_yellow_a_4", partSprite: "tank_yellow_a" },
    { colorId: 2, counterNode: "p1", counterSprite: "tank_blue_a_4", partSprite: "tank_blue_a" },
    { colorId: 4, counterNode: "p2", counterSprite: "tank_green_a_4", partSprite: "tank_green_a" },
    { colorId: 6, counterNode: "p3", counterSprite: "tank_purple_a_4", partSprite: "tank_purple_a" }
];

// 装配百分比阶段。当前 Label 显示真实百分比，该数组用于保证进度配置有效。
export const TankAssemblyProgressStages = [
    { progress: 0 },
    { progress: 30 },
    { progress: 70 },
    { progress: 100 }
];

// 零件触发吸入动画的方式。
export const TankAssemblyPartAbsorbTriggerType = {
    // 贴图准备完成后，只要装配区存在可接收的同色坦克就立即飞入。
    Direct: 1,
    // 到达下排，并与对应坦克的世界 X 坐标对齐后才飞入。
    BottomAligned: 2
};

export const TankAssemblyConveyorConfig = {
    // 零件生产速度，单位：个/秒。
    spawnRate: 1.11,
    spawnRateMin: 0,
    spawnRateMax: 2.22,

    // 零件沿 conveyorPathRoot 路径移动的速度，单位：像素/秒。
    moveSpeed: 60,
    moveSpeedMin: 0,
    moveSpeedMax: 1000,

    // 第一颗零件生产前的等待时间，单位：秒。
    startDelay: 1.2,

    // 1=传送带上直接匹配飞入；2=下排与坦克 X 对齐后飞入。
    absorbTriggerType: TankAssemblyPartAbsorbTriggerType.Direct,
    // Shader 或整图回退动画的飞行时长，单位：秒。
    absorbDuration: 2,
    // 动画进行到该比例后开始缩小。
    absorbShrinkDelayRatio: 0.75,
    // 飞到坦克时的最终缩放。
    absorbEndScale: 0.2,

    // Shader 碎裂效果暂时停用，代码保留用于后续效果对比。
    shatterEnabled: false,
    shatterDebugLog: true,
    // 4x4 网格，每格两个三角形，共32个碎片、96个顶点。
    shatterColumns: 4,
    shatterRows: 4,
    shatterCurveSpread: 44,
    shatterRotation: 540,

    // 小零件精灵飞行效果：从原零件处连续发射并汇聚到对应坦克。
    miniPartEnabled: true,
    // 每个原零件分出的精灵数量。
    miniPartCount: 20,
    // 小零件相对原零件的显示缩放。
    miniPartScale: 0.8,
    // 轨迹半宽，单位：像素；只在路线垂直方向做轻微错开。
    miniPartTrailHalfWidth: 16,
    // 相邻小零件开始飞行的时间间隔，单位：秒。
    miniPartEmitInterval: 0.018,
    // 汇聚飞行速度，单位：像素/秒；最短时间用于避免近距离瞬移。
    miniPartFlySpeed: 450,
    miniPartMinFlyDuration: 0.35,
    // 到达坦克时相对初始小零件的最终缩放。
    miniPartArrivalScale: 0.5,

    // BottomAligned 模式使用的判断参数。
    bottomRowYTolerance: 4,
    absorbXAlignmentTolerance: 4,

    // 装配完成后的坦克离场动画。
    assemblyExitVerticalDuration: 0.35,
    assemblyExitTopRoadOffset: 8,
    assemblyExitHorizontalDuration: 0.7,

    // 传送带零件显示缩放。
    partScale: 1
};

// 传送带诊断日志总开关。
export const TankAssemblyDebugLog = false;
