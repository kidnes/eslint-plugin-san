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
    "revision": "8f248175d5ed183d105cdf90c86fe096"
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
    "url": "assets/js/14.2fe16e09.js",
    "revision": "02fea9b21a729961508550b6cee647fc"
  },
  {
    "url": "assets/js/15.44c3d1f1.js",
    "revision": "eea1e2ed90d8640fe87de882834f414d"
  },
  {
    "url": "assets/js/16.2b5e5626.js",
    "revision": "4591181a17ae5ab4126ed79badb575e4"
  },
  {
    "url": "assets/js/17.63810ece.js",
    "revision": "4a6fdd6f5aad6a20901a92b956321cd2"
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
    "url": "assets/js/20.67480c4b.js",
    "revision": "47832be851dc29d34b653467f4219f67"
  },
  {
    "url": "assets/js/21.92adb7f5.js",
    "revision": "e1fd7bdcd277bffc00ec8700bbb1df47"
  },
  {
    "url": "assets/js/22.f8dc6e23.js",
    "revision": "7a6cdb4273ac0146926846656f10f8b0"
  },
  {
    "url": "assets/js/23.049897c6.js",
    "revision": "93d35f98696de1086eb8ee4a65970222"
  },
  {
    "url": "assets/js/24.3252785e.js",
    "revision": "0890f2b081bda49848f2ab74d8a95e73"
  },
  {
    "url": "assets/js/25.45d630a9.js",
    "revision": "577f270f99f34f40e253ad4920e1a7c6"
  },
  {
    "url": "assets/js/26.5cc0291b.js",
    "revision": "a485a13f030adf5f04637b4a9a2483cb"
  },
  {
    "url": "assets/js/27.912b3bcd.js",
    "revision": "99373269ac4f7ae3ba2cf3726bdd8158"
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
    "url": "assets/js/32.befa6f4d.js",
    "revision": "69c5f145eb31e402c5f9a9ccd03797e0"
  },
  {
    "url": "assets/js/33.15c888f6.js",
    "revision": "c53a02cf8d4be25610d58d5e1987db9a"
  },
  {
    "url": "assets/js/34.a7e4c0cb.js",
    "revision": "f7d02cd7a9ab192435e4a157be2de048"
  },
  {
    "url": "assets/js/35.bdd565bb.js",
    "revision": "d7af8065b71d0833bc8a4ea97d5ddfb4"
  },
  {
    "url": "assets/js/36.166e31de.js",
    "revision": "791173f20e12a86a31cd1fd732424622"
  },
  {
    "url": "assets/js/37.37fe00c7.js",
    "revision": "c09aead3d63f428ae522ff3b31964379"
  },
  {
    "url": "assets/js/38.41e553a1.js",
    "revision": "6bd7656817c83c7d08e4ea6a5a04b49a"
  },
  {
    "url": "assets/js/39.56b5520e.js",
    "revision": "3d87b41bf659f58603dfcf561a231ce5"
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
    "url": "assets/js/41.469a2562.js",
    "revision": "c623b2858d28f170279d98ad6191b41b"
  },
  {
    "url": "assets/js/42.33f0549a.js",
    "revision": "8b803aa5537460c0f857c96afeea152e"
  },
  {
    "url": "assets/js/43.c6f80aae.js",
    "revision": "0c504371f35d7a2095bbfc4399732a88"
  },
  {
    "url": "assets/js/44.ffcec7a5.js",
    "revision": "b62dfd5796fae4c6cd101c2823576da0"
  },
  {
    "url": "assets/js/45.4d7e36b9.js",
    "revision": "5bf3fe9150d003a3c96b09b0219b7e96"
  },
  {
    "url": "assets/js/46.fbf403de.js",
    "revision": "a6a22f81bf614102a4f9718d6049eafd"
  },
  {
    "url": "assets/js/47.cd8478f7.js",
    "revision": "4a579a3de19ac82f1314b01aab2d181d"
  },
  {
    "url": "assets/js/48.f321754d.js",
    "revision": "96ff8bd4def31b80c2f2318ba8989273"
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
    "url": "assets/js/50.0a6cd9ef.js",
    "revision": "296aee3fd9beb986ac351d6aa1be5743"
  },
  {
    "url": "assets/js/51.a734f12e.js",
    "revision": "d1b8cf62b78f3218b7c302e1ef7c5ef5"
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
    "url": "assets/js/54.59b276d8.js",
    "revision": "bd58d1dd6a68ce1922c45b74ca97f204"
  },
  {
    "url": "assets/js/55.2a616d02.js",
    "revision": "b269616b324e8f8ebac3b0de1acc9b0f"
  },
  {
    "url": "assets/js/56.ab9afee9.js",
    "revision": "b98688aee232c62811ac10a487a2d262"
  },
  {
    "url": "assets/js/57.5df53e12.js",
    "revision": "55644f2854af61db0b51a3cf11131e1c"
  },
  {
    "url": "assets/js/58.20ebd812.js",
    "revision": "9ecd21761ff656e2f3d7d2732dfd1013"
  },
  {
    "url": "assets/js/59.7c7fdd07.js",
    "revision": "6ce5fc39866a9dcc96f73dc195364be9"
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
    "url": "assets/js/app.d0e7d67c.js",
    "revision": "6871fa08a312547a74ba67e05232b825"
  },
  {
    "url": "assets/js/vendors~docsearch.a3c35701.js",
    "revision": "5d321dc41033da987689316aef193f9f"
  },
  {
    "url": "developer-guide/index.html",
    "revision": "e8d28b418f0d0f06c1f10154da6a4f2f"
  },
  {
    "url": "favicon.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "index.html",
    "revision": "7bc96e4e07e08ecb8955c2794714ddb9"
  },
  {
    "url": "rules.html",
    "revision": "fedbf57ab6a21164892553e347867284"
  },
  {
    "url": "rules/attribute-hyphenation.html",
    "revision": "fcfe35ac2d4b193528b22381845b424e"
  },
  {
    "url": "rules/attributes-order.html",
    "revision": "5f8b07f14ae353cdd93eb95fe0f15b3a"
  },
  {
    "url": "rules/comment-directive.html",
    "revision": "f67d01c0563044b5df531359376375ff"
  },
  {
    "url": "rules/component-tags-order.html",
    "revision": "38081f73896d6f9fccfdbe6882a48444"
  },
  {
    "url": "rules/custom-event-name-casing.html",
    "revision": "51c404522d486251441cb3f18c71fc24"
  },
  {
    "url": "rules/html-closing-bracket-newline.html",
    "revision": "714163d48214a52c0c04c8c765156ab6"
  },
  {
    "url": "rules/html-closing-bracket-spacing.html",
    "revision": "a2ead3de37030fe3cff5a5ce2ab0d9a5"
  },
  {
    "url": "rules/html-end-tags.html",
    "revision": "b7e3c294245947cbbea6fadc55ae3c4b"
  },
  {
    "url": "rules/html-indent.html",
    "revision": "4569544999e8440edd0fd5227591007e"
  },
  {
    "url": "rules/html-quotes.html",
    "revision": "193341288827d3c93d61e205e43bbf2f"
  },
  {
    "url": "rules/html-self-closing.html",
    "revision": "22d10bb1c75ad5b76b524c5ec4aef585"
  },
  {
    "url": "rules/index.html",
    "revision": "c3d5223aee5d4283e0a10004b43ecfec"
  },
  {
    "url": "rules/max-attributes-per-line.html",
    "revision": "7842390c243590038013b96203aafe47"
  },
  {
    "url": "rules/multiline-html-element-content-newline.html",
    "revision": "eb1f12a92a55fa0e23f34134c43373a2"
  },
  {
    "url": "rules/mustache-interpolation-spacing.html",
    "revision": "2c03425bf2e9b2bf0b3f2c1ed3fc67b5"
  },
  {
    "url": "rules/no-async-in-computed-properties.html",
    "revision": "780ff7d7387f37dc161d8f3c4cbe03ca"
  },
  {
    "url": "rules/no-dupe-keys.html",
    "revision": "15edddf515b7962bee60bf2d93992d30"
  },
  {
    "url": "rules/no-dupe-s-else-if.html",
    "revision": "e8e9f95df5a7ac60163360fcc8568d3d"
  },
  {
    "url": "rules/no-duplicate-attributes.html",
    "revision": "24202de6eaf3c0e0b88af3e0681ca4ac"
  },
  {
    "url": "rules/no-lone-template.html",
    "revision": "bf26341e6afd6f8350059c69ddb86d90"
  },
  {
    "url": "rules/no-multi-spaces.html",
    "revision": "81a10a2a3caad6b12b4eb936f47f1cf9"
  },
  {
    "url": "rules/no-multiple-template-root.html",
    "revision": "a0bf1e0d436813fddd3ceb6fb39a7900"
  },
  {
    "url": "rules/no-parsing-error.html",
    "revision": "295c8a362950a0106ecd8dd81da108a4"
  },
  {
    "url": "rules/no-reserved-keys.html",
    "revision": "a45e3cb6b7ea6504002ebaa8e29664d0"
  },
  {
    "url": "rules/no-shared-component-data.html",
    "revision": "ce14999138e4d75a69ae7ec9d291f12e"
  },
  {
    "url": "rules/no-side-effects-in-computed-properties.html",
    "revision": "79ee05ddb9d101792dac3d8fa1c926fd"
  },
  {
    "url": "rules/no-spaces-around-equal-signs-in-attribute.html",
    "revision": "1bbae07d549464a9e39f224e3acc9ee0"
  },
  {
    "url": "rules/no-template-key.html",
    "revision": "5b910ed2ab69e61b57d57c1b773186fe"
  },
  {
    "url": "rules/no-template-shadow.html",
    "revision": "8b56e1a7c9f6d033400d1b6a4bd85c83"
  },
  {
    "url": "rules/no-textarea-mustache.html",
    "revision": "6acd6b567d6ae1e88d6750b89f7b9eee"
  },
  {
    "url": "rules/no-unused-components.html",
    "revision": "d7ec25e55784d4790f06dff628d30cb8"
  },
  {
    "url": "rules/no-unused-vars.html",
    "revision": "689bdeeff0b708f058fb6b5cb304680b"
  },
  {
    "url": "rules/no-use-s-if-with-s-for.html",
    "revision": "489463bba6f57f3ca9d921e41f1f44be"
  },
  {
    "url": "rules/one-component-per-file.html",
    "revision": "5f8bc88ccd27c55b2088d9eeb0a764ae"
  },
  {
    "url": "rules/order-in-components.html",
    "revision": "375cbf9ca6105c719e92b3ee88892f1f"
  },
  {
    "url": "rules/return-in-computed-property.html",
    "revision": "629c2850112579fd7702b135b3f5e128"
  },
  {
    "url": "rules/singleline-html-element-content-newline.html",
    "revision": "7bfb3df825af7b669f64666379ff62f1"
  },
  {
    "url": "rules/this-in-template.html",
    "revision": "a579847898ab40bcd015d228dd8db797"
  },
  {
    "url": "rules/valid-s-else-if.html",
    "revision": "2ff2282586bb8ede8d0931845dddf16a"
  },
  {
    "url": "rules/valid-s-else.html",
    "revision": "ab4a732534c45ffb3ff1cf60c60ec00d"
  },
  {
    "url": "rules/valid-s-for.html",
    "revision": "1174fb430bd85b0cab32c0aaa9ebf6a0"
  },
  {
    "url": "rules/valid-s-if.html",
    "revision": "9729e1d490180c29228f50dbbc5f755f"
  },
  {
    "url": "rules/valid-s-show.html",
    "revision": "468689982abdb8407bc2e654537037c3"
  },
  {
    "url": "rules/valid-template-root.html",
    "revision": "975b4099fe3a52ca452c3325bda24c43"
  },
  {
    "url": "style-guide/index.html",
    "revision": "c0de05c0e591f77ac6d18d4da287eb69"
  },
  {
    "url": "user-guide/index.html",
    "revision": "9b54d1f8c687befa55df240327dd3e19"
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
