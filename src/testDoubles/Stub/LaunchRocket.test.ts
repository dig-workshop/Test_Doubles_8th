import {LaunchRocketImpl} from './LaunchRocket'
import {StubSunnyWeatherRepository} from "./StubWeatherRepository";

// LaunchRocketは天気APIに依存しており、その返り値によって挙動が変わります。
// このままでは本物のAPIを叩いてしまうので、レスポンスの時間がかかる＋安定したテストができません。
// そこで、WeatherRepositoryのスタブ（天気の返り値を固定するもの）を使って、テストできるようにしましょう。

// まずは下「晴れ」の時のテストが通るようにLaunchRocketの実装を修正しましょう
describe('LaunchRocketImpl（ロケット発射装置）のテスト', () => {
    it('天気が「晴れ」の場合、返り値が true になること', async () => {
        const stubSunnyWeatherRepository = new StubSunnyWeatherRepository()
        const launchRocket = new LaunchRocketImpl(stubSunnyWeatherRepository)


        const result = await launchRocket.launch()


        expect(result).toBeTruthy()
    })

    // 下のテストは誤ったスタブをしています。
    // 「晴れ以外」の時のテストをするために、WeatherRepositoryにスタブを追加して、正しいテストに修正してください。
    // 正しいテストができたら、通るように実装を修正してください。
    it('天気が「晴れ以外」の場合、返り値が false になること', async () => {
        const stubWeatherRepository = new StubSunnyWeatherRepository()
        const launchRocket = new LaunchRocketImpl(stubWeatherRepository)
        // ⭐️Answer:
        // const stubRainyWeatherRepository = new StubRainyWeatherRepository()
        // const launchRocket = new LaunchRocketImpl(stubRainyWeatherRepository)


        const result = await launchRocket.launch()


        expect(result).toBeFalsy()
    })
})
