// @ts-nocheck

export default class LevelReviveHelper {
    static levelFailEvent(message: string, reviveCallback: Function) {
        cc.game.emit("levelFailEvent", message, reviveCallback);
    }
}
