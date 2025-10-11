import {Auth, LaunchRocketSystem, Rocket} from "./Types";

export class RocketLauncherImpl implements LaunchRocketSystem {

    launch(rocket: Rocket, auth: Auth): void {
        // テストが通るように修正してください
        rocket.fire()
    }
}
