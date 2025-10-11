import {LaunchRocketSystem, Auth, Rocket} from './Types'

export class RocketLauncherImpl implements LaunchRocketSystem {

    launch(rocket: Rocket, auth: Auth) {
        // 認証が通らなかった場合のテストも通るように修正してください
        rocket.fire()
    }
}