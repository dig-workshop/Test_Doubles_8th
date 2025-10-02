import {LaunchRocketSystem, WeatherRepository} from './Types'


export class LaunchRocketImpl implements LaunchRocketSystem {
    weatherRepository: WeatherRepository

    constructor(weatherRepository: WeatherRepository) {
        this.weatherRepository = weatherRepository
    }

    async launch(): Promise<string> {
        // テストが通るように書き換えてください
        return Promise.resolve('')
    }
}