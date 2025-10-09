import {Rocket} from "./Types";

export class DummyRocket implements Rocket {
    fire() {
        // ⭐️ここを実装
        throw new Error('dummyRocketに点火してしまいました')
    }
}
