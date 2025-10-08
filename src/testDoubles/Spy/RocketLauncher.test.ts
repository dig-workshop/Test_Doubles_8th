import {SpyRocket} from './SpyRocket'
import {RocketLauncherImpl} from './RocketLauncher'
import {StubFailureAuth, StubSuccessAuth} from "./StubAuth";

describe('ロケット発射システム（RocketLauncherImpl）の認証機能のテスト', () => {

    it('認証が通った場合、ロケットが発射される', () => {
        const rocketLauncher = new RocketLauncherImpl()
        const spyRocket = new SpyRocket()
        const stubSuccessAuth = new StubSuccessAuth()

        rocketLauncher.launch(spyRocket, stubSuccessAuth)

        expect(spyRocket.fire_wasCalled).toBeTruthy()
    })

    it('認証が通らなかった場合、ロケットが発射されない', () => {
        const rocketLauncher = new RocketLauncherImpl()
        const spyRocket = new SpyRocket()
        const stubFailureAuth = new StubFailureAuth()

        rocketLauncher.launch(spyRocket, stubFailureAuth)

        expect(spyRocket.fire_wasCalled).toBeFalsy()
    })
})
