// ※このデータ型は変更しないでください
export enum Weather {
    SUNNY,
    RAINY,
}

export type WeatherRepository = {
    getWeather: () => Promise<Weather>
}

export type LaunchRocketSystem = {
    launch: () => boolean
}
