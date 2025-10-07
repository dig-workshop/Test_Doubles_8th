import {SpyRocket} from './SpyRocket'
import {LaunchRocketImpl} from './LaunchRocket'
// import {StubFailureAuth, StubSuccessAuth} from "./StubAuth";

// Dummyでは、ロケットが発射されていないことのテストしかできませんでした。
// 今度は、認証状態に応じてロケットが 発射されること/されないこと をどちらもテストで確認したいです。
// Spy（今回の場合、着火ロジックが呼ばれたか・呼ばれていないか を記録するもの）を使ってテストしてみましょう。

describe('ロケット発射システム（LaunchRocketImpl）のテスト', () => {

    // まずはこのテストが通るように、SpyRocketを実装してみましょう。
    it('正しいパスワードの場合、spyRocket.fire()が呼ばれていること', () => {
        const launchRocket = new LaunchRocketImpl()
        const spyRocket = new SpyRocket()
        // const stubSuccessAuth = new StubSuccessAuth()
        const validPassword = "validPassword"


        // launchRocket.launch(spyRocket, stubSuccessAuth)
        launchRocket.launch(spyRocket, validPassword)


        expect(spyRocket.fire_wasCalled).toBeTruthy()
    })

    // 次に、このテストが通るように、LaunchRocket を修正してください。
    it('間違ったパスワードの場合、spyRocket.fire()が呼ばれないこと', () => {
        const launchRocket = new LaunchRocketImpl()
        const spyRocket = new SpyRocket()
        // const stubFailureAuth = new StubFailureAuth()
        const invalidPassword = "invalidPassword"


        // launchRocket.launch(spyRocket, stubFailureAuth)
        launchRocket.launch(spyRocket, invalidPassword)


        expect(spyRocket.fire_wasCalled).toBeFalsy()
    })
})
