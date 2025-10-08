import {Rocket} from './Types'
export default class SpyRocket implements Rocket {
    fire_wasCalled: boolean = false
    fire(): void {
        this.fire_wasCalled = true
    }

    disable_wasCalled: boolean = false
    abort(): void {
        this.disable_wasCalled = true
    }
}