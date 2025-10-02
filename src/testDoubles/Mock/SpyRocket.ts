import {Rocket} from './Types'
//⭐️テスト確認のため、一旦実装を入れてみる
// Spyの役割を果たすように書き換えてください
export default class SpyRocket implements Rocket {
    fire_wasCalled: boolean = false
    fire(): void {
        this.fire_wasCalled = true
    }

    disable_wasCalled: boolean = false
    disable(): void {
        this.disable_wasCalled = true
    }

}