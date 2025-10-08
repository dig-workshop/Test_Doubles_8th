import {DummyRocket} from './DummyRocket'
import {LaunchRocketImpl} from './LaunchRocket'
import exp from "node:constants";
import {StubFailureAuth} from "./StubAuth";

describe('LaunchRocketImpl（ロケット発射装置）の認証機能のテスト', () => {

    it('認証が通らなかった場合、fireは実行されない', () => {

        const launchRocket = new LaunchRocketImpl()
        const dummyRocket = new DummyRocket()
        const stubFailureAuth = new StubFailureAuth()

        launchRocket.launch(dummyRocket, stubFailureAuth)
    })
})
