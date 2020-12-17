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
    "revision": "c851f2197615cd885ee0d463d31ec891"
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
    "url": "assets/js/16.2b5e5626.js",
    "revision": "4591181a17ae5ab4126ed79badb575e4"
  },
  {
    "url": "assets/js/17.53c56bcd.js",
    "revision": "a42378335183117f94417a90df574bea"
  },
  {
    "url": "assets/js/18.fe8b7c14.js",
    "revision": "385bb88c8eeb1693415ded6aad287868"
  },
  {
    "url": "assets/js/19.1c1ca16e.js",
    "revision": "336f4d17f36ac98543d4ddd727454157"
  },
  {
    "url": "assets/js/20.66e0c10e.js",
    "revision": "1c22bb7b1d832e2c5f25786153913f4b"
  },
  {
    "url": "assets/js/21.7d1e746a.js",
    "revision": "fbb9915ff0dc5c6f3a65fde0ed3f0b7d"
  },
  {
    "url": "assets/js/22.a1437710.js",
    "revision": "9ed025c65ab5853d132f36d53447aa6b"
  },
  {
    "url": "assets/js/23.2bf994ec.js",
    "revision": "07ac665f1dccae2cdb00415aa096f43a"
  },
  {
    "url": "assets/js/24.574a03aa.js",
    "revision": "0f8b953fd1572262c716685e8c493670"
  },
  {
    "url": "assets/js/25.00637a71.js",
    "revision": "2e9e205920471ecf2e9c17a25cfe3dd5"
  },
  {
    "url": "assets/js/26.1bb4e442.js",
    "revision": "2f1a30c36259e9d724c8e3c4b969ab7a"
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
    "url": "assets/js/29.8afc1b62.js",
    "revision": "f939c3b2c81170fb40ae6581f66bce39"
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
    "url": "assets/js/31.85e1de0f.js",
    "revision": "26cfc1ac344c505ce4dfd61556fb1bfa"
  },
  {
    "url": "assets/js/32.81cf3555.js",
    "revision": "364469cf789ae8ce64cae98840c2e437"
  },
  {
    "url": "assets/js/33.4a4eeba0.js",
    "revision": "e825e71540b98b33c89aa17b025ff702"
  },
  {
    "url": "assets/js/34.f2bfa2f8.js",
    "revision": "89020c4f6ce14146658fd7e7f076951f"
  },
  {
    "url": "assets/js/35.3eb37316.js",
    "revision": "0efd7d6dc7ee38af4a02f012376a6943"
  },
  {
    "url": "assets/js/36.b8a55ece.js",
    "revision": "30b28fd7bf28330494960af7918c5e11"
  },
  {
    "url": "assets/js/37.1ede32cb.js",
    "revision": "62312cf986d185079b4b19c1d3ba7232"
  },
  {
    "url": "assets/js/38.0e01c098.js",
    "revision": "0ef31c238aabb90de8a7d042b15256bf"
  },
  {
    "url": "assets/js/39.52e2d428.js",
    "revision": "2fb29e097662617b3778801d4eb586d3"
  },
  {
    "url": "assets/js/4.d1f2a1b0.js",
    "revision": "30d90d9f69466ab6fee33462b8fdf0ae"
  },
  {
    "url": "assets/js/40.a377620b.js",
    "revision": "ebdc8738ffa43d0c0b96a1e693caa56d"
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
    "url": "assets/js/43.85b4291c.js",
    "revision": "56005da38b78b95b91c71e89dfba3216"
  },
  {
    "url": "assets/js/44.0470de20.js",
    "revision": "4d244b9418c41d11f30a41ac512d7215"
  },
  {
    "url": "assets/js/45.6e9c2afe.js",
    "revision": "e9b72f6cf7320002d491d8af3e49ccf7"
  },
  {
    "url": "assets/js/46.56da5e5c.js",
    "revision": "29ad08d75b3950133e3896e618317faa"
  },
  {
    "url": "assets/js/47.bef4dde4.js",
    "revision": "a89a1bab47d553c78274c1da2657a666"
  },
  {
    "url": "assets/js/48.d275bb63.js",
    "revision": "ac512c9191da0a6b9d8ad1207bfa26f6"
  },
  {
    "url": "assets/js/49.1758c486.js",
    "revision": "bf2f9e08ee9a0b8a96961fdbce50f046"
  },
  {
    "url": "assets/js/5.9fbb8664.js",
    "revision": "d0a846645293f8c3dee8dbf59b88a565"
  },
  {
    "url": "assets/js/50.7bab5411.js",
    "revision": "4eaee9c0c9de9feb7ce8e6bf56d3f6e4"
  },
  {
    "url": "assets/js/51.0ae1227f.js",
    "revision": "7c631cd2fa1fc5d6973afec66d2d7743"
  },
  {
    "url": "assets/js/52.19947351.js",
    "revision": "9d39bcec82c2fd4a48658e9f74137985"
  },
  {
    "url": "assets/js/53.f7cd4815.js",
    "revision": "e9d6429d1aa87989216f49b09c2944b8"
  },
  {
    "url": "assets/js/54.6f1526fa.js",
    "revision": "4dac014ca7b7f48263982dcf82b8eb14"
  },
  {
    "url": "assets/js/55.15e97c2a.js",
    "revision": "de7c85bf24e61f429f187e26d2aee4d3"
  },
  {
    "url": "assets/js/56.6d1ef44a.js",
    "revision": "0d28ebe496b8875c5e6f26193bc85307"
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
    "url": "assets/js/59.56ebb3fb.js",
    "revision": "97cfe320cab8bb0c16b67b80b683fad3"
  },
  {
    "url": "assets/js/6.0621999c.js",
    "revision": "f5037bdccb488e6b5d702eb9a3d6be85"
  },
  {
    "url": "assets/js/60.6c7501d2.js",
    "revision": "9290992b3194998cc4a5750bdce58e4a"
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
    "url": "assets/js/app.b59eaa66.js",
    "revision": "2fd27ec95ddef2ec468984f95896de03"
  },
  {
    "url": "assets/js/vendors~docsearch.cdcb6b19.js",
    "revision": "98a40a050a2241279f9a780c3d63b30a"
  },
  {
    "url": "developer-guide/index.html",
    "revision": "95e44c59862acc37c439fb881d0c26bf"
  },
  {
    "url": "index.html",
    "revision": "12d04010e7e0614af7353352ae86fa72"
  },
  {
    "url": "rules.html",
    "revision": "cc712bc71c8ac84cfb5d7f1c56fb9cdb"
  },
  {
    "url": "rules/attribute-hyphenation.html",
    "revision": "1bc013cb0192d6dfe10b0b00434f822a"
  },
  {
    "url": "rules/attributes-order.html",
    "revision": "8f0520c432488cf93fc72406259a5794"
  },
  {
    "url": "rules/comment-directive.html",
    "revision": "e9a5fd5beb56d98619b00b856ac37f3e"
  },
  {
    "url": "rules/component-tags-order.html",
    "revision": "158420d77c4ca85d5d17b8a91c75622d"
  },
  {
    "url": "rules/custom-event-name-casing.html",
    "revision": "12a24b7b3a3cdb0bd0bff210f3e79846"
  },
  {
    "url": "rules/html-closing-bracket-newline.html",
    "revision": "b9180d21b6b81952678ff287a4436520"
  },
  {
    "url": "rules/html-closing-bracket-spacing.html",
    "revision": "6342e2fe728b047210086a6cea67db0b"
  },
  {
    "url": "rules/html-end-tags.html",
    "revision": "c28b65ef448542845fc1540b8e4070f4"
  },
  {
    "url": "rules/html-indent.html",
    "revision": "6ed5a78e679d768888f7ee2814d2512d"
  },
  {
    "url": "rules/html-quotes.html",
    "revision": "94a0477821d7a39717fc2b1ea42d5bea"
  },
  {
    "url": "rules/html-self-closing.html",
    "revision": "919d03c48a6dc8816050995fe8282480"
  },
  {
    "url": "rules/index.html",
    "revision": "56210afd252ba0f364dc0094f7e95ffa"
  },
  {
    "url": "rules/max-attributes-per-line.html",
    "revision": "0addf04e1347eb28bef1ce29d4ffd181"
  },
  {
    "url": "rules/multiline-html-element-content-newline.html",
    "revision": "182a9839e0a00d9dd07d883783b6ccd6"
  },
  {
    "url": "rules/mustache-interpolation-spacing.html",
    "revision": "4f81be7d39e16dfd17e4f6256c6458f3"
  },
  {
    "url": "rules/no-async-in-computed-properties.html",
    "revision": "19106d6ed3d75254ff52f20fccb3b0df"
  },
  {
    "url": "rules/no-dupe-keys.html",
    "revision": "edbaea000ecbbc8629ba971254762ea8"
  },
  {
    "url": "rules/no-dupe-s-else-if.html",
    "revision": "044e503533e3dc57f6c5fcad9a1b8945"
  },
  {
    "url": "rules/no-duplicate-attributes.html",
    "revision": "36ff80c66838ea8a4b8fe91702ae485c"
  },
  {
    "url": "rules/no-lone-template.html",
    "revision": "d48f8844db5a0693f8d18043cce27666"
  },
  {
    "url": "rules/no-multi-spaces.html",
    "revision": "095ffb6e11b4b82167e5ba000cc1d959"
  },
  {
    "url": "rules/no-multiple-template-root.html",
    "revision": "616896459f8ca1e5a869c1ee28b9f26b"
  },
  {
    "url": "rules/no-parsing-error.html",
    "revision": "29f98d243cb439d6f45b0c2ed1f93a1b"
  },
  {
    "url": "rules/no-reserved-keys.html",
    "revision": "2a8d8e2deba2f4786fe6c7a6573ec12d"
  },
  {
    "url": "rules/no-shared-component-data.html",
    "revision": "c0f8c38f3c0237cb4f45f5a5dbe3fc8d"
  },
  {
    "url": "rules/no-side-effects-in-computed-properties.html",
    "revision": "80973bac452dd00898b0d63610402e4b"
  },
  {
    "url": "rules/no-spaces-around-equal-signs-in-attribute.html",
    "revision": "8195e0fa5abc4dd6d9f6b1b8e56da77f"
  },
  {
    "url": "rules/no-template-shadow.html",
    "revision": "7abf8da29b196da858de2a12764c95bf"
  },
  {
    "url": "rules/no-textarea-mustache.html",
    "revision": "b1c0133071b63c073eef9854523c4828"
  },
  {
    "url": "rules/no-unused-components.html",
    "revision": "04efff7b0aa9fca6112f1d639b2d1e6c"
  },
  {
    "url": "rules/no-unused-vars.html",
    "revision": "1a75c75afbce528dc9618369022ce68c"
  },
  {
    "url": "rules/no-use-s-if-with-s-for.html",
    "revision": "dd337275761d09d84630d7359bafec4a"
  },
  {
    "url": "rules/one-component-per-file.html",
    "revision": "2b24b7eef45fd7d6c4baeabffb2116d2"
  },
  {
    "url": "rules/order-in-components.html",
    "revision": "62cd4088b8e7682a3641f945d388cffd"
  },
  {
    "url": "rules/return-in-computed-property.html",
    "revision": "3b7de817614a4b92f454637a1244de2e"
  },
  {
    "url": "rules/singleline-html-element-content-newline.html",
    "revision": "2378a96919e875fc9db96991c554f582"
  },
  {
    "url": "rules/this-in-template.html",
    "revision": "fc8694c477b3bc9f937387c73965495f"
  },
  {
    "url": "rules/valid-s-else-if.html",
    "revision": "988038abad7ac447cd0334521a66a455"
  },
  {
    "url": "rules/valid-s-else.html",
    "revision": "c02ec3a8c5f27aec23554e59f0828ae4"
  },
  {
    "url": "rules/valid-s-for.html",
    "revision": "4e1789b8ca2bb0a9b70b931e24a03f22"
  },
  {
    "url": "rules/valid-s-if.html",
    "revision": "f9cbf20fea9568c952579af39fa232b9"
  },
  {
    "url": "rules/valid-s-show.html",
    "revision": "d0142d51dceba5841d9611ffe965596c"
  },
  {
    "url": "rules/valid-template-root.html",
    "revision": "f0012a69f35fb2daa3310d2b52e4ebdd"
  },
  {
    "url": "style-guide/index.html",
    "revision": "d894abae711d5d047a006c23a13224e8"
  },
  {
    "url": "user-guide/index.html",
    "revision": "e635f294bc83461f4e570f5481f4e44a"
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
