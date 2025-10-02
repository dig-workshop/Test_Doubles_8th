import {Weather, WeatherRepository} from './Types'

// 天気が「晴れ」という返り値のStubの役割を果たすクラスです
export class StubSunnyWeatherRepository implements WeatherRepository {
    getByCity(city: string): Promise<Weather> {
        return Promise.resolve(Weather.SUNNY)
    }
}

// 「晴れ以外」の時のテストをする Stub のための WeatherRepository を追加してください
// ⭐️Answer:これは作ってもらう、晴れ以外の時のテストができたら良いのでStubCloudyを追加しても良い
// export class StubRainyWeatherRepository implements WeatherRepository {
//     getByCity(city: string): Promise<Weather> {
//         return Promise.resolve(Weather.RAINY)
//     }
// }
