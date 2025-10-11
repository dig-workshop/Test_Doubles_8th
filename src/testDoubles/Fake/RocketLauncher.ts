import {AuthServer, LaunchRocketSystem, Rocket} from './Types'

export class RocketLauncherImpl implements LaunchRocketSystem {
    private rocket: Rocket
    private authServer: AuthServer

    constructor(rocket: Rocket, authServer: AuthServer) {
        this.rocket = rocket
        this.authServer = authServer
    }

    login(userId: string) {
        this.authServer.login(userId)
    }

    async launchByAuthenticatedUser(userId: string) {
        // テストが通るように修正してください
        this.rocket.fire()
    }
}