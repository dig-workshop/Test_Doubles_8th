import {MockRocket} from './MockRocket'
import {LaunchRocketImpl} from './LaunchRocket'
import SpyRocket from './SpyRocket'

// パスワードが誤っていた場合、ロケットの発射を中止する機能（abort）が追加されました。
// そのため、fireとabort、それぞれの呼び出し状況をテストしたいです。
// まず、Spyでそのようにテストを書くと、リファクタリングの必要があることに気づきます。
// リファクタリングの結果、Spyにアサートを含む事になりました。
// 言い換えると、SpyはMock（自己検証するSpy）にリファクタリングされた事になります。

describe('ロケット発射システム（LaunchRocketImpl）のテスト', () => {
    describe('リファクタ前', () => {
        it('正しいpasswordが設定されている場合、ロケットが発射されて、中止されない', () => {
            const spyRocket = new SpyRocket()
            const validPassword = 'black300'
            const launchRocket = new LaunchRocketImpl()

            launchRocket.launch(spyRocket, validPassword)

            expect(spyRocket.fire_wasCalled).toBeTruthy()
            expect(spyRocket.disable_wasCalled).not.toBeTruthy()
        })

        it('不正なpasswordが設定されている場合、ロケットが発射さず、中止される', () => {
            const spyRocket = new SpyRocket()
            const invalidPassword = 'white200'
            const launchRocket = new LaunchRocketImpl()

            launchRocket.launch(spyRocket, invalidPassword)

            expect(spyRocket.fire_wasCalled).not.toBeTruthy()
            expect(spyRocket.disable_wasCalled).toBeTruthy()
        })
    })

    describe('リファクタ後', () => {
        it('正しいpasswordが設定されている場合、ロケットが発射されて、中止されない', () => {
            const mockRocket = new MockRocket()
            const validPassword = 'black300'
            const launchRocket = new LaunchRocketImpl()

            launchRocket.launch(mockRocket, validPassword)

            mockRocket.verifyTrigger()
        })

        it('不正なpasswordが設定されている場合、ロケットが発射さず、中止される', () => {
            const mockRocket = new MockRocket()
            const invalidPassword = 'white200'
            const launchRocket = new LaunchRocketImpl()

            launchRocket.launch(mockRocket, invalidPassword)

            mockRocket.verifyAbort()
        })
    })
})

