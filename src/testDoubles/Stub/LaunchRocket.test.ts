import {LaunchRocketImpl} from './LaunchRocket'
import {StubRainyWeatherRepository, StubSunnyWeatherRepository} from "./StubWeatherRepository";

describe('LaunchRocketImpl（ロケット発射装置）のテスト', () => {

    it('天気が「晴れ」の場合、打ち上げを実行した返り値が true になること', async () => {
        const stubSunnyWeatherRepository = new StubSunnyWeatherRepository()
        const launchRocket = new LaunchRocketImpl(stubSunnyWeatherRepository)


        const result = await launchRocket.launch()


        expect(result).toBeTruthy()
    })

    it('天気が「雨」の場合、打ち上げを中止すること', async () => {
        const stubRainyWeatherRepository = new StubRainyWeatherRepository()
        const launchRocket = new LaunchRocketImpl(stubRainyWeatherRepository)


        const result = await launchRocket.launch()


        expect(result).toBeFalsy()
    })
})
