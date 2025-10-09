import { Auth, LaunchRocketSystem, Rocket } from "./Types";

export class RocketLauncherImpl implements LaunchRocketSystem {

    launch(rocket: Rocket, auth: Auth):void {
        // ⭐️ここを実装
        if (auth.authenticate()) {
            rocket.fire()
        }else {
            rocket.abort()
        }
    }
}
