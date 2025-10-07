import {Rocket} from "./Types";

// Mockの役割を果たすように書き換えてください
export class MockRocket implements Rocket {
    // ここにコードを記述して下さい
    private fire_wasCalled = false
    fire(): void {
        this.fire_wasCalled = true
    }

    private disable_wasCalled = false
    disable(): void {
        this.disable_wasCalled = true
    }

    verifyFire() {
        // ここにコードを記述して下さい
        // ⭐️ヒントで下記どちらかを入れた状態で公開する
        //expect(this.fire_wasCalled).toBeTruthy()
        //expect(false).toBeTruthy()
        expect(this.fire_wasCalled).toBeTruthy()
        expect(this.disable_wasCalled).not.toBeTruthy()
    }

    verifyDisable() {
        // ここにコードを記述して下さい
        expect(this.fire_wasCalled).not.toBeTruthy()
        expect(this.disable_wasCalled).toBeTruthy()
    }
}