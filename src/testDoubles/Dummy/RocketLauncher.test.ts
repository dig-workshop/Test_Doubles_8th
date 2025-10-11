// ※このテストの内容は変更しないでください
import {DummyRocket} from './DummyRocket'
import {RocketLauncherImpl} from './RocketLauncher'
import {StubFailureAuth} from "./StubAuth";

// スタブのテストでは、launchメソッド が boolean の値を返す仕様にしていましたが、
// 本来は RocketLauncherImpl が Rocket というオブジェクトに対して何かしらの操作を与えた結果、
// ロケットが発射されるべきです。

// そこで、ロケットを発射するときは、Rocket と一緒に Auth(認証情報) を渡し、通っていればRocketの
// fireメソッド を呼ぶようにします。
// ただ、本物の Rocket の fireメソッド を呼んでしまうと、本物のロケットが発射されてしまいます。
// また、RocketLauncherImpl の launchメソッド には返り値がありません。
// Dummy（使うとエラーを出すもの）を使用して、認証が通らなかった場合には発射されないことを確認しましょう。

describe('RocketLauncherImpl（ロケット発射装置）の認証機能のテスト', () => {

    // 実行されないことをテストする場合、DummyRocket は、発射するとエラーを出力するようになっているべきです。
    // まずは Dummy として正しく機能するよう、DummyRocket を修正しましょう。
    // 正しく修正できたら、RocketLauncherImpl の実装前はエラーでこのテストが落ちるはずです。
    it('認証が通らなかった場合、ロケットは発射されない', () => {

        const rocketLauncher = new RocketLauncherImpl()
        const dummyRocket = new DummyRocket()
        const stubFailureAuth = new StubFailureAuth()

        // assertionが無くても、ダミーロケットが発射されていなければエラーが出ずテストが通る
        rocketLauncher.launch(dummyRocket, stubFailureAuth)
    })
})
