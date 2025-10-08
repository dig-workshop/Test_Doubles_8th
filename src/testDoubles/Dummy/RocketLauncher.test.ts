import {DummyRocket} from './DummyRocket'
import {RocketLauncherImpl} from './RocketLauncher'
import exp from "node:constants";
import {StubFailureAuth} from "./StubAuth";

describe('RocketLauncherImpl（ロケット発射装置）の認証機能のテスト', () => {

    it('認証が通らなかった場合、ロケットは発射されない', () => {

        const rocketLauncher = new RocketLauncherImpl()
        const dummyRocket = new DummyRocket()
        const stubFailureAuth = new StubFailureAuth()

        rocketLauncher.launch(dummyRocket, stubFailureAuth)
    })
})
