import {Rocket} from "./Types";

export class SpyRocket implements Rocket {
    fire_wasCalled = false
    fire() {
        // 正しくSpyの役割を果たすように実装してください
        // ⭐️Answer:
        // this.fire_wasCalled = true
    }
}