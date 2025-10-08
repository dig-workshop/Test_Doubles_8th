import {Rocket} from "./Types";

export class DummyRocket implements Rocket {
    fire() {
        throw new Error('dummyRocketに点火してしまいました') // エラー文は無くても良い
    }
}
