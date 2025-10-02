export type Rocket = {
    fire: () => void　
}

export type LaunchRocketSystem = {
    password: string
    rocket: Rocket
    launch: () => void
}
