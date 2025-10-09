import {LaunchRocketSystem, Weather, WeatherRepository} from './Types'

export class RocketLauncherImpl implements LaunchRocketSystem {
    constructor(private weatherRepository: WeatherRepository) {}

    async launch(): Promise<boolean> {
        // ⭐️ここを実装
        const weather = this.weatherRepository.getWeather()
        return weather === Weather.SUNNY
    }
}