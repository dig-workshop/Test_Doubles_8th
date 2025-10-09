import {Rocket} from './Types'
export default class SpyRocket implements Rocket {
    fire_wasCalled: boolean = false
    fire(): void {
        // ⭐️ここを実装
        this.fire_wasCalled = true
    }

    disable_wasCalled: boolean = false
    abort(): void {
        // ⭐️ここを実装
        this.disable_wasCalled = true
    }
}