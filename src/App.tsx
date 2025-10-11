import React from 'react';
import './App.css';
import {RealRocket} from "./RealRocket";
import {RocketLauncherImpl} from "./RealRocketLauncher";

function App() {
    async function launchButtonClick() {
        // 本物のロケットの準備
        const realRocket = new RealRocket()

        // 外部APIで今日の天気を取得
        const weather = await fetch("https://weather.tsukumijima.net/api/forecast/city/230010")
            .then((response) => response.json()).then((user) => {
                console.log(user.forecasts[0].telop)
                return user.forecasts[0].telop
            })

        // ロケット発射装置に天気の情報をインプット
        const rocketLauncher = new RocketLauncherImpl(weather)

        // 入力されたパスワードを発射メソッドにインプット
        const inputElement = document.getElementById("input") as HTMLInputElement
        const password = inputElement.value
        const launchResult = rocketLauncher.launch(realRocket, password)

        // 入力されたパスワードによって動画を切り替えて表示
        if (launchResult === "ロケットを発射しました") {
            const rocketVideo = document.getElementById("rocketR18") as HTMLIFrameElement
            rocketVideo.src += '?autoplay=1';
            rocketVideo.hidden = false
            const buttonElement = document.getElementById("button") as HTMLAnchorElement
            buttonElement.style.display = "none"
            const textElement = document.getElementById("buttonText") as HTMLButtonElement
            textElement.style.display = "none"
            inputElement.style.display = "none"
        } else if (launchResult === "ロケットを発射できません") {
            const rocketVideo = document.getElementById("rocketR6") as HTMLIFrameElement
            rocketVideo.src += '?autoplay=1';
            rocketVideo.hidden = false
            const buttonElement = document.getElementById("button") as HTMLAnchorElement
            buttonElement.style.display = "none"
            const textElement = document.getElementById("buttonText") as HTMLButtonElement
            textElement.style.display = "none"
            inputElement.style.display = "none"
        } else {
            const rocketVideo = document.getElementById("destructionR12") as HTMLIFrameElement
            rocketVideo.src += '?autoplay=1';
            rocketVideo.hidden = false
            const buttonElement = document.getElementById("button") as HTMLAnchorElement
            buttonElement.style.display = "none"
            const textElement = document.getElementById("buttonText") as HTMLButtonElement
            textElement.style.display = "none"
            inputElement.style.display = "none"
        }
    }

    return (
        <div className="app">
            <iframe className="iframe"
                    id="rocketR18"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/TMR3lHOnKwM"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    hidden={true}>
            </iframe>
            <iframe className="iframe"
                    id="destructionR12"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/YpYaWSj_21g"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    hidden={true}>
            </iframe>
            <iframe className="iframe"
                    id="rocketR6"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/KGCEHeyX5zo"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    hidden={true}>
            </iframe>
            <a id="button" onClick={launchButtonClick} className="btn-emergency-real">
                <span className="btn-emergency-real-bottom"></span>
                <span className="btn-emergency-real-top"><span>発射</span></span>
            </a>
            <div id={"buttonText"} style={{fontSize: "100px;"}}>絶対に押すなよ！</div>
            <input id="input" type="text" placeholder="ここにパスワードを入力"></input>
        </div>
    );
}

export default App;
