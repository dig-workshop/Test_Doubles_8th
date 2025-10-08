export enum Weather {
    SUNNY,
    RAINY,
}

export type WeatherRepository = {
    getWeather: () => Weather
}

export type LaunchRocketSystem = {
    weatherRepository: WeatherRepository
    launch: () => Promise<boolean>
}
