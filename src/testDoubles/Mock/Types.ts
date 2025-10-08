export type Rocket = {
    fire: () => void
    abort: () => void
}

export type LaunchRocketSystem = {
    launch: (rocket: Rocket, password: string) => void
}
