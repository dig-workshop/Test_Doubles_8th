// ※このテストの内容は変更しないでください
import {SpyRocket} from './SpyRocket'
import {RocketLauncherImpl} from './RocketLauncher'
import {StubFailureAuth, StubSuccessAuth} from "./StubAuth";

// ダミーでは、ロケットが発射されていないことのテストしかできませんでした。
// 今度は、認証状態に応じてロケットが 発射されること/されないこと をどちらもテストで確認したいです。
// スパイ（ロケットの点火ロジックが 呼ばれたか・呼ばれていないか を記録するもの）を使ってテストしてみましょう。

describe('ロケット発射システム（RocketLauncherImpl）の認証機能のテスト', () => {

    // まずはこのテストが通るように、SpyRocket を実装してみましょう。
    it('認証が通った場合、ロケットが発射される', () => {
        const rocketLauncher = new RocketLauncherImpl()
        const spyRocket = new SpyRocket()
        const stubSuccessAuth = new StubSuccessAuth()

        rocketLauncher.launch(spyRocket, stubSuccessAuth)

        expect(spyRocket.fire_wasCalled).toBeTruthy()
    })

    // 上のテストで SpyRocket を正しく実装できていれば、このテストが通らなくなるはずです。
    // 今度はどちらのテストも通るように、rocketLauncher を修正しましょう。
    it('認証が通らなかった場合、ロケットが発射されない', () => {
        const rocketLauncher = new RocketLauncherImpl()
        const spyRocket = new SpyRocket()
        const stubFailureAuth = new StubFailureAuth()

        rocketLauncher.launch(spyRocket, stubFailureAuth)

        expect(spyRocket.fire_wasCalled).toBeFalsy()
    })
})
