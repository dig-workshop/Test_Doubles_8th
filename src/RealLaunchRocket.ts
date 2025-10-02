import {Rocket, RealLaunchRocketSystem} from "./Types";

export class LaunchRocketImpl implements RealLaunchRocketSystem {
    rocket: Rocket
    password: string

    constructor(rocket: Rocket, password: string) {
        this.rocket = rocket
        this.password = password
    }

    async launch() {
        if (this.password === "black300") {
            return await this.rocket.fire()
        } else {
            return this.rocket.selfDestruction()
        }
    }

}