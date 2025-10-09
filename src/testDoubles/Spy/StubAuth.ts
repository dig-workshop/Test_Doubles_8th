import {Auth} from "./Types";

export class StubSuccessAuth implements Auth {
    authenticate(): boolean {
        return true
    }
}

export class StubFailureAuth implements Auth {
    authenticate(): boolean {
        return false
    }
}