// このデータ型は変更しないでください
export enum Weather {
    SUNNY,
    RAINY,
}

export type WeatherRepository = {
    getWeather: () => Weather
}

export type LaunchRocketSystem = {
    launch: () => Promise<boolean>
}
