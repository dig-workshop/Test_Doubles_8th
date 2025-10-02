import {LaunchRocketSystem, Weather, WeatherRepository} from './Types'


export class LaunchRocketImpl implements LaunchRocketSystem {
    weatherRepository: WeatherRepository

    constructor(weatherRepository: WeatherRepository) {
        this.weatherRepository = weatherRepository
    }

    async launch() {
        // ここにコードを記述して下さい
        const weather = await this.weatherRepository.getByCity("Nagoya")
        if (weather === Weather.SUNNY) {
            return "ロケットを発射しました"
        }
        return "自爆しました"
    }
}