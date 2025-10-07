import {Weather, WeatherRepository} from './Types'

// 「晴れ」の時のテストをする Stub のための StubRainyWeatherRepository を実装してください
export class StubSunnyWeatherRepository implements WeatherRepository {
// ⭐️Answer:
//     getByCity(city: string): Promise<Weather> {
//         return Promise.resolve(Weather.SUNNY)
//     }
}

// 「雨」の時のテストをする Stub のための StubRainyWeatherRepository を実装してください
export class StubRainyWeatherRepository implements WeatherRepository {
// ⭐️Answer:
//     getByCity(city: string): Promise<Weather> {
//         return Promise.resolve(Weather.RAINY)
//     }
}
