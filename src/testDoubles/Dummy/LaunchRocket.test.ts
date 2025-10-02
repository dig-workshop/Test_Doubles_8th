import {DummyRocket} from './DummyRocket'
import {LaunchRocketImpl} from './LaunchRocket'

// スタブのテストでは、説明の簡略化のためにlaunchが文字列を返す仕様にしていました。
// ですが、本来はLaunchRocketImplが何かしらRocketというオブジェクトに対して、操作を与えた結果ロケットが発射されるべきです。
// そこで、ロケットを打つ時は、Rocketオブジェクトとパスワードを渡し、正しければRocketのfireメソッドを呼ぶようにします。
// 本物のRocketオブジェクトのfireメソッドを呼んでしまうと、本物のロケットが発射されてしまいます。
// また、LaunchRocketImplのlaunchメソッドには返り値がありません。
// Dummy（使うとエラーを出力するもの）を使用して、間違ったパスワードを渡した場合に、発射がされていないことを確認しましょう。


describe('LaunchRocketImpl（ロケット発射装置）のテスト', () => {
    it('間違ったパスワードが返った場合、fireは実行されない', () => {
        // 使うとエラーを出力するロケット
        const invalidPassword = 'white300'
        const dummyRocket = new DummyRocket()
        const launchRocket = new LaunchRocketImpl(dummyRocket, invalidPassword)

        // ロケットが発射されていなければエラーが出ず、テストが通るはず
        launchRocket.launch()
    })
})
