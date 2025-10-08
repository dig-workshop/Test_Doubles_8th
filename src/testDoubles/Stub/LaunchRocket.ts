import {LaunchRocketSystem, Weather, WeatherRepository} from './Types'

export class LaunchRocketImpl implements LaunchRocketSystem {
    weatherRepository: WeatherRepository

    constructor(weatherRepository: WeatherRepository) {
        this.weatherRepository = weatherRepository
    }

    async launch(): Promise<boolean> {
        const weather = this.weatherRepository.getWeather()
        return weather === Weather.SUNNY
    }
}