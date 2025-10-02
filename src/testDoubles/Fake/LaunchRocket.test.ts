import {SpyRocket} from './SpyRocket'
import {LaunchRocketImpl} from './LaunchRocket'
import FakeAuthServer from './FakeAuthServer'
//⭐️ログインとlauncheはエラーを投げてるけど、テストがいまいち。falseやundefinedのがいいかな？⭐️
//⭐️あとで変更する⭐️⭐️
// 単純にパスワードが正しいかだけでなく、認証サーバーでのログインが必要になった場合について考えてみましょう
// 認証サーバーを使うには、会社のセキュリティー部門とも打ち合わせや、面倒な手続き、さらには管理者の作業のリードタイムもかかります。
// このままでは、それがブロッカーになってプロジェクトが進みません。
// Fake（行動模倣）を使って、進められるところだけでも進めていきましょう。
// 認証サーバーにユーザーID渡した時、認証済みならユーザー情報を、認証できていなければundefinedを返します。
// ただし、Fakeにはロジックが含まれるため、Fakeに対してのテストも必要となります。

describe('Fakeのテスト' , () => {
    describe('認証サーバーのFakeのテスト', () => {
        it('未登録ユーザーがログインした場合、エラーを返す', async () => {
            const fakeAuthServer = new FakeAuthServer()
            const userId = "unKnownUser"
            const invalidPassword = "unKnownPassword"

            expect(() => {
                fakeAuthServer.login(userId, invalidPassword)
            }).toThrow("Invalid credentials")
        })

        it('登録ユーザーが間違ったパスワードでログインした場合、エラーを返す', async () => {
            const fakeAuthServer = new FakeAuthServer()
            const userId = "taro"
            const invalidPassword = "unKnownPassword"

            expect(() => {
                fakeAuthServer.login(userId, invalidPassword)
            }).toThrow("Invalid credentials")
        })

        it('登録ユーザーが正しいパスワードでログインした場合、ユーザー情報を返す', async () => {
            const fakeAuthServer = new FakeAuthServer()
            const userId = "taro"
            const validPassword = "12345"

            fakeAuthServer.login(userId, validPassword)

            const user = await fakeAuthServer.getUser("taro")

            expect(user).toEqual({userId: "taro", email: "taro@mail.com"})
        })

        it('登録ユーザーがログインしていない場合、undefinedを返す', async () => {
            const fakeAuthServer = new FakeAuthServer()

            const user = await fakeAuthServer.getUser("taro")

            expect(user).toBeUndefined()
        })
    })

    describe('LaunchRocketImplのテスト', () => {
        it('登録ユーザーが正しいパスワードでログインした場合、ロケットが発射される', async () => {
            const fakeAuthServer = new FakeAuthServer()
            const spyRocket = new SpyRocket()
            const launchRocket = new LaunchRocketImpl(fakeAuthServer)
            const userId = "taro"
            const validPassword = "12345"

            await launchRocket.login(userId,validPassword)
            await launchRocket.launch(spyRocket)

            expect(spyRocket.fire_wasCalled).toBeTruthy()
        })

        it('登録ユーザーが間違ったパスワードでログインした場合、ロケットが発射されない', async () => {
            const fakeAuthServer = new FakeAuthServer()
            const spyRocket = new SpyRocket()
            const launchRocket = new LaunchRocketImpl(fakeAuthServer)
            const userId = "taro"
            const invalidPassword = "unKnownPassword"

            try {
                await launchRocket.login(userId,invalidPassword)
            } catch (e) {
                // エラーをキャッチして無視する
            }

            try {
                await launchRocket.launch(spyRocket)
            } catch (e) {
                // エラーをキャッチして無視する
            }

            expect(spyRocket.fire_wasCalled).not.toBeTruthy()
        })


        it('登録ユーザーがログインしていない場合、ロケットが発射されない', async () => {
            const fakeAuthServer = new FakeAuthServer()
            const spyRocket = new SpyRocket()
            const launchRocket = new LaunchRocketImpl(fakeAuthServer)

            try {
                await launchRocket.launch(spyRocket)
            } catch (e) {
                // エラーをキャッチして無視する
            }

            expect(spyRocket.fire_wasCalled).not.toBeTruthy()
        })

        it('未登録ユーザーがログインした場合、ロケットが発射されない', async () => {
            const fakeAuthServer = new FakeAuthServer()
            const spyRocket = new SpyRocket()
            const launchRocket = new LaunchRocketImpl(fakeAuthServer)
            const userId = "unKnownUser"
            const invalidPassword = "unKnownPassword"

            try {
                await launchRocket.login(userId,invalidPassword)
            } catch (e) {
                // エラーをキャッチして無視する
            }

            try {
                await launchRocket.launch(spyRocket)
            } catch (e) {
                // エラーをキャッチして無視する
            }

            expect(spyRocket.fire_wasCalled).not.toBeTruthy()
        })
    })
})
