export type Rocket = {
    fire: () => void
    disable: () => void
}

export type LaunchRocketSystem = {
    launch: (rocket: Rocket, password: string) => void
}
