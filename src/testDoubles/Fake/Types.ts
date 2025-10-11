// ※このデータ型は変更しないでください
export type Rocket = {
    fire: () => void
}

export type LaunchRocketSystem = {
    login: (userId: string) => void
    launchByAuthenticatedUser: (userId: string) => void
}

export type User = {
    name: string
    email: string
}

export type AuthServer = {
    login: (userId: string) => void
    getUser: (userId: string) => Promise<User | undefined>
}
