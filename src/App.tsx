import React from 'react';
import './App.css';
import {RealRocket} from "./RealRocket";
import {LaunchRocketImpl} from "./RealLaunchRocket";

function App() {
    async function launchButtonClick() {
        // 本物のロケットの準備
        const realRocket = new RealRocket()

        // ロケットを発射装置にセット
        const inputElement = document.getElementById("input") as HTMLInputElement
        const password = inputElement.value
        const launchRocket = new LaunchRocketImpl(realRocket, password)
        const launchResult = await launchRocket.launch()

        // ロケットが発射されたら発射ムービー
        if (launchResult === "ロケットを発射しました") {
            const rocketVideo = document.getElementById("rocketR18") as HTMLIFrameElement
            // const rocketVideo = document.getElementById("rocketR6") as HTMLIFrameElement
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
                    src="https://www.youtube.com/embed/dBj3l7lXd7w"
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
