export type Rocket = {
    fire: () => string
    selfDestruction: () => string
}

export type RealRocketLauncherSystem = {
    launch: (rocket: Rocket, password: string) => string
}
