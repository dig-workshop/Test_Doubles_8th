import {LaunchRocketImpl} from './LaunchRocket'
import {StubWeatherRepository} from './StubWeatherRepository'
import {Weather} from './Types'

// LaunchRocketは天気APIに依存しており、返り値によって挙動が変わります。
// このままでは本物のAPIを叩いてしまうので、時間がかかる＋テストができません。
// そこでWeatherRepositoryのスタブ（返り値を固定するもの）を使って、テストできるようにしましょう

describe('LaunchRocketImpl（ロケット発射装置）のテスト', () => {
    it('天気が晴れの場合、返り値が ロケットを発射しました になること', async () => {
        const stubWeatherRepository = new StubWeatherRepository()
        stubWeatherRepository.getByCity_returnValue = Promise.resolve(Weather.SUNNY)
        const launchRocket = new LaunchRocketImpl(stubWeatherRepository)


        const result = await launchRocket.launch()


        expect(result).toBe('ロケットを発射しました')
    })

    it('天気が晴れの以外の場合、返り値が 自爆しました になること', async () => {
        const stubWeatherRepository = new StubWeatherRepository()
        stubWeatherRepository.getByCity_returnValue = Promise.resolve(Weather.RAINY)
        const launchRocket = new LaunchRocketImpl(stubWeatherRepository)


        const result = await launchRocket.launch()


        expect(result).toBe('自爆しました')
    })
})
