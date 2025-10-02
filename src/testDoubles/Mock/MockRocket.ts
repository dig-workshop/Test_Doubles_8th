import {Rocket} from "./Types";

// Mockの役割を果たすように書き換えてください
export class MockRocket implements Rocket {
    private fire_wasCalled = false
    fire(): void {
    }

    private disable_wasCalled = false
    disable(): void {
    }

    verifyFire() {
    }

    verifyDisable() {
    }
}