import {Rocket} from './Types'
//⭐️実装変更したので、動くかどうか確認のため解答全部入れてみる
// Spyの役割を果たすように書き換えてください
export class SpyRocket implements Rocket {
    fire_wasCalled = false

    fire() {
        this.fire_wasCalled = true
    }
}