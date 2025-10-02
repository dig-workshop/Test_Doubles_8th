import {Rocket} from './Types'

export class SpyRocket implements Rocket {

    fire_wasCalled = false

    fire() {
        this.fire_wasCalled = true
    }
}