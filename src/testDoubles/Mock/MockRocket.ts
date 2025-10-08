import {Rocket} from "./Types";

export class MockRocket implements Rocket {
    private fire_wasCalled = false
    fire(): void {
        this.fire_wasCalled = true
    }

    private disable_wasCalled = false
    abort(): void {
        this.disable_wasCalled = true
    }

    verifyTrigger() {
        expect(this.fire_wasCalled).toBeTruthy()
        expect(this.disable_wasCalled).not.toBeTruthy()
    }

    verifyAbort() {
        expect(this.fire_wasCalled).not.toBeTruthy()
        expect(this.disable_wasCalled).toBeTruthy()
    }
}