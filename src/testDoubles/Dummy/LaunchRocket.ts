import {LaunchRocketSystem, Rocket} from './Types'

export class LaunchRocketImpl implements LaunchRocketSystem {
    rocket: Rocket
    password: string

    constructor(rocket: Rocket, password: string) {
        this.rocket = rocket
        this.password = password
    }

    launch() {
        // テストが通るように実装してください
    }
}