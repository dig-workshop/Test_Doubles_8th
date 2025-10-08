import {Auth, LaunchRocketSystem, Rocket} from './Types'

export class LaunchRocketImpl implements LaunchRocketSystem {

    launch(rocket: Rocket, auth: Auth) {
        if(auth.authenticate("validPassword")) { // パスワードはなんでも良い
            rocket.fire()
        }
    }
}