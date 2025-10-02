import {Rocket} from './Types'

export default class DefaultRocket implements Rocket {
    fire() {
        console.log("本物のロケットが発射されたよ")
    }

    disable(): void {
        console.log("ほんとに自爆したよ")
    }
}