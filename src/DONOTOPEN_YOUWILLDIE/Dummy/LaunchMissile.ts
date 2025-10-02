import {LaunchRocketSystem, Rocket} from './Types'

export class LaunchRocketImpl implements LaunchRocketSystem {
    password: string
    rocket: Rocket

    constructor(rocket: Rocket, password: string) {
        this.rocket = rocket
        this.password = password
    }

    launch() {
        this.rocket.fire()
    }
}