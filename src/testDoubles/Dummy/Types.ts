export type Rocket = {
    fire: () => void
}

export type LaunchRocketSystem = {
    rocket: Rocket
    password: string
    launch: () => void
}
