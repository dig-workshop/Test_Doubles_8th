import {LaunchRocketSystem, Auth, Rocket} from './Types'

export class RocketLauncherImpl implements LaunchRocketSystem {

    launch(rocket: Rocket, auth: Auth) {
        // テストが通るように修正してください
        rocket.fire()
    }
}