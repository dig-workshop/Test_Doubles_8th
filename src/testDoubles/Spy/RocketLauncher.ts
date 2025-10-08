import {LaunchRocketSystem, Auth, Rocket} from './Types'

export class RocketLauncherImpl implements LaunchRocketSystem {

    launch(rocket: Rocket, auth: Auth) {
        if (auth.authenticate("validPassword")) {
            rocket.fire()
        }
    }
}