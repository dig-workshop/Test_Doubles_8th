export type Rocket = {
    fire: () => void
    disable: () => void
}

export type LaunchRocketSystem = {
    password: string
    rocket: Rocket
    launch: () => void
}
