import { Auth, LaunchRocketSystem, Rocket } from "./Types";

export class RocketLauncherImpl implements LaunchRocketSystem {

    launch(rocket: Rocket, auth: Auth):void {
        if (auth.authenticate("validPassword")) {
            rocket.fire()
        }else {
            rocket.abort()
        }
    }
}
