import {LaunchRocketSystem, Rocket} from './Types'

export class LaunchRocketImpl implements LaunchRocketSystem {
    rocket: Rocket
    password: string

    constructor(rocket: Rocket, password: string) {
        this.rocket = rocket
        this.password = password
    }

    launch() {
        // テストが通るように、パスワードが正しい場合のみロケットに着火する仕様で実装してください
            this.rocket.fire()
        // ⭐️Answer:
        // if(this.password === 'correctPassword') {
        //     this.rocket.fire()
        // }
    }
}