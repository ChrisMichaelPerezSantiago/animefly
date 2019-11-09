module.exports = {
  productionSourceMap: false,
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "com.animefly.app",
        productName: "AnimeFly",
        win: {
          icon: "./public/logo.png",
          target: [
            {
              target: "nsis",
              arch: ["x64", "ia32"]
            }
          ]
        },
        nsis:{
          oneClick: false,
          perMachine: true,
          allowToChangeInstallationDirectory: true
        },
        publish: [
          {
            provider: "github",
            owner: "ChrisMichaelPerezSantiago",
            repo: "animefly",
            releaseType: "draft",
          }
        ]
      }
    }
  }
}