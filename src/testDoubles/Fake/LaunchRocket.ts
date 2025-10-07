import { AuthServer, LaunchRocketSystem, Rocket } from './Types'

//⭐️実装変更したので、動くかどうか確認のため解答全部入れてみる
export class LaunchRocketImpl implements LaunchRocketSystem {
    private authServer: AuthServer
    //ここで保持する？
    private loginUserId: string| undefined = undefined

    constructor(authServer: AuthServer) {
        this.authServer = authServer
    }

    async login(userId: string, password: string) {
        if(this.authServer.login(userId, password)){
            this.loginUserId = userId

            // const response = await this.authServer.getUser(userId)
            // if (response) {
            //     this.isLogin = response.userId
            // } else {
            //     this.isLogin = undefined
            // }
        }
    }

    async launch(rocket: Rocket) {
        const user = await this.authServer.getUser(this.loginUserId)
        if (user) {
            rocket.fire()
        }else{
            console.log("User is not login")
            // throw new Error("User is not login")
        }
    }
}