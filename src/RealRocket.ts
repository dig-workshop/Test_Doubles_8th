import {Rocket} from "./Types";

export class RealRocket implements Rocket {

    fire(): string {
            return "ロケットを発射しました"
    }

    selfDestruction(): string {
        return "自爆しました"
    }

}