export type Rocket = {
    fire: () => void
}

export type LaunchRocketSystem = {
    launch: (rocket: Rocket, auth: Auth) => void
}

export type Auth = {
    authenticate: (password: string) => boolean
}
