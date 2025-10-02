import {AuthServer, LaunchRocketSystem, Rocket} from './Types'
//⭐️実装変更したので、動くかどうか確認のため解答全部入れてみる
export class LaunchRocketImpl implements LaunchRocketSystem {
    private authServer: AuthServer
    private authedUserId: string | undefined = undefined

    constructor(authServer: AuthServer) {
        this.authServer = authServer
    }

    async login(userId: string, password: string) {
        this.authServer.login(userId, password)
        const response = await this.authServer.getUser(userId)
        if (response) {
            this.authedUserId = response.userId
        }else{
            this.authedUserId = undefined
        }
    }

    async launch(rocket: Rocket) {
        const user = await this.authServer.getUser(this.authedUserId)
        if (!user) {
            throw new Error("User is not login")
        }

        rocket.fire()
    }
}