import {LaunchRocketSystem, Auth, Rocket} from './Types'

export class LaunchRocketImpl implements LaunchRocketSystem {

    launch(rocket: Rocket, auth: Auth) {
        //テストが通るように実装してください
        rocket.fire()
        // ⭐️Answer:
        // if (auth.authenticate("username", "password")) {
        //     rocket.fire()
        // }
    }
}