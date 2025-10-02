import {Rocket} from "./Types";

export class DummyRocket implements Rocket {
    fire() {
        throw new Error("これはダミーロケットです")
    }
}
