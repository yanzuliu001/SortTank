// @ts-nocheck

const { ccclass } = cc._decorator;

@ccclass
export default class Level29086DragonItem extends cc.Component {
    /** Current body segment color index. Matches Level-29086_config.colorDes. */
    dragonColor: number | null = null;

    /** Direction image index used by the control script when changing skins. */
    dir: number = 0;

    /** Cached color image key. Kept for compatibility with the original script. */
    colorImgName: number | null = null;

    /** Cached direction image key. Kept for compatibility with the original script. */
    dirImgName: number | null = null;

    /** Whether this queue/body item is currently moving. */
    isMoving: boolean = false;
}
