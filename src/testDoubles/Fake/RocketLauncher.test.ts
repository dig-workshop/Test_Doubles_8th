import {SpyRocket} from './SpyRocket'
import {RocketLauncherImpl} from './RocketLauncher'
import FakeAuthServer from './FakeAuthServer'

// 認証サーバーでのログインが必要になった場合について考えてみましょう。
// 認証サーバーを使うには、会社のセキュリティー部門との打合せや、手続き等、L/Tが長くなりがちです。
// このままでは、それがブロッカーとなりプロジェクトが進みません。
// そこで、Fakeを使って、認証サーバー以外の部分を進めていきましょう。
// Fake認証サーバーでは、ユーザーIDを渡すと、認証済ならユーザー情報を、未認証ならundefinedを返します。
// ただし、Fakeにはロジックが含まれるため、Fakeに対してのテストも必要となります。

describe('ロケット発射システムのテスト', ()=>{
    describe('Fake認証サーバーのテスト', () => {
        it('ユーザーがログイン済みの場合、ユーザー情報を返す', async () => {

            const fakeAuthServer = new FakeAuthServer()
            fakeAuthServer.login("user001")

            const user = await fakeAuthServer.getUser("user001")

            expect(user).toEqual({name: "user name", email: "example@mail.com"})
        })

        it('ユーザーがログイン済みでない場合、undefinedを返す', async () => {

            const fakeAuthServer = new FakeAuthServer()

            const user = await fakeAuthServer.getUser("user001")

            expect(user).toBeUndefined()
        })
    })

    describe('LaunchRocketImplのテスト', () => {
        it('ログイン済ユーザがロケット発射すると、ロケットが発射される', async () => {

            const fakeAuthServer = new FakeAuthServer()
            const spyRocket = new SpyRocket()
            const rocketLauncher = new RocketLauncherImpl(spyRocket, fakeAuthServer)
            rocketLauncher.login("user001")

            await rocketLauncher.launchByAuthenticatedUser("user001")

            expect(spyRocket.fire_wasCalled).toBeTruthy()
        })

        it('未ログインユーザがロケット発射すると、ロケットが発射されない', async () => {

            const fakeAuthServer = new FakeAuthServer()
            const spyRocket = new SpyRocket()
            const rocketLauncher = new RocketLauncherImpl(spyRocket, fakeAuthServer)
            rocketLauncher.login("user001")

            await rocketLauncher.launchByAuthenticatedUser("userXXX")

            expect(spyRocket.fire_wasCalled).not.toBeTruthy()
        })
    })
})