import {LaunchRocketSystem, Rocket} from "./Types";

export class LaunchRocketImpl implements LaunchRocketSystem {
    rocket: Rocket
    password: string

    constructor(rocket: Rocket, password: string) {
        this.rocket = rocket
        this.password = password
    }

    launch() {
        // ここにコードを記述して下さい
        if (this.password === 'black300') {
            this.rocket.fire()
        } else {
            this.rocket.disable()
        }
    }
}