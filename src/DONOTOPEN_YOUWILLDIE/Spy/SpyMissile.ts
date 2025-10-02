import {Rocket} from "./Types";

export class SpyRocket implements Rocket {
    // ここにコードを記述して下さい
    fire_wasCalled = false
    fire() {
        this.fire_wasCalled = true
    }
}