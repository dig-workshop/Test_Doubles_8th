import {Weather, WeatherRepository} from './Types'

// ⭐️ここを実装
export class StubSunnyWeatherRepository implements WeatherRepository {
    getWeather(): Weather {
        return Weather.SUNNY
    }
}

// ⭐️ここを実装
export class StubRainyWeatherRepository implements WeatherRepository {
    getWeather(): Weather {
        return Weather.RAINY
    }
}
