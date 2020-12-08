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
    "revision": "427859864cab7ee240a63be452ba5711"
  },
  {
    "url": "assets/css/0.styles.e10f40c1.css",
    "revision": "27abf6dde1579543a3ce0165041e8d23"
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
    "url": "assets/js/17.eb2f5c5b.js",
    "revision": "3d858d75fb7f91ec0f4ef2bb74fbb218"
  },
  {
    "url": "assets/js/18.3b0d11e5.js",
    "revision": "91a60f1ef62fd81a939195128aaf5b21"
  },
  {
    "url": "assets/js/19.85fd2bb7.js",
    "revision": "ed53b636b040ac4246b2469f62315f7a"
  },
  {
    "url": "assets/js/20.b228f6e9.js",
    "revision": "275a2b83196f53cccc5644a62ea8f585"
  },
  {
    "url": "assets/js/21.d94d69de.js",
    "revision": "993b08c37a4f1271f3f898435e3323a5"
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
    "url": "assets/js/24.54c4803a.js",
    "revision": "a1685d70166de0674e0971e7d4d5fc2c"
  },
  {
    "url": "assets/js/25.d6ea0d4a.js",
    "revision": "156dae6368c6ceac14b99c2862abe87c"
  },
  {
    "url": "assets/js/26.5cc0291b.js",
    "revision": "a485a13f030adf5f04637b4a9a2483cb"
  },
  {
    "url": "assets/js/27.316e89a0.js",
    "revision": "fd1528efccc215a3b9320c4a819cc3c1"
  },
  {
    "url": "assets/js/28.8b861308.js",
    "revision": "e0ec7b6f9687a256a4f2d99869e7c287"
  },
  {
    "url": "assets/js/29.547a01c0.js",
    "revision": "bf3d7cf9ab07b3fa03a0150785a6a83b"
  },
  {
    "url": "assets/js/3.5570798b.js",
    "revision": "3f77f92ca8c1b876b80193de64049d19"
  },
  {
    "url": "assets/js/30.bff87f80.js",
    "revision": "fd6764b5ee73a37574b436dd62a3215e"
  },
  {
    "url": "assets/js/31.6b0f3c30.js",
    "revision": "1ef90e037743356c90bbda322001e1d9"
  },
  {
    "url": "assets/js/32.de5ec592.js",
    "revision": "ed6efb254b3efef76fcf079346632b48"
  },
  {
    "url": "assets/js/33.3744dc2b.js",
    "revision": "390f8c823b3da90edd82af5e3cd4630a"
  },
  {
    "url": "assets/js/34.8dfad6f3.js",
    "revision": "ef5cc4fef45cc6dfaad557b2ac838b11"
  },
  {
    "url": "assets/js/35.bdd565bb.js",
    "revision": "d7af8065b71d0833bc8a4ea97d5ddfb4"
  },
  {
    "url": "assets/js/36.47569916.js",
    "revision": "4c19ff322044784ca3848c84bd11872c"
  },
  {
    "url": "assets/js/37.9fdb1dcf.js",
    "revision": "058bccbe9e10361b5d33443bc2750d1c"
  },
  {
    "url": "assets/js/38.c49b9257.js",
    "revision": "0bb3d7940a90a4de4a7e31af2e0df8d0"
  },
  {
    "url": "assets/js/39.6d2ad798.js",
    "revision": "6243fd58fba4383d2a9b01a63123b537"
  },
  {
    "url": "assets/js/4.88148bf7.js",
    "revision": "68d7cd4113e75bde897deb6a6403bea4"
  },
  {
    "url": "assets/js/40.bd6fd372.js",
    "revision": "10cc47c341015ff872585d5a48de4aeb"
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
    "url": "assets/js/43.f758e73b.js",
    "revision": "7ca55610e94cbad03c26cba5f8539c04"
  },
  {
    "url": "assets/js/44.18e0a0da.js",
    "revision": "40580424303b4944d6e728b2ac62a1f1"
  },
  {
    "url": "assets/js/45.8c1a0f78.js",
    "revision": "3a85472e42dae3b394d3eb4bef17ef09"
  },
  {
    "url": "assets/js/46.d09826d4.js",
    "revision": "231b72e681622767e13ff3f4bae11e63"
  },
  {
    "url": "assets/js/47.2168edad.js",
    "revision": "6421a11c937e59e7fe40f7970a22ad73"
  },
  {
    "url": "assets/js/48.ba9cbf53.js",
    "revision": "abc5d1a57da8ccf332e81f5c90c2531c"
  },
  {
    "url": "assets/js/49.23814df3.js",
    "revision": "3fa4daf97806a9f5ec64a58e593e5aaa"
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
    "url": "assets/js/51.86f42787.js",
    "revision": "05c46378da138704671e935c3eb0629a"
  },
  {
    "url": "assets/js/52.0fb8a79d.js",
    "revision": "155db66e08510825ab9e81fe4ce18b5b"
  },
  {
    "url": "assets/js/53.52dc0173.js",
    "revision": "c7e98e781d64bd090eff11bbbf17946f"
  },
  {
    "url": "assets/js/54.e160a4dd.js",
    "revision": "35f5edd672c0a0b10a6a60190a423147"
  },
  {
    "url": "assets/js/55.2a616d02.js",
    "revision": "b269616b324e8f8ebac3b0de1acc9b0f"
  },
  {
    "url": "assets/js/56.4f8500b0.js",
    "revision": "76391363d46658eb73cbcbbd0129edc4"
  },
  {
    "url": "assets/js/57.e9c79e67.js",
    "revision": "1f85c17cb2af3bc214bede30236ebec1"
  },
  {
    "url": "assets/js/58.93cc5d4d.js",
    "revision": "31c4e00acb7c8d7647f7a1d5e0157c85"
  },
  {
    "url": "assets/js/59.162ca375.js",
    "revision": "e5c89004d780b646073b5fc34442eb6f"
  },
  {
    "url": "assets/js/6.0c748eda.js",
    "revision": "2923022236a1b2622b3c7ebfcf43cd12"
  },
  {
    "url": "assets/js/60.031fe6fa.js",
    "revision": "a1fba2c8a1fd99a3cbe1fc5dada07367"
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
    "url": "assets/js/app.c7e7023c.js",
    "revision": "e95f44c9bf2110eb6f987b48ddd2d265"
  },
  {
    "url": "assets/js/vendors~docsearch.a3c35701.js",
    "revision": "5d321dc41033da987689316aef193f9f"
  },
  {
    "url": "developer-guide/index.html",
    "revision": "5803ac2fb674116dfda137c15a9674ec"
  },
  {
    "url": "favicon.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "index.html",
    "revision": "96e2c11e9cb3776d2dcba581529c5a47"
  },
  {
    "url": "rules.html",
    "revision": "f06c1cdd21ec94009753883bdd417dbe"
  },
  {
    "url": "rules/attribute-hyphenation.html",
    "revision": "814c7611af728f0fc5bc2dd136761d4f"
  },
  {
    "url": "rules/attributes-order.html",
    "revision": "a1ddc628b01412b90a91bd977ec7b100"
  },
  {
    "url": "rules/comment-directive.html",
    "revision": "4ef82eb315c47d13b24a079f13b6f840"
  },
  {
    "url": "rules/component-tags-order.html",
    "revision": "fe02900adf72897e312bd5fb2dd6f726"
  },
  {
    "url": "rules/custom-event-name-casing.html",
    "revision": "5b3ee5ed124f4869d39ac50e7a1a7deb"
  },
  {
    "url": "rules/html-closing-bracket-newline.html",
    "revision": "ba794559a9f91f75f61d4c7ec2171fcb"
  },
  {
    "url": "rules/html-closing-bracket-spacing.html",
    "revision": "4b7b9fef99232794fd4260b7483f7db8"
  },
  {
    "url": "rules/html-end-tags.html",
    "revision": "e3456b616c3c27d3e0122907687b4f6d"
  },
  {
    "url": "rules/html-indent.html",
    "revision": "d0ba46b0d8dcd75b77796c3308a692d8"
  },
  {
    "url": "rules/html-quotes.html",
    "revision": "456175992644805e42cc56c1d1dfdb7a"
  },
  {
    "url": "rules/html-self-closing.html",
    "revision": "ba72d8c2d048d3c587e7958138013c9c"
  },
  {
    "url": "rules/index.html",
    "revision": "01b4fce9212ade5283ba4bb483704879"
  },
  {
    "url": "rules/max-attributes-per-line.html",
    "revision": "14ba29740e04e9e2945c40ac2f1ffebe"
  },
  {
    "url": "rules/multiline-html-element-content-newline.html",
    "revision": "b75938f1c2af4dc9214b9461e4e220c6"
  },
  {
    "url": "rules/mustache-interpolation-spacing.html",
    "revision": "00e82057ece541a68081de4bdf887a45"
  },
  {
    "url": "rules/no-async-in-computed-properties.html",
    "revision": "f32f8ca5d8810354bf605350f09c8b3c"
  },
  {
    "url": "rules/no-dupe-keys.html",
    "revision": "b79dc0bbf9ce86726810b88c2dfca68f"
  },
  {
    "url": "rules/no-dupe-s-else-if.html",
    "revision": "3f5e4ccd1379c130e4cba5d5f1c5af01"
  },
  {
    "url": "rules/no-duplicate-attributes.html",
    "revision": "57247a1f3c98883116df9f36b859f4a0"
  },
  {
    "url": "rules/no-lone-template.html",
    "revision": "f443d3899148549a73ba661d2e007951"
  },
  {
    "url": "rules/no-multi-spaces.html",
    "revision": "068ec0fa7a93285bd4d873030c5b30b3"
  },
  {
    "url": "rules/no-multiple-template-root.html",
    "revision": "f88f679e0fe9a8b1cb7d1386c6ad7f63"
  },
  {
    "url": "rules/no-parsing-error.html",
    "revision": "42843735974ace7bcd733597bb0d8ab6"
  },
  {
    "url": "rules/no-reserved-keys.html",
    "revision": "a1ae4cffbb300735d4292a012511a3b0"
  },
  {
    "url": "rules/no-shared-component-data.html",
    "revision": "d1d2b5b18a8298d3cfca198f2115a622"
  },
  {
    "url": "rules/no-side-effects-in-computed-properties.html",
    "revision": "048c698885a0d0b1c90b4a8752e60c82"
  },
  {
    "url": "rules/no-spaces-around-equal-signs-in-attribute.html",
    "revision": "a34b198b180ab956973214bcdf2f40d1"
  },
  {
    "url": "rules/no-template-key.html",
    "revision": "a15f79f0a111a190b9eea61662ac3076"
  },
  {
    "url": "rules/no-template-shadow.html",
    "revision": "602a57c00f9d75fcea5437b229cf327d"
  },
  {
    "url": "rules/no-textarea-mustache.html",
    "revision": "ee03667665e3611fe1e4e0ebb959eaa4"
  },
  {
    "url": "rules/no-unused-components.html",
    "revision": "13b3d56d9d510113d4814fe72335d26d"
  },
  {
    "url": "rules/no-unused-vars.html",
    "revision": "2829d502b8654d79b1ddbad4b6db3b56"
  },
  {
    "url": "rules/no-use-s-if-with-s-for.html",
    "revision": "7ce9111be1bc74adc39b986216021e4d"
  },
  {
    "url": "rules/one-component-per-file.html",
    "revision": "abdad17f15a4fbfc39fa5f16af9636d2"
  },
  {
    "url": "rules/order-in-components.html",
    "revision": "b97a8e316048d05374031302ed7bc63d"
  },
  {
    "url": "rules/return-in-computed-property.html",
    "revision": "5941f95c12b0faa6c51d555d74057abd"
  },
  {
    "url": "rules/singleline-html-element-content-newline.html",
    "revision": "89f9fca18a788fefa5880892147ba28b"
  },
  {
    "url": "rules/this-in-template.html",
    "revision": "3b24198182fc366ecc8cd5cf9e43f1e8"
  },
  {
    "url": "rules/valid-s-else-if.html",
    "revision": "6e7873e130e16e98191c8cb048807cdc"
  },
  {
    "url": "rules/valid-s-else.html",
    "revision": "073d074496319eec38e27739802a2d69"
  },
  {
    "url": "rules/valid-s-for.html",
    "revision": "d8d5c9a58fcc956fc77aab7f1a141aa0"
  },
  {
    "url": "rules/valid-s-if.html",
    "revision": "16e478be21475c8440c90e67fad7ced2"
  },
  {
    "url": "rules/valid-s-show.html",
    "revision": "cba66b743b57ff814faae31a878ae64f"
  },
  {
    "url": "rules/valid-template-root.html",
    "revision": "1fa6fc433e1b002227eb466ffdfe8a9f"
  },
  {
    "url": "style-guide/index.html",
    "revision": "b93bbe4d5f2190b1685c07675bbaa880"
  },
  {
    "url": "user-guide/index.html",
    "revision": "a0ad437fc88210a4683718edf75a355c"
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
