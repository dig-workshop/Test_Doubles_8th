import {RealRocketLauncherSystem, Rocket} from "./Types";

export class RocketLauncherImpl implements RealRocketLauncherSystem {
    constructor(private weather: string) {}

    launch(rocket: Rocket, password: string): string {

        // パスワードが間違っていたらロケットが「自爆」
        if (password !== "validPassword") return rocket.selfDestruction()

        // パスワードが合っていても雨なら「中止」、雨以外の天気ならロケットを「発射」
        if (this.weather === "雨") {
            return "ロケットを発射できません"
        } else {
            return rocket.fire()
        }
    }
}