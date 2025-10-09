import {Rocket} from './Types'
export class SpyRocket implements Rocket {
    fire_wasCalled = false

    fire() {
        // ⭐️ここを実装
        this.fire_wasCalled = true
    }
}