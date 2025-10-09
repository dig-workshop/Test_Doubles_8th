import {MockRocket} from './MockRocket'
import {RocketLauncherImpl} from './RocketLauncher'
import SpyRocket from './SpyRocket'
import { StubFailureAuth, StubSuccessAuth } from "../Spy/StubAuth"

// パスワードが誤っていた場合、ロケットの発射を中止する機能（abort）が追加されました。
// そのため、fireとabort、それぞれの呼び出し状況をテストしたいです。
// まず、Spyでそのようにテストを書くと、リファクタリングの必要があることに気づきます。
// リファクタリングの結果、Spyにアサートを含む事になりました。
// 言い換えると、SpyはMock（自己検証するSpy）にリファクタリングされた事になります。

describe('ロケット発射システム（RocketLauncherImpl）のテスト', () => {
    describe('リファクタ前', () => {
        it('正しいpasswordを設定した場合、ロケットが発射されて、中止されない', () => {
            const spyRocket = new SpyRocket()
            const stubSuccessAuth = new StubSuccessAuth()
            const rocketLauncher = new RocketLauncherImpl()

            rocketLauncher.launch(spyRocket, stubSuccessAuth)

            expect(spyRocket.fire_wasCalled).toBeTruthy()
            expect(spyRocket.disable_wasCalled).not.toBeTruthy()
        })

        it('不正なpasswordを設定した場合、ロケットが発射さず、中止される', () => {
            const spyRocket = new SpyRocket()
            const stubFailureAuth = new StubFailureAuth()
            const rocketLauncher = new RocketLauncherImpl()

            rocketLauncher.launch(spyRocket, stubFailureAuth)

            expect(spyRocket.fire_wasCalled).not.toBeTruthy()
            expect(spyRocket.disable_wasCalled).toBeTruthy()
        })
    })

    describe('リファクタ後', () => {
        it('正しいpasswordを設定した場合、ロケットが発射されて、中止されない', () => {
            const mockRocket = new MockRocket()
            const stubSuccessAuth = new StubSuccessAuth()
            const rocketLauncher = new RocketLauncherImpl()

            rocketLauncher.launch(mockRocket, stubSuccessAuth)

            mockRocket.verifyTrigger()
        })

        it('不正なpasswordを設定した場合、ロケットが発射さず、中止される', () => {
            const mockRocket = new MockRocket()
            const stubFailureAuth = new StubFailureAuth()
            const rocketLauncher = new RocketLauncherImpl()

            rocketLauncher.launch(mockRocket, stubFailureAuth)

            mockRocket.verifyAbort()
        })
    })
})

