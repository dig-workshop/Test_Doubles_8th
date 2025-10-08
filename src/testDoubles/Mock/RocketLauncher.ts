import {LaunchRocketSystem, Rocket} from "./Types";

export class RocketLauncherImpl implements LaunchRocketSystem {

    launch(rocket: Rocket, password: string):void {
        if (password === 'black300') {
            rocket.fire()
        } else {
            rocket.abort()
        }
    }
}