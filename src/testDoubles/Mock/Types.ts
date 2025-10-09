export type Rocket = {
    fire: () => void
    abort: () => void
}

export type LaunchRocketSystem = {
    launch: (rocket: Rocket, auth: Auth) => void
}

export type Auth = {
    authenticate: () => boolean
}