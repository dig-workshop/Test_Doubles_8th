// ※このテストの内容は変更しないでください
import {MockRocket} from './MockRocket'
import {RocketLauncherImpl} from './RocketLauncher'
import SpyRocket from './SpyRocket'
import { StubFailureAuth, StubSuccessAuth } from "../Spy/StubAuth"

// 認証が通らなかった場合、ロケットの発射を中止する機能（abort）が追加されました。
// そのため、fire と abort、それぞれのメソッドの呼び出し状況をテストしたいです。
// まず、SpyRocket を使ってテストを書いてみましょう。

describe('ロケット発射システム（RocketLauncherImpl）のテスト', () => {
    describe('リファクタリング前', () => {
        it('認証が通った場合、ロケットが発射されて、中止されない', () => {
            const spyRocket = new SpyRocket()
            const stubSuccessAuth = new StubSuccessAuth()
            const rocketLauncher = new RocketLauncherImpl()

            rocketLauncher.launch(spyRocket, stubSuccessAuth)

            expect(spyRocket.fire_wasCalled).toBeTruthy()
            expect(spyRocket.abort_wasCalled).toBeFalsy()
        })

        it('認証が通らなかった場合、ロケットが発射れず、中止される', () => {
            const spyRocket = new SpyRocket()
            const stubFailureAuth = new StubFailureAuth()
            const rocketLauncher = new RocketLauncherImpl()

            rocketLauncher.launch(spyRocket, stubFailureAuth)

            expect(spyRocket.fire_wasCalled).toBeFalsy()
            expect(spyRocket.abort_wasCalled).toBeTruthy()
        })
    })

// Spy を使ってテストを書くと、リファクタリングの必要性があることに気づきます。
// リファクタリングの結果、Spy に アサーション を含む事になりました。
// 言い換えると、Spy は Mock（自己検証するSpy）にリファクタリングされた事になります。
// 今度は、MockRocket を使って下のテストが通るようにしてみましょう。

    describe('リファクタリング後', () => {
        it('認証が通った場合、ロケットが発射されて、中止されない', () => {
            const mockRocket = new MockRocket()
            const stubSuccessAuth = new StubSuccessAuth()
            const rocketLauncher = new RocketLauncherImpl()

            rocketLauncher.launch(mockRocket, stubSuccessAuth)

            mockRocket.verifyTrigger()
        })

        it('認証が通らなかった場合、ロケットが発射さず、中止される', () => {
            const mockRocket = new MockRocket()
            const stubFailureAuth = new StubFailureAuth()
            const rocketLauncher = new RocketLauncherImpl()

            rocketLauncher.launch(mockRocket, stubFailureAuth)

            mockRocket.verifyAbort()
        })
    })
})

