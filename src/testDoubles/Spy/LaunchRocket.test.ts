import {SpyRocket} from './SpyRocket'
import {LaunchRocketImpl} from './LaunchRocket'

// Dummyでは、ロケットが発射されていないことのテストしかできませんでした。
// では正しく発射されるかどうかをテストするにはどうしたらよいでしょうか？
// Spy（呼ばれたか・呼ばれていないか・どのように呼ばれたかを記録するもの）を使いましょう。

describe('ロケット発射システム（LaunchRocketImpl）のテスト', () => {

    it('正しいパスワードの場合、spyRocket.fire(）が呼ばれていること', () => {
        const spyRocket = new SpyRocket()
        const correctPassword = 'black300'
        const launchRocket = new LaunchRocketImpl(spyRocket, correctPassword)


        launchRocket.launch()


        expect(spyRocket.fire_wasCalled).toBeTruthy()
    })

    it('間違ったパスワードの場合、spyRocket.fire(）が呼ばれないこと', () => {
        const spyRocket = new SpyRocket()
        const invalidPassword = 'white200'
        const launchRocket = new LaunchRocketImpl(spyRocket, invalidPassword)


        launchRocket.launch()


        expect(spyRocket.fire_wasCalled).not.toBeTruthy()
    })
})
