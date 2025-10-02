import {LaunchRocketSystem, Rocket} from "./Types";

export class LaunchRocketImpl implements LaunchRocketSystem {

    launch(rocket: Rocket, password: string):void {
        // テストが通るように実装してください
        if (password === 'black300') {
            rocket.fire()
        } else {
            rocket.disable()
        }
    }
}