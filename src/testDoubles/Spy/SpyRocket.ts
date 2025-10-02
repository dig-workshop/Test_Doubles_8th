import {Rocket} from "./Types";

// 正しくSpyの役割を果たすように書き換えてください
export class SpyRocket implements Rocket {
    fire_wasCalled = false
    fire() {
    }
}