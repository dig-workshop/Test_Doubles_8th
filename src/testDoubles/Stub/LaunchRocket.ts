import {LaunchRocketSystem, Weather, WeatherRepository} from './Types'


export class LaunchRocketImpl implements LaunchRocketSystem {
    weatherRepository: WeatherRepository
    city: string = ''

    constructor(weatherRepository: WeatherRepository) {
        this.weatherRepository = weatherRepository
    }

    async launch(): Promise<boolean> {
        // まずは「晴れ」の時のテストが通るように書き換えてください
        // 次に、「晴れ以外」の時のテストが通るように書き換えてください
        return Promise.resolve(false)
        //⭐️Answer:
        // 晴れだけが通る実装
        // return Promise.resolve(true)
        // 晴れ以外も通る実装
        // const weather = await this.weatherRepository.getByCity(this.city)
        // return weather === Weather.SUNNY
    }
}