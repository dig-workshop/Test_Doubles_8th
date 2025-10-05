import {Auth} from "./Types";


export class StubSuccessAuth implements Auth{
    authenticate(username: string, password: string): boolean {
        return true
    }
}

export class StubFailureAuth implements Auth{
    authenticate(username: string, password: string): boolean {
        return false
    }
}