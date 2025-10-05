import {DummyRocket} from './DummyRocket'
import {LaunchRocketImpl} from './LaunchRocket'
import exp from "node:constants";

// スタブのテストでは、launchが boolean の値を返す仕様にしていました。
// ですが、本来はLaunchRocketImplがRocketというオブジェクトに対して何かしらの操作を与えた結果、ロケットが発射されるべきです。
// そこで、ロケットを打つ時は、Rocketオブジェクトとパスワードを渡し、正しければRocketのfireメソッドを呼ぶようにします。
// 本物のRocketオブジェクトのfireメソッドを呼んでしまうと、本物のロケットが発射されてしまいます。
// また、LaunchRocketImplのlaunchメソッドには返り値がありません。
// Dummy（使うとエラーを出力するもの）を使用して、間違ったパスワードを渡した場合に、発射がされていないことを確認しましょう。


describe('LaunchRocketImpl（ロケット発射装置）のテスト', () => {
    it('間違ったパスワードが返った場合、fireは実行されない', () => {

        // 実行されないことをテストする場合、DummyRocket は、発射するとエラーを出力するようになっているべきです。
        // まずはDummy として機能するよう、DummyRocket を修正しましょう。
        // 正しく修正できたら、LaunchRocketの実装前はこのテストが落ちるはずです。
        const invalidPassword = 'invalidPassword' // わざと間違ったパスワード
        const dummyRocket = new DummyRocket()
        const launchRocket = new LaunchRocketImpl(dummyRocket, invalidPassword)

        // ロケットが発射されていなければエラーが出ず、テストが通るはずです。
        launchRocket.launch()
        // ⭐️↑ dummyで実行されないことを確認するならassertionが無くてもテストとしては適切？
    })
})
