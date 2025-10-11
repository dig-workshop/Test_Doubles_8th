// ※この DefaultAuth の内容は認証のサンプルですので、変更・使用する必要はありません
import {Auth} from "./Types";

export class DefaultAuth implements Auth{
    constructor(private password: string) {}

    authenticate(): boolean {
        return this.password === 'validPassword'
    }
}