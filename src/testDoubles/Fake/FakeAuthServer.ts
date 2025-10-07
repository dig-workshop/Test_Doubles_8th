import { AuthServer, AuthUser, User } from './Types'
//⭐️実装変更したので、動くかどうか確認のため解答全部入れてみる
// Fakeの役割を果たすように書き換えてください
export default class FakeAuthServer implements AuthServer {
    private users: AuthUser[] = [{
        userId: "taro",
        password: "12345",
        email: "taro@mail.com",
        isLogin: false
    }]

    login(userId: string, password: string): boolean {
        const user = this.users.find(u => u.userId === userId && u.password === password)
        if (user) {
            user.isLogin = true
            return true
        } else {
            return false
        }
    }

    getUser(userId: string | undefined): Promise<User | undefined> {
        const user = this.users.find(u => u.userId === userId && u.isLogin)
        if (!user) return Promise.resolve(undefined)

        return Promise.resolve({
            userId: user.userId,
            email: user.email
        })
    }
}