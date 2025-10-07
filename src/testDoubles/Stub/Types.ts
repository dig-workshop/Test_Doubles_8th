export enum Weather {
    SUNNY,
    RAINY,
}

export type WeatherRepository = {
    getByCity: (city: string) => Promise<Weather>
}

export type LaunchRocketSystem = {
    weatherRepository: WeatherRepository
    city: string
    launch: () => Promise<boolean>
}
