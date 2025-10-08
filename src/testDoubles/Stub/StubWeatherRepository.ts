import {Weather, WeatherRepository} from './Types'

export class StubSunnyWeatherRepository implements WeatherRepository {
    getWeather(): Weather {
        return Weather.SUNNY
    }
}

export class StubRainyWeatherRepository implements WeatherRepository {
    getWeather(): Weather {
        return Weather.RAINY
    }
}
