import {MockRocket} from './MockRocket'
import {LaunchRocketImpl} from './LaunchRocket'
import SpyRocket from './SpyRocket'

// また仕様が変わって、発射されなかった場合にロケットを無効化するようににdisableメソッドを呼ぶことになりました。
// そのため、発射されるテストケースでは、fireが呼ばれることに加えて、disableが呼ばれていないことも合わせてテストしたいです。
// 発射されないテストケースも同様に、fireが呼ばれないことに加えて、disableが呼ばれていることを合わせてテストします。
// Spyをそのように書き換えると、リファクタリングの必要があることに気づきます。
// リファクタリングの結果、Spyにアサートが含まれることとなりましたが、それはもうすでにSpyではなくMock（自己検証するSpy）です。

describe('ロケット発射システム（LaunchRocketImpl）のテスト', () => {

    describe('リファクタ前', () => {
        it('正しいpasswordが設定されている場合、ロケットを発射して自爆はしないこと', () => {
            const spyRocket = new SpyRocket()
            const correctPassword = 'black300'
            const launchRocket = new LaunchRocketImpl(spyRocket, correctPassword)


            launchRocket.launch()


            expect(spyRocket.fire_wasCalled).toBeTruthy()
            expect(spyRocket.disable_wasCalled).not.toBeTruthy()
        })

        it('不正なpasswordが設定されている場合、ロケットを発射せず自爆すること', () => {
            const spyRocket = new SpyRocket()
            const invalidPassword = 'white200'
            const launchRocket = new LaunchRocketImpl(spyRocket, invalidPassword)


            launchRocket.launch()


            expect(spyRocket.fire_wasCalled).not.toBeTruthy()
            expect(spyRocket.disable_wasCalled).toBeTruthy()
        })
    })

    describe('リファクタ後', () => {
        it('正しいpasswordが設定されている場合、ロケットを発射して自爆はしないこと', () => {
            const mockRocket = new MockRocket()
            const correctPassword = 'black300'
            const launchRocket = new LaunchRocketImpl(mockRocket, correctPassword)


            launchRocket.launch()


            mockRocket.verifyFire()
        })

        it('不正なpasswordが設定されている場合、ロケットを発射せず自爆すること', () => {
            const mockRocket = new MockRocket()
            const invalidPassword = 'white200'
            const launchRocket = new LaunchRocketImpl(mockRocket, invalidPassword)


            launchRocket.launch()


            mockRocket.verifyDisable()
        })
    })
})

