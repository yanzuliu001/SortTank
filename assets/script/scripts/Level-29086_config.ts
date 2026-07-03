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

export const TankAssemblyConveyorConfig = {
    // 整条零件长龙沿 conveyorPathRoot 前进的基础速度，单位：像素/秒。
    moveSpeed: 60,
    moveSpeedMin: 0,
    moveSpeedMax: 1000,

    // 相邻两个零件中心之间的固定距离，单位：像素。
    chainSpacing: 42,
    // 零件开始飞行时，前方链段立即以基础移动速度的该倍数后退，用于补齐空位。
    // 链段同时仍在正常前进，因此 4 倍后退对应约 3 倍基础速度的视觉净后退。
    retreatSpeedMultiplier: 4,
    // 链头距离路径终点小于该值时视为到达终点，单位：像素。
    endTolerance: 0.5,
    // 每个装配位同一时间最多吸收的零件数；当前玩法固定为 1。
    perParkingConcurrency: 1,
    // 下方颜色序列的重复次数；22 节一轮，重复 4 次共 88 节。
    chainRepeat: 4,
    // 固定长龙颜色序列。colorId：1=橙，2=蓝，4=绿，6=紫。
    chainRunCycle: [
        { colorId: 1, count: 2 },
        { colorId: 2, count: 2 },
        { colorId: 4, count: 3 },
        { colorId: 6, count: 3 },
        { colorId: 2, count: 2 },
        { colorId: 6, count: 3 },
        { colorId: 4, count: 3 },
        { colorId: 6, count: 4 }
    ],

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

    // 装配完成后的坦克离场动画。
    assemblyExitVerticalDuration: 0.35,
    assemblyExitTopRoadOffset: 8,
    assemblyExitHorizontalDuration: 0.7,

    // 传送带零件显示缩放。
    partScale: 1
};

// 传送带诊断日志总开关。
export const TankAssemblyDebugLog = false;
