import {Rocket} from './Types'

export default class DefaultRocket implements Rocket {
    fire(): void {
        console.log("本物のロケットが発射されたよ")
    }

    abort(): void {
        console.log("本物のロケットが発射中止されたよ")
    }
}