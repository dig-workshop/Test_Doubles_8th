export type Rocket = {
    fire: () => void
}

export type LaunchRocketSystem = {
    // rocket: Rocket
    // authServer: AuthServer
    login: (userId: string, password: string) => void
    launch: (rocket:Rocket) => void
    // launchBy: (userId: string) => void
}

export type User = {
    // name: string
    userId: string
    email: string
}

export type AuthServer = {
    login: (userId: string, password: string) => boolean
    getUser: (userId: string | undefined) => Promise<User | undefined>
}

export type AuthUser = {
    userId: string
    password: string
    email: string
    isLogin: boolean
}