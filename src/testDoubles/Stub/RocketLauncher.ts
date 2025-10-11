import {LaunchRocketSystem, Weather, WeatherRepository} from './Types'

export class RocketLauncherImpl implements LaunchRocketSystem {
    constructor(private weatherRepository: WeatherRepository) {}

    launch(): boolean {
        // まずは「晴れ」の時のテストが通るように書き換えましょう。
        // 「晴れ」のテストが通り、「雨」の Stub ができたら、どちらのテストも通るように書き換えてください。
        return false
    }
}