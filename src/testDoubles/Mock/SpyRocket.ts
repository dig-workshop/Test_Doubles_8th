import {Rocket} from './Types'
export default class SpyRocket implements Rocket {
    fire_wasCalled: boolean = false
    fire(): void {
        // fireメソッドの Spy ができるように実装してください
    }

    abort_wasCalled: boolean = false
    abort(): void {
        // abortメソッドの Spy ができるように実装してください
    }
}