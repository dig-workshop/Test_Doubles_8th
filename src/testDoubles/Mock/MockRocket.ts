import {Rocket} from "./Types";

export class MockRocket implements Rocket {
    private fire_wasCalled = false
    fire(): void {
        // ⭐️ここを実装
        this.fire_wasCalled = true
    }

    private disable_wasCalled = false
    abort(): void {
        // ⭐️ここを実装
        this.disable_wasCalled = true
    }

    verifyTrigger() {
        // ⭐️ここを実装
        expect(this.fire_wasCalled).toBeTruthy()
        expect(this.disable_wasCalled).toBeFalsy()
    }

    verifyAbort() {
        // ⭐️ここを実装
        expect(this.fire_wasCalled).toBeFalsy()
        expect(this.disable_wasCalled).toBeTruthy()
    }
}