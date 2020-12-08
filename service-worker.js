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
    "revision": "5f562f07c9a06cba720b578281f8c219"
  },
  {
    "url": "assets/css/0.styles.cbe7bcf5.css",
    "revision": "5a35bc440aa147a724d0bcef1aae916d"
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
    "url": "assets/js/10.12f3bb0a.js",
    "revision": "4e533221b34482ea82ffe45c149fd7a8"
  },
  {
    "url": "assets/js/12.84d06b61.js",
    "revision": "b8192e6b3a9185c3c288bc7311cfebef"
  },
  {
    "url": "assets/js/13.4133758d.js",
    "revision": "15fd733af627e2022af8f643e014b9d6"
  },
  {
    "url": "assets/js/14.c7ea099d.js",
    "revision": "1cee83872a0dc533920d662793d54da9"
  },
  {
    "url": "assets/js/15.432df11a.js",
    "revision": "f1671a2820277a35e82ff0fb72e5607f"
  },
  {
    "url": "assets/js/16.38da7676.js",
    "revision": "597599351443ff32a0f7803f704b69a9"
  },
  {
    "url": "assets/js/17.53c56bcd.js",
    "revision": "a42378335183117f94417a90df574bea"
  },
  {
    "url": "assets/js/18.538b8e9d.js",
    "revision": "4a96ce98a312c62a8acb92d5978387c6"
  },
  {
    "url": "assets/js/19.85fd2bb7.js",
    "revision": "ed53b636b040ac4246b2469f62315f7a"
  },
  {
    "url": "assets/js/20.3394d1bf.js",
    "revision": "97ea1131743d7399e6d76c91443ab6d0"
  },
  {
    "url": "assets/js/21.de1da3fe.js",
    "revision": "c24bceeb03129a18ff3613f53fd47363"
  },
  {
    "url": "assets/js/22.85fe4bfb.js",
    "revision": "6b5ed34a13288eb528b70948e7880f8b"
  },
  {
    "url": "assets/js/23.8473b6a6.js",
    "revision": "13d67f1ff4bd830ce437d36fac6bf776"
  },
  {
    "url": "assets/js/24.7f9f48f0.js",
    "revision": "282b7def4bd73036fe598268694623a9"
  },
  {
    "url": "assets/js/25.45d630a9.js",
    "revision": "577f270f99f34f40e253ad4920e1a7c6"
  },
  {
    "url": "assets/js/26.1430ab21.js",
    "revision": "9c2b9fb1d6c50441a7f34828caeb34a3"
  },
  {
    "url": "assets/js/27.fc7a9fc5.js",
    "revision": "18e0158962c78c928bc22d04fce378f2"
  },
  {
    "url": "assets/js/28.b9d1d772.js",
    "revision": "acf09ef2cb332068795a42b16f4946fc"
  },
  {
    "url": "assets/js/29.3ab0e0a8.js",
    "revision": "1577f8d5631d7c3abf3b7ba86b005718"
  },
  {
    "url": "assets/js/3.5570798b.js",
    "revision": "3f77f92ca8c1b876b80193de64049d19"
  },
  {
    "url": "assets/js/30.30ae1047.js",
    "revision": "c7e666d46598c6767d55e2e8a2f7e0a0"
  },
  {
    "url": "assets/js/31.c52d9806.js",
    "revision": "f0275ed7f6dbf7aabc8910020fa71d42"
  },
  {
    "url": "assets/js/32.476d9456.js",
    "revision": "1eeac436d4048e80a9dba6d44a06a4ad"
  },
  {
    "url": "assets/js/33.b72d070e.js",
    "revision": "ec71d0d4d42d8d64caf90ce1d1a0a78f"
  },
  {
    "url": "assets/js/34.312b190b.js",
    "revision": "500d52a764accb86a82c8e04c31a9c48"
  },
  {
    "url": "assets/js/35.bdd565bb.js",
    "revision": "d7af8065b71d0833bc8a4ea97d5ddfb4"
  },
  {
    "url": "assets/js/36.6e616f86.js",
    "revision": "5681f652e6b4660850a549920c571b1f"
  },
  {
    "url": "assets/js/37.37fe00c7.js",
    "revision": "c09aead3d63f428ae522ff3b31964379"
  },
  {
    "url": "assets/js/38.6875dc3a.js",
    "revision": "fd2821e5c3df384db97103afa5264912"
  },
  {
    "url": "assets/js/39.e5e02bfe.js",
    "revision": "1e68c0776ecdffaf4a4dfdd372d58bf4"
  },
  {
    "url": "assets/js/4.88148bf7.js",
    "revision": "68d7cd4113e75bde897deb6a6403bea4"
  },
  {
    "url": "assets/js/40.cab5407d.js",
    "revision": "4ad881f5b6166675f89dc2521b05cffd"
  },
  {
    "url": "assets/js/41.bbbf2b82.js",
    "revision": "e304caaa0d976170601cad346e3064dd"
  },
  {
    "url": "assets/js/42.6d42eff9.js",
    "revision": "e125427622f152fa377d0698565d392d"
  },
  {
    "url": "assets/js/43.572be62e.js",
    "revision": "4bddf95543fe49600ffd2ea78eeaa8ec"
  },
  {
    "url": "assets/js/44.cf9110df.js",
    "revision": "82ceb22b1450e889ae3cd9771c2a4519"
  },
  {
    "url": "assets/js/45.9622640c.js",
    "revision": "c9587def3ee1b958b2f1c85a902c68be"
  },
  {
    "url": "assets/js/46.fbf403de.js",
    "revision": "a6a22f81bf614102a4f9718d6049eafd"
  },
  {
    "url": "assets/js/47.44af8dba.js",
    "revision": "ba7e52b6558d4fbccab42c33a0694614"
  },
  {
    "url": "assets/js/48.f321754d.js",
    "revision": "96ff8bd4def31b80c2f2318ba8989273"
  },
  {
    "url": "assets/js/49.03939f09.js",
    "revision": "f0f1b1bc01c6f20735d51e7d9c9318d2"
  },
  {
    "url": "assets/js/5.9325c5df.js",
    "revision": "b622b06e043313a47db563251ba4d411"
  },
  {
    "url": "assets/js/50.8f015175.js",
    "revision": "d35a493c0d87979bf161049ac8e7fc0d"
  },
  {
    "url": "assets/js/51.eb75c181.js",
    "revision": "a1b8e7ddb6f10a738f49e54888398232"
  },
  {
    "url": "assets/js/52.e899bf4d.js",
    "revision": "1a668bf1f99b492dc6e7bdf8c52a87b8"
  },
  {
    "url": "assets/js/53.52dc0173.js",
    "revision": "c7e98e781d64bd090eff11bbbf17946f"
  },
  {
    "url": "assets/js/54.ded68934.js",
    "revision": "e43338b50fdd126e5f7257cbde32cee8"
  },
  {
    "url": "assets/js/55.da82fd71.js",
    "revision": "8dd66e841e7779619faed41850883a7b"
  },
  {
    "url": "assets/js/56.ab9afee9.js",
    "revision": "b98688aee232c62811ac10a487a2d262"
  },
  {
    "url": "assets/js/57.8ca5b446.js",
    "revision": "1c7334e499f7910a3d86b55e01adb386"
  },
  {
    "url": "assets/js/58.e95d1f17.js",
    "revision": "a945682b38977de21b153a26143e6040"
  },
  {
    "url": "assets/js/59.d8c14072.js",
    "revision": "1673566f6a123b90e742a1821dc2c10b"
  },
  {
    "url": "assets/js/6.0c748eda.js",
    "revision": "2923022236a1b2622b3c7ebfcf43cd12"
  },
  {
    "url": "assets/js/60.3018068a.js",
    "revision": "116ced38ac71b3f96a398c2c7525b199"
  },
  {
    "url": "assets/js/61.6fff2c19.js",
    "revision": "ac6b5e9247730744cf9e803b3f527620"
  },
  {
    "url": "assets/js/62.f000b752.js",
    "revision": "2060b5593431610f8154f46643198052"
  },
  {
    "url": "assets/js/63.f58b0129.js",
    "revision": "0fa2b29ef9f91dfc0a8989fca6de0870"
  },
  {
    "url": "assets/js/64.e68ba087.js",
    "revision": "e85880d6deb616e29289a20b9aa96487"
  },
  {
    "url": "assets/js/65.e57cac70.js",
    "revision": "9588c7f868b9ea277e48f2e696cbc9cc"
  },
  {
    "url": "assets/js/66.e3027b96.js",
    "revision": "4c414db18ee29c0da48c3a4644829951"
  },
  {
    "url": "assets/js/67.760f81ff.js",
    "revision": "05a1f4ffc48b926193ff740666784f01"
  },
  {
    "url": "assets/js/68.75ba70b4.js",
    "revision": "98c517548deb52d25749b1394ccf5b43"
  },
  {
    "url": "assets/js/69.1a450c7b.js",
    "revision": "c3f01b709aff2fbcc23a316f3ee74f42"
  },
  {
    "url": "assets/js/7.7bfff686.js",
    "revision": "4b4c832218521ed1e8693c9aa9bf432c"
  },
  {
    "url": "assets/js/70.3bad33f7.js",
    "revision": "72b59d444862318294ae175163e1259f"
  },
  {
    "url": "assets/js/71.8db9880b.js",
    "revision": "e64e6163497658a999049cd7ea24a395"
  },
  {
    "url": "assets/js/72.091e0625.js",
    "revision": "21896065224aad0ee21d51f23f9a1ff3"
  },
  {
    "url": "assets/js/74.96bb092f.js",
    "revision": "03ec646c3606c803eeaa4fa97feecf53"
  },
  {
    "url": "assets/js/75.772a0d62.js",
    "revision": "6a1a13b0bfaabcb698a73a3bbe20137b"
  },
  {
    "url": "assets/js/8.5e6ea160.js",
    "revision": "2546378778e39dbc46e6f8b3fc6c4595"
  },
  {
    "url": "assets/js/9.8f34ee0c.js",
    "revision": "71d4e987a45d5464b1a3dc2940f7ca6e"
  },
  {
    "url": "assets/js/app.6c8dddab.js",
    "revision": "5993d1d69a36ab48b71e12df5ead94a7"
  },
  {
    "url": "assets/js/vendors~docsearch.a3c35701.js",
    "revision": "5d321dc41033da987689316aef193f9f"
  },
  {
    "url": "developer-guide/index.html",
    "revision": "3c645cb191c6c8ca1c02d0b23400af2c"
  },
  {
    "url": "favicon.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "index.html",
    "revision": "b7d57a53f216e0aaeae02c6002b9184c"
  },
  {
    "url": "rules.html",
    "revision": "afc16332682e63a8172d338ea6d3819a"
  },
  {
    "url": "rules/attribute-hyphenation.html",
    "revision": "df7899161615e4018cb8ce6b44f32048"
  },
  {
    "url": "rules/attributes-order.html",
    "revision": "d498fc242f38d13258c9d19bc8425e0e"
  },
  {
    "url": "rules/comment-directive.html",
    "revision": "060f13aa43357e03081f842d396a6298"
  },
  {
    "url": "rules/component-tags-order.html",
    "revision": "33f7b0527ece5da8ddb4fccc2a3bc3c9"
  },
  {
    "url": "rules/custom-event-name-casing.html",
    "revision": "61fca1677852031509ceddc7add9ad70"
  },
  {
    "url": "rules/html-closing-bracket-newline.html",
    "revision": "1622c32441ba436a71117946c335b2c0"
  },
  {
    "url": "rules/html-closing-bracket-spacing.html",
    "revision": "bc5a88bb8b1f8cf231cc0e8904e279d0"
  },
  {
    "url": "rules/html-end-tags.html",
    "revision": "2d107a4d8fc8117b5417d21807e45c6f"
  },
  {
    "url": "rules/html-indent.html",
    "revision": "1ff250555b790c1f7175b2133b8d0b4a"
  },
  {
    "url": "rules/html-quotes.html",
    "revision": "2d95bf25697e1431c85d5ebd46017c75"
  },
  {
    "url": "rules/html-self-closing.html",
    "revision": "0d2ffb27074407d1ea8d04b6e2478e85"
  },
  {
    "url": "rules/index.html",
    "revision": "f92cbfb2f953fe2bcae137d631c4749b"
  },
  {
    "url": "rules/max-attributes-per-line.html",
    "revision": "1460d617f2ee88874930634f710d52d8"
  },
  {
    "url": "rules/multiline-html-element-content-newline.html",
    "revision": "7b9d4047dacf1c9c51f0d3b1121f2e00"
  },
  {
    "url": "rules/mustache-interpolation-spacing.html",
    "revision": "498d2688c61dfddf7de420dc6ed61a41"
  },
  {
    "url": "rules/no-async-in-computed-properties.html",
    "revision": "742aa88734fbd62bc6a6366931c53115"
  },
  {
    "url": "rules/no-dupe-keys.html",
    "revision": "e1c5b1fd612e1306d73b916f19904bc0"
  },
  {
    "url": "rules/no-dupe-s-else-if.html",
    "revision": "5d48705477910f8389d5d596afda3ca9"
  },
  {
    "url": "rules/no-duplicate-attributes.html",
    "revision": "5d8b59e2365c2748f87ee119528e5bac"
  },
  {
    "url": "rules/no-lone-template.html",
    "revision": "f8a271a1634e4fe6fe8e5c709e8c0088"
  },
  {
    "url": "rules/no-multi-spaces.html",
    "revision": "7a78ef96a645d6b3f57f47bfa1466d54"
  },
  {
    "url": "rules/no-multiple-template-root.html",
    "revision": "4472152665b779a1062fb58d1271bc7f"
  },
  {
    "url": "rules/no-parsing-error.html",
    "revision": "25aa8c168473d9f7872c5ab154e58fc3"
  },
  {
    "url": "rules/no-reserved-keys.html",
    "revision": "36c11fc944a3b5032d42a95e75909559"
  },
  {
    "url": "rules/no-shared-component-data.html",
    "revision": "eaf847be013960d8dd284b4bcfb33a0b"
  },
  {
    "url": "rules/no-side-effects-in-computed-properties.html",
    "revision": "d660f76907c867fb0793850d0367abab"
  },
  {
    "url": "rules/no-spaces-around-equal-signs-in-attribute.html",
    "revision": "af24130c6d1394fcb1a0c27433731b76"
  },
  {
    "url": "rules/no-template-key.html",
    "revision": "8819294e5814b44baf3c7983e939e9fc"
  },
  {
    "url": "rules/no-template-shadow.html",
    "revision": "9225599cabaf61bbc4ff99ebdbb61e62"
  },
  {
    "url": "rules/no-textarea-mustache.html",
    "revision": "84d409c2d27b696ee9266c56e14614b9"
  },
  {
    "url": "rules/no-unused-components.html",
    "revision": "5bada6f7837f386e2d5f0c72fcd4d1ea"
  },
  {
    "url": "rules/no-unused-vars.html",
    "revision": "23d5190d48addf76a3d063f3e0627595"
  },
  {
    "url": "rules/no-use-s-if-with-s-for.html",
    "revision": "f28cf8adb09d3c047ec283df09a84d1e"
  },
  {
    "url": "rules/one-component-per-file.html",
    "revision": "8b82760126362521a4882fd995582279"
  },
  {
    "url": "rules/order-in-components.html",
    "revision": "46af3b15acdefa36687cf8b77610ddbd"
  },
  {
    "url": "rules/return-in-computed-property.html",
    "revision": "9edb3a0bb65b71cf5fb207413b245ab9"
  },
  {
    "url": "rules/singleline-html-element-content-newline.html",
    "revision": "d0e3fdb5c3a532a8adff20f519a18a53"
  },
  {
    "url": "rules/this-in-template.html",
    "revision": "c5d4567185320117cb393a42c2d4e395"
  },
  {
    "url": "rules/valid-s-else-if.html",
    "revision": "4f4f8f4fe75b67f07db8d84cce7ffa1d"
  },
  {
    "url": "rules/valid-s-else.html",
    "revision": "5134adc2d27a6742c3f8482b1da9f97d"
  },
  {
    "url": "rules/valid-s-for.html",
    "revision": "9f4137f817a1a26a6cd0c31158d0bbfd"
  },
  {
    "url": "rules/valid-s-if.html",
    "revision": "c1ce931e7c353924a413283935d86a25"
  },
  {
    "url": "rules/valid-s-show.html",
    "revision": "b600edc024808c0acd4e58eb56e23ff9"
  },
  {
    "url": "rules/valid-template-root.html",
    "revision": "741e65c69939bd5ff6a48b9dd6afffe1"
  },
  {
    "url": "style-guide/index.html",
    "revision": "8765f595e83f4c10298cd0916b67dc10"
  },
  {
    "url": "user-guide/index.html",
    "revision": "8e857858998e1fd69cff8c165efe4cd0"
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
