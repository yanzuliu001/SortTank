// @ts-nocheck

export interface RGBAColor {
    r: number;
    g: number;
    b: number;
    a?: number;
}

export default class LevelUtils {
    static getRandomInt(min: number = 0, max: number = 1): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    static getRandomFloat(min: number = 0, max: number = 1): number {
        return Math.random() * (max - min + 1) + min;
    }

    static getRandomValueInArray<T>(list: T[]): T {
        return list[Math.floor(Math.random() * list.length)];
    }

    static getTwoPosAngle(startPos: cc.Vec2, endPos: cc.Vec2): number {
        return Math.atan((endPos.y - startPos.y) / (endPos.x - startPos.x));
    }

    static getTwoPosDistance(startPos: cc.Vec2, endPos: cc.Vec2): number {
        return Math.sqrt(Math.pow(endPos.x - startPos.x, 2) + Math.pow(endPos.y - startPos.y, 2));
    }

    static getAngleByTwoPoint(startPos: cc.Vec2, endPos: cc.Vec2): number {
        const direction = endPos.sub(startPos).normalize();
        if (direction.equals(cc.v2(0, 0))) {
            return 0;
        }

        return (direction.signAngle(cc.v2(1, 0)) / Math.PI) * 180 + 90;
    }

    static convertAngleToRadian(angle: number): number {
        return (angle * Math.PI) / 180;
    }

    static convertRadianToAngle(radian: number): number {
        return radian / (Math.PI / 180);
    }

    static isHex(hex: string): boolean {
        return /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(hex);
    }

    static convertHexToRGBA(hex: string): RGBAColor | null {
        if (!this.isHex(hex)) {
            return null;
        }

        return {
            r: parseInt(hex.substr(1, 2), 16) || 0,
            g: parseInt(hex.substr(3, 2), 16) || 0,
            b: parseInt(hex.substr(5, 2), 16) || 0,
            a: parseInt(hex.substr(7, 2), 16) || 255
        };
    }

    static convertRGBAToHex(color: RGBAColor): string {
        const red = (256 | color.r).toString(16).slice(1);
        const green = (256 | color.g).toString(16).slice(1);
        const blue = (256 | color.b).toString(16).slice(1);

        if (color.a == null) {
            return ("#" + red + green + blue).toUpperCase();
        }

        return ("#" + red + green + blue + (256 | color.a).toString(16).slice(1)).toUpperCase();
    }

    copyAny<T>(value: T): T {
        return JSON.parse(JSON.stringify(value));
    }

    static shuffle<T>(list: T[]): T[] {
        for (let index = list.length; index; ) {
            const randomIndex = Math.floor(Math.random() * index--);
            const current = list[index];

            list[index] = list[randomIndex];
            list[randomIndex] = current;
        }

        return list;
    }
}
