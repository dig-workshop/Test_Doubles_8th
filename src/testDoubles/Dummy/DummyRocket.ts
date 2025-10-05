import {Rocket} from "./Types";

export class DummyRocket implements Rocket {
    fire() {
        // このロケットが Dummy の役割を果たすために、打ち上げが実行されてしまったらエラーを投げるように書き換えてください。
        // ⭐️Answer:
        // throw new Error('dummyRocketが発火してしまいました')
        // ⭐️※return null とした場合はテストが何もしなくても通ってしまうので、その場合はassertionを設定する??
        // return null
    }
}
