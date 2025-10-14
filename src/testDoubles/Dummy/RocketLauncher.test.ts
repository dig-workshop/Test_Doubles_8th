import {DummyRocket} from './DummyRocket'
import {RocketLauncherImpl} from './RocketLauncher'
import {StubFailureAuth} from "./StubAuth";

describe('RocketLauncherImpl（ロケット発射装置）の認証機能のテスト', () => {

    // 実行されないことをテストする場合、DummyRocket は、発射するとエラーを出力するようになっているべきです。
    // まずは Dummy として正しく機能するよう、DummyRocket を修正しましょう。
    // 正しく修正できたら、RocketLauncherImpl の実装前はエラーでこのテストが落ちるはずです。
    it('認証が通らなかった場合、ロケットは発射されない', () => {

        const rocketLauncher = new RocketLauncherImpl()
        const dummyRocket = new DummyRocket()
        const stubFailureAuth = new StubFailureAuth()

        // assertionが無くても、ダミーロケットが発射されなければエラーは出ずテストが通る
        rocketLauncher.launch(dummyRocket, stubFailureAuth)
    })
})
