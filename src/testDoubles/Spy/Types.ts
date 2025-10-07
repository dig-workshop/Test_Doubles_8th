export type Rocket = {
    fire: () => void　
}

// export type LaunchRocketSystem = {
//     launch: (rocket: Rocket, auth: Auth) => void
// }
export type LaunchRocketSystem = {
    launch: (rocket: Rocket, password: string) => void
}

export type Auth = {
    // ※この username と password の値は何であってもspyでの実装・テストには関係しませんので、明記しておきます。
    authenticate: (username: string, password: string) => boolean
}
