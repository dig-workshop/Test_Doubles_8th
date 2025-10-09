import {Auth} from "./Types";

export class DefaultAuth implements Auth{
    constructor(private password: string) {}

    authenticate(): boolean {
        return this.password === 'validPassword'
    }
}