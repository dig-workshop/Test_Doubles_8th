import {RocketLauncherImpl} from './RocketLauncher'
import {StubRainyWeatherRepository, StubSunnyWeatherRepository} from "./StubWeatherRepository";

describe('RocketLauncherImpl（ロケット発射装置）のテスト', () => {

    it('天気が「晴れ」の場合、打ち上げを実行した返り値が true になること', async () => {
        const stubSunnyWeatherRepository = new StubSunnyWeatherRepository()
        const rocketLauncher = new RocketLauncherImpl(stubSunnyWeatherRepository)

        const result = await rocketLauncher.launch()

        expect(result).toBeTruthy()
    })

    it('天気が「雨」の場合、打ち上げを中止すること', async () => {
        const stubRainyWeatherRepository = new StubRainyWeatherRepository()
        const rocketLauncher = new RocketLauncherImpl(stubRainyWeatherRepository)

        const result = await rocketLauncher.launch()

        expect(result).toBeFalsy()
    })
})
