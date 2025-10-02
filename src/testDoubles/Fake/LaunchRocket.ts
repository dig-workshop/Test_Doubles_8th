import {AuthServer, LaunchRocketSystem, Rocket} from './Types'

export class LaunchRocketImpl implements LaunchRocketSystem {
    rocket: Rocket
    authServer: AuthServer

    constructor(rocket: Rocket, authServer: AuthServer) {
        this.rocket = rocket
        this.authServer = authServer
    }

    login(userId: string) {
        // テストが通るように実装してください
    }

    async launchBy(userId: string) {
        // テストが通るように実装してください
    }
}