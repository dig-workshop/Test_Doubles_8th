export type Rocket = {
    fire: () => Promise<string>
    selfDestruction: () => string
}

export type RealLaunchRocketSystem = {
    password: string
    rocket: Rocket
    launch: () => Promise<string> | string
}
