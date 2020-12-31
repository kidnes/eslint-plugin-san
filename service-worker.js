/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1c747e611508aa190e285e4f6393469b"
  },
  {
    "url": "assets/css/0.styles.aa722828.css",
    "revision": "7daebb0233bd3999b8c74e34827a974d"
  },
  {
    "url": "assets/fonts/codicon.a609dc0f.ttf",
    "revision": "a609dc0f334a7d4e64205247c4e8b97c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ec05fe12.js",
    "revision": "4e8d718ae7dd6a553b15cbdd6b452a96"
  },
  {
    "url": "assets/js/12.8e59320c.js",
    "revision": "03e901867ef030ecbbaa430fe976193f"
  },
  {
    "url": "assets/js/13.5553755a.js",
    "revision": "a10d75c4e048359b7e27d95fdb4f1d7f"
  },
  {
    "url": "assets/js/14.06a1db35.js",
    "revision": "7853ff9e1efd7f40d1b03735d0b7523b"
  },
  {
    "url": "assets/js/15.be02ee24.js",
    "revision": "3119e5b408b50970ef7ee48dafe374f7"
  },
  {
    "url": "assets/js/16.d8ce6299.js",
    "revision": "0438a8250fd521d59c28eeb2570869c2"
  },
  {
    "url": "assets/js/17.1a9143e5.js",
    "revision": "ef483946485be430d9d401f289f65103"
  },
  {
    "url": "assets/js/18.301afcdd.js",
    "revision": "6491e16c10c61a96e4c2d79c48f6913c"
  },
  {
    "url": "assets/js/19.1c1ca16e.js",
    "revision": "336f4d17f36ac98543d4ddd727454157"
  },
  {
    "url": "assets/js/20.48382690.js",
    "revision": "887b472c414f3955bb9b36586076483e"
  },
  {
    "url": "assets/js/21.f6bd3042.js",
    "revision": "6e620cd5b7d1254acfcc03840c17f07e"
  },
  {
    "url": "assets/js/22.a1a7d0d1.js",
    "revision": "77112e87adb55208d96c15fed15a36d3"
  },
  {
    "url": "assets/js/23.2c1bf6c4.js",
    "revision": "9e1dc28c5d17b97ff6a47858d7750cfd"
  },
  {
    "url": "assets/js/24.64146423.js",
    "revision": "ec079fdae16156a626defb391f9ca678"
  },
  {
    "url": "assets/js/25.00637a71.js",
    "revision": "2e9e205920471ecf2e9c17a25cfe3dd5"
  },
  {
    "url": "assets/js/26.eead35be.js",
    "revision": "f02e7afade9988b87b912637dd364fb0"
  },
  {
    "url": "assets/js/27.20499d30.js",
    "revision": "db7864d9b01996ed67f98117a39e2bb8"
  },
  {
    "url": "assets/js/28.31d5ebdc.js",
    "revision": "221193f8a385d589235402382d1c7570"
  },
  {
    "url": "assets/js/29.7906a267.js",
    "revision": "e9ecc23e6e3ef54330dd2adc46df85e7"
  },
  {
    "url": "assets/js/3.4a62011d.js",
    "revision": "66387c8cdbe93a716d0cbfaff6e96d5a"
  },
  {
    "url": "assets/js/30.94650f76.js",
    "revision": "4d2e3b5165a33408b7712ddb212091ea"
  },
  {
    "url": "assets/js/31.de6b701b.js",
    "revision": "3064354be70ae529481a1dfa72d42c0d"
  },
  {
    "url": "assets/js/32.8028b081.js",
    "revision": "02f2571d1775f114a12fba6913ab3b08"
  },
  {
    "url": "assets/js/33.1300c955.js",
    "revision": "5c07d40f37277e233fd22690488374ef"
  },
  {
    "url": "assets/js/34.b41a0c12.js",
    "revision": "9c09471ee95c46f7239a529488b3bf79"
  },
  {
    "url": "assets/js/35.5631c54f.js",
    "revision": "da405d52cb876f2a9ef5b835a6fbf76e"
  },
  {
    "url": "assets/js/36.165fc428.js",
    "revision": "bcd38d5e2107187b45f434fbff47a060"
  },
  {
    "url": "assets/js/37.d7665df1.js",
    "revision": "ff7002e6109777ab5774408ea121be8d"
  },
  {
    "url": "assets/js/38.24c1d0c7.js",
    "revision": "823f083d0cbad9320a60d9e25a12b6de"
  },
  {
    "url": "assets/js/39.9a365570.js",
    "revision": "a3a3e8682e8be0d914c4bbba4e168a71"
  },
  {
    "url": "assets/js/4.d1f2a1b0.js",
    "revision": "30d90d9f69466ab6fee33462b8fdf0ae"
  },
  {
    "url": "assets/js/40.59786b35.js",
    "revision": "5513933bd2e8f2a33e3aad955be6faa3"
  },
  {
    "url": "assets/js/41.70125308.js",
    "revision": "6dab20f6fb6aca75331778d04af83e40"
  },
  {
    "url": "assets/js/42.76b8b089.js",
    "revision": "b7c5e515eb6e28d5a92ba4f82698483b"
  },
  {
    "url": "assets/js/43.f695a90b.js",
    "revision": "83df7bf8748eecfd849cdf178598baf7"
  },
  {
    "url": "assets/js/44.fec5cfdc.js",
    "revision": "ee9230bffbe58646d76d86493f73c786"
  },
  {
    "url": "assets/js/45.a2449b7a.js",
    "revision": "d9fecc2a9e8b333e40b0c6fcb6339afa"
  },
  {
    "url": "assets/js/46.56da5e5c.js",
    "revision": "29ad08d75b3950133e3896e618317faa"
  },
  {
    "url": "assets/js/47.3a8e45f4.js",
    "revision": "f919bdf972baf17bfc90ba92cf3a831f"
  },
  {
    "url": "assets/js/48.d275bb63.js",
    "revision": "ac512c9191da0a6b9d8ad1207bfa26f6"
  },
  {
    "url": "assets/js/49.93c573e9.js",
    "revision": "c11cd9094230bf0221a86baed3258423"
  },
  {
    "url": "assets/js/5.9fbb8664.js",
    "revision": "d0a846645293f8c3dee8dbf59b88a565"
  },
  {
    "url": "assets/js/50.0c44f656.js",
    "revision": "5c90ad67505d7313d041083045f91ff1"
  },
  {
    "url": "assets/js/51.6d3bb48c.js",
    "revision": "7ef28c64e6674732417f3a6d4b192385"
  },
  {
    "url": "assets/js/52.0b74d3a7.js",
    "revision": "e2f44c30079e399ecea268fad3fbc50f"
  },
  {
    "url": "assets/js/53.5e0e61da.js",
    "revision": "24e2eafca3bb009e614805bdf9868a88"
  },
  {
    "url": "assets/js/54.30e9f52a.js",
    "revision": "9ca557feb5976bb6b279b1f3ad164ec6"
  },
  {
    "url": "assets/js/55.eb8a7e41.js",
    "revision": "4b892cc0c99a050a3aadeca8c9ec822e"
  },
  {
    "url": "assets/js/56.3d726774.js",
    "revision": "b8f25fe4a7b72458a8f39209c422e5a4"
  },
  {
    "url": "assets/js/57.5b1ba063.js",
    "revision": "4eeab6c174b8f7718e61c6fc3a34a65a"
  },
  {
    "url": "assets/js/58.d6ba0a7e.js",
    "revision": "746a2d69ddb5505d209a5564ef63a7d6"
  },
  {
    "url": "assets/js/59.ff2ee0db.js",
    "revision": "01c0e08a11067b1f4c8c2d83a7c0a884"
  },
  {
    "url": "assets/js/6.0621999c.js",
    "revision": "f5037bdccb488e6b5d702eb9a3d6be85"
  },
  {
    "url": "assets/js/60.15dbf44c.js",
    "revision": "e3eff6a6e4be6309e9ea886de351505b"
  },
  {
    "url": "assets/js/61.8cf76943.js",
    "revision": "f06963c0466ef0d792c7773b76217251"
  },
  {
    "url": "assets/js/62.c4040c69.js",
    "revision": "b0f9aadd8f1a88f34da1d7c63240412c"
  },
  {
    "url": "assets/js/63.8f0eb146.js",
    "revision": "146f7397e3cdd4cee437ed4a11ef2632"
  },
  {
    "url": "assets/js/64.d3e0a30a.js",
    "revision": "e91f21c6987d4b42328ad3cc70bcbc94"
  },
  {
    "url": "assets/js/65.19ff3e9b.js",
    "revision": "631e28de021380065445524653b73b3c"
  },
  {
    "url": "assets/js/66.8da311df.js",
    "revision": "2973c267a59acc77890fd4207fd0ba20"
  },
  {
    "url": "assets/js/67.2731768e.js",
    "revision": "694918fdcadf8ef592e056efb5199d9a"
  },
  {
    "url": "assets/js/68.b1f43a40.js",
    "revision": "64c48d44defeed8886cceb396954c1ba"
  },
  {
    "url": "assets/js/69.66db569c.js",
    "revision": "2070bad8b2c23d1a70da94d1a6c73e1c"
  },
  {
    "url": "assets/js/7.356651e6.js",
    "revision": "9e5067c2bf4f86ca58bafc7bd92a16a0"
  },
  {
    "url": "assets/js/70.4f111683.js",
    "revision": "193313ef9abdadbca7035bbfc6e71f67"
  },
  {
    "url": "assets/js/71.3c41ef1b.js",
    "revision": "436f6a91780ed431a6119c97ce74a82a"
  },
  {
    "url": "assets/js/73.a2b71dfe.js",
    "revision": "e78ec7941a505f85b94426b2e3d7dac4"
  },
  {
    "url": "assets/js/74.daec254b.js",
    "revision": "202864556ab58b8fb9812d890bb6cfa4"
  },
  {
    "url": "assets/js/8.c70e54ac.js",
    "revision": "a91723838230690b9ec073243e8a26dc"
  },
  {
    "url": "assets/js/9.f3668119.js",
    "revision": "674171c64d4229a48a0fa5d83078ded4"
  },
  {
    "url": "assets/js/app.eaa218b8.js",
    "revision": "96286cabf8b6bd6fd099c00045a91388"
  },
  {
    "url": "assets/js/vendors~docsearch.cdcb6b19.js",
    "revision": "98a40a050a2241279f9a780c3d63b30a"
  },
  {
    "url": "developer-guide/index.html",
    "revision": "a7c9e029be451c971c2dc56c3048b072"
  },
  {
    "url": "index.html",
    "revision": "cc5a542383f81ccbeaf2493e8d11ebc2"
  },
  {
    "url": "rules.html",
    "revision": "07caea330aded377eba5a3d954ea94ad"
  },
  {
    "url": "rules/attribute-hyphenation.html",
    "revision": "a49bfc2bc91c664796f203ce2c7797ae"
  },
  {
    "url": "rules/attributes-order.html",
    "revision": "084643fbb0e11b648fdf97083e601c3c"
  },
  {
    "url": "rules/comment-directive.html",
    "revision": "26bae8a628e55fc175213298b2ecac62"
  },
  {
    "url": "rules/component-tags-order.html",
    "revision": "aa5b5a9767ee23c2c9a1f547c0fa25ee"
  },
  {
    "url": "rules/custom-event-name-casing.html",
    "revision": "e40c11200621b12b592e2afdf1a8bf7d"
  },
  {
    "url": "rules/html-closing-bracket-newline.html",
    "revision": "8c9e74e4aa3064e2410a30130d39adb8"
  },
  {
    "url": "rules/html-closing-bracket-spacing.html",
    "revision": "3fa806212fdb5aa0d609fe996ae35c38"
  },
  {
    "url": "rules/html-end-tags.html",
    "revision": "6e4c759251dfff024e7be38e55988a27"
  },
  {
    "url": "rules/html-indent.html",
    "revision": "66ff6829e2f9e7bf4e0d7c84d6d6c1d3"
  },
  {
    "url": "rules/html-quotes.html",
    "revision": "bdf9d338cf738c6b01a87011fcc96578"
  },
  {
    "url": "rules/html-self-closing.html",
    "revision": "43051b42951a9d2e43b8b358805b6a7d"
  },
  {
    "url": "rules/index.html",
    "revision": "d3d8c2a4919587028247bf79fa60cef4"
  },
  {
    "url": "rules/max-attributes-per-line.html",
    "revision": "54954d7b37d67d2701e3e7402e109b94"
  },
  {
    "url": "rules/multiline-html-element-content-newline.html",
    "revision": "ff532201bc69762a51b1ff36f872f6cd"
  },
  {
    "url": "rules/mustache-interpolation-spacing.html",
    "revision": "295d9604bde0811572a5302a23b0e708"
  },
  {
    "url": "rules/no-async-in-computed-properties.html",
    "revision": "eaa305699a725ca1870dce49abd134ae"
  },
  {
    "url": "rules/no-dupe-keys.html",
    "revision": "08dab42be0729d2299b7d89317227d60"
  },
  {
    "url": "rules/no-dupe-s-else-if.html",
    "revision": "abe9d37bdd421f856709c7cfaf7e23b3"
  },
  {
    "url": "rules/no-duplicate-attributes.html",
    "revision": "bab3a09147026f78c6626b02b520f784"
  },
  {
    "url": "rules/no-lone-template.html",
    "revision": "a79f2f5a200ccb07ad7fa9e64ac43486"
  },
  {
    "url": "rules/no-multi-spaces.html",
    "revision": "bcc98920e2dbefdaaed85cc5d3ff21aa"
  },
  {
    "url": "rules/no-multiple-template-root.html",
    "revision": "cdd972003f70193f307ad878e703b2cd"
  },
  {
    "url": "rules/no-parsing-error.html",
    "revision": "1aa4ee9d06b941134035e9295a3decd4"
  },
  {
    "url": "rules/no-reserved-keys.html",
    "revision": "181a7f6f3b414a895782e15343f472e7"
  },
  {
    "url": "rules/no-shared-component-data.html",
    "revision": "24b627cc3110148258d2e50b6ca3c386"
  },
  {
    "url": "rules/no-side-effects-in-computed-properties.html",
    "revision": "3531070765807cfb4902c4c6dd91bfaa"
  },
  {
    "url": "rules/no-spaces-around-equal-signs-in-attribute.html",
    "revision": "0008879811ea51a97a43258d9b102478"
  },
  {
    "url": "rules/no-template-shadow.html",
    "revision": "4ae29f4ebe6ed2c07054f726272ae2a9"
  },
  {
    "url": "rules/no-textarea-mustache.html",
    "revision": "ea415d034a329057214d4b12911ed351"
  },
  {
    "url": "rules/no-unused-components.html",
    "revision": "bf102d533e222242faa42ec3c656a20d"
  },
  {
    "url": "rules/no-unused-vars.html",
    "revision": "ff7db862e7dbcfe95038926a9d89dc9e"
  },
  {
    "url": "rules/no-use-s-if-with-s-for.html",
    "revision": "920d4a83f7d00ba790af45fac8d18514"
  },
  {
    "url": "rules/one-component-per-file.html",
    "revision": "f65ae3a5f1786fe5fcab1ecbeb56c932"
  },
  {
    "url": "rules/order-in-components.html",
    "revision": "1dd372639891001aa8a44d7f23d95e4b"
  },
  {
    "url": "rules/return-in-computed-property.html",
    "revision": "cc9e14b2a7ca08b3905035c3a8cd1f2c"
  },
  {
    "url": "rules/singleline-html-element-content-newline.html",
    "revision": "12225a87687ab755e71765327c539673"
  },
  {
    "url": "rules/this-in-template.html",
    "revision": "62ba16feb5a1d417cdb388cd4bb1387b"
  },
  {
    "url": "rules/valid-s-else-if.html",
    "revision": "de54cc55505bbd66447724866fc67dbc"
  },
  {
    "url": "rules/valid-s-else.html",
    "revision": "c700a5918bf11ac4ede7fba8d817e6d9"
  },
  {
    "url": "rules/valid-s-for.html",
    "revision": "53ded39fe564ce416a8d529c68414b07"
  },
  {
    "url": "rules/valid-s-if.html",
    "revision": "13177b2a257abf7af74cb194f584ea40"
  },
  {
    "url": "rules/valid-s-show.html",
    "revision": "34dffe5cab70d2d83091ff494a4e504d"
  },
  {
    "url": "rules/valid-template-root.html",
    "revision": "0fa45ed73828196b81268655e802a14e"
  },
  {
    "url": "style-guide/index.html",
    "revision": "a90178e195c0df653a32f5b49c2a5963"
  },
  {
    "url": "user-guide/index.html",
    "revision": "996494a72aeed692d5d90733e17d84e0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
