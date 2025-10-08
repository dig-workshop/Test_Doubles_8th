import {SpyRocket} from './SpyRocket'
import {LaunchRocketImpl} from './LaunchRocket'
import {StubFailureAuth, StubSuccessAuth} from "./StubAuth";

describe('ロケット発射システム（LaunchRocketImpl）の認証機能のテスト', () => {

    it('認証が通った場合、spyRocket.fire が呼ばれていること', () => {
        const launchRocket = new LaunchRocketImpl()
        const spyRocket = new SpyRocket()
        const stubSuccessAuth = new StubSuccessAuth()


        launchRocket.launch(spyRocket, stubSuccessAuth)


        expect(spyRocket.fire_wasCalled).toBeTruthy()
    })

    it('認証が通らなかった場合、spyRocket.fire が呼ばれないこと', () => {
        const launchRocket = new LaunchRocketImpl()
        const spyRocket = new SpyRocket()
        const stubFailureAuth = new StubFailureAuth()


        launchRocket.launch(spyRocket, stubFailureAuth)


        expect(spyRocket.fire_wasCalled).toBeFalsy()
    })
})
