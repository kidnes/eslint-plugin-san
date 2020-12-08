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
    "revision": "862eadbc3fc1a110620d294bd755ed6a"
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
    "url": "assets/js/16.fb0ec86e.js",
    "revision": "f676cea2fece2a8470fb44a56623ebd9"
  },
  {
    "url": "assets/js/17.0d55fbb1.js",
    "revision": "4f62f795e419612ca3e0ed22280c7282"
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
    "url": "assets/js/24.0a744c99.js",
    "revision": "d4a6de233bd4789d15f30fe333346032"
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
    "url": "assets/js/33.b72d070e.js",
    "revision": "ec71d0d4d42d8d64caf90ce1d1a0a78f"
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
    "url": "assets/js/36.f61dd2f7.js",
    "revision": "442e433c305d8a00b242c85fc98b1ee4"
  },
  {
    "url": "assets/js/37.184de502.js",
    "revision": "d766d7dfcf072cb3f3d7ceceb128ae12"
  },
  {
    "url": "assets/js/38.4cef9122.js",
    "revision": "0289e54c93fa898fcdadd6484701d35c"
  },
  {
    "url": "assets/js/39.6d839c5c.js",
    "revision": "7bbc0ed274bb1733f472eadf3365049d"
  },
  {
    "url": "assets/js/4.88148bf7.js",
    "revision": "68d7cd4113e75bde897deb6a6403bea4"
  },
  {
    "url": "assets/js/40.20553799.js",
    "revision": "ad73acf6284f7900dfdc3abd646d7ebf"
  },
  {
    "url": "assets/js/41.f89378b8.js",
    "revision": "8c2493dbaeffd9c47c9e056c27cf306a"
  },
  {
    "url": "assets/js/42.a3732095.js",
    "revision": "f9c965019afaf836425c6dc4ceadf1bd"
  },
  {
    "url": "assets/js/43.f758e73b.js",
    "revision": "7ca55610e94cbad03c26cba5f8539c04"
  },
  {
    "url": "assets/js/44.85b3a893.js",
    "revision": "dc5a773439254c521cab4e49acd36494"
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
    "url": "assets/js/47.cd8478f7.js",
    "revision": "4a579a3de19ac82f1314b01aab2d181d"
  },
  {
    "url": "assets/js/48.66f4ade6.js",
    "revision": "9f2296ca59a2b9528e11a1c562cec804"
  },
  {
    "url": "assets/js/49.73e383fe.js",
    "revision": "bbf7ba39b26d69011e75be49226bd771"
  },
  {
    "url": "assets/js/5.9325c5df.js",
    "revision": "b622b06e043313a47db563251ba4d411"
  },
  {
    "url": "assets/js/50.2a70d571.js",
    "revision": "b77478dae48aa257d808931343c1b76b"
  },
  {
    "url": "assets/js/51.50a116d7.js",
    "revision": "e46e02fb1211ce270d2eb22644f0f965"
  },
  {
    "url": "assets/js/52.0fb8a79d.js",
    "revision": "155db66e08510825ab9e81fe4ce18b5b"
  },
  {
    "url": "assets/js/53.05094136.js",
    "revision": "09785cf3cfa82da96a9dbda666bcf739"
  },
  {
    "url": "assets/js/54.c8ce06fa.js",
    "revision": "3b029235487d640002f30c014c17d524"
  },
  {
    "url": "assets/js/55.49d4fc33.js",
    "revision": "dcb5945b69c43c4b559612e1884093e1"
  },
  {
    "url": "assets/js/56.1b923190.js",
    "revision": "d2f0e58eb2c2927ae5c7154f5dd515e1"
  },
  {
    "url": "assets/js/57.3397a69f.js",
    "revision": "8db449fb206b9b01dfa8f71f8b3c1ee0"
  },
  {
    "url": "assets/js/58.71c2a5b5.js",
    "revision": "203dbb7a63002c26fdf949416d91c7a6"
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
    "url": "assets/js/60.f5f77be5.js",
    "revision": "01c94aee31e85c4a62e3f06acf0842ec"
  },
  {
    "url": "assets/js/61.8ddb9afc.js",
    "revision": "5fd66af95cac6643c5b062d9e24bb0d0"
  },
  {
    "url": "assets/js/62.8679a585.js",
    "revision": "881a48fa10a9c29ff6ed582dfb3fb1b4"
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
    "url": "assets/js/app.e4d39b13.js",
    "revision": "c92bc10a82586dd8f2c00ebca5ceefff"
  },
  {
    "url": "assets/js/vendors~docsearch.a3c35701.js",
    "revision": "5d321dc41033da987689316aef193f9f"
  },
  {
    "url": "developer-guide/index.html",
    "revision": "24c5a5c7159a80ce951c89eb4b2e8519"
  },
  {
    "url": "favicon.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "index.html",
    "revision": "8be5549c18f28af52fba057435fdbc31"
  },
  {
    "url": "rules.html",
    "revision": "05027cb43de7f17450549893819d449a"
  },
  {
    "url": "rules/attribute-hyphenation.html",
    "revision": "5bcb85f2053a94d453efc8bbf9b5c0e1"
  },
  {
    "url": "rules/attributes-order.html",
    "revision": "a8a4b9d1c00080ecde27aef4cc7dfb15"
  },
  {
    "url": "rules/comment-directive.html",
    "revision": "297de380f622be5600fe7f87778cf9c1"
  },
  {
    "url": "rules/component-tags-order.html",
    "revision": "d5d71dcafc900c818eae51142d57b505"
  },
  {
    "url": "rules/custom-event-name-casing.html",
    "revision": "24f0e89fbe6b44e7a23e728cd6ad5c95"
  },
  {
    "url": "rules/html-closing-bracket-newline.html",
    "revision": "1394c9146bb308d9f56150351d88f2f4"
  },
  {
    "url": "rules/html-closing-bracket-spacing.html",
    "revision": "00fd1215fb6bd6b9f9b0c06d70da25a9"
  },
  {
    "url": "rules/html-end-tags.html",
    "revision": "c9f9c7091700774889d54a1c957cff59"
  },
  {
    "url": "rules/html-indent.html",
    "revision": "7e46433dbf0c1ab08e0311046e47878a"
  },
  {
    "url": "rules/html-quotes.html",
    "revision": "792f557d7d8864b8b8fb3b0aeac766d5"
  },
  {
    "url": "rules/html-self-closing.html",
    "revision": "18740b2ee2d8ce8b6c5c3379bf80e616"
  },
  {
    "url": "rules/index.html",
    "revision": "7e53fcd4497b9c3188015f8ad729b8d2"
  },
  {
    "url": "rules/max-attributes-per-line.html",
    "revision": "3ba46cb416ebe5d3231b6aa850bc0563"
  },
  {
    "url": "rules/multiline-html-element-content-newline.html",
    "revision": "3be0e3709d1fc4b4609596aadea71801"
  },
  {
    "url": "rules/mustache-interpolation-spacing.html",
    "revision": "b3d5dffbc4e90c0e70c73fa6ee8178a2"
  },
  {
    "url": "rules/no-async-in-computed-properties.html",
    "revision": "488bcd4db70131a2210d7647fec5bf74"
  },
  {
    "url": "rules/no-dupe-keys.html",
    "revision": "021f48565d8ad6acbfedfbffadd535e8"
  },
  {
    "url": "rules/no-dupe-s-else-if.html",
    "revision": "e16f42c8e85454cfea7c21a4b9c8f1c1"
  },
  {
    "url": "rules/no-duplicate-attributes.html",
    "revision": "f729e04722865947edbb7affb3fe2d05"
  },
  {
    "url": "rules/no-lone-template.html",
    "revision": "f624ec0dc9b6ae83eaec0ed25eb14c01"
  },
  {
    "url": "rules/no-multi-spaces.html",
    "revision": "f76bbe6df9926fefcad3a636e399afeb"
  },
  {
    "url": "rules/no-multiple-template-root.html",
    "revision": "dcdaf2b6aa195d82a586c781a36e7cdd"
  },
  {
    "url": "rules/no-parsing-error.html",
    "revision": "dbcf50d792ff79cdaf42594047bcf7c0"
  },
  {
    "url": "rules/no-reserved-keys.html",
    "revision": "36d5efbd62d891c8c34a11b1bc9db039"
  },
  {
    "url": "rules/no-shared-component-data.html",
    "revision": "086fd48d98f913e4f571e3980e595f95"
  },
  {
    "url": "rules/no-side-effects-in-computed-properties.html",
    "revision": "a9ecdcaf4d103902fc0a95362894a4e6"
  },
  {
    "url": "rules/no-spaces-around-equal-signs-in-attribute.html",
    "revision": "1f8c059a4f38b6c277d0a1738fccace0"
  },
  {
    "url": "rules/no-template-key.html",
    "revision": "1758cef301492d0863138858c0f6cad5"
  },
  {
    "url": "rules/no-template-shadow.html",
    "revision": "1529eb2f0ee905d5c2b5b1b130fa3ee7"
  },
  {
    "url": "rules/no-textarea-mustache.html",
    "revision": "07a394895016304b8beb3ef3110b851f"
  },
  {
    "url": "rules/no-unused-components.html",
    "revision": "4c7db76e85d4c49be04f2ac5cb3f9cfb"
  },
  {
    "url": "rules/no-unused-vars.html",
    "revision": "35dd76da5c8cfe5376e8a46e0a027f5a"
  },
  {
    "url": "rules/no-use-s-if-with-s-for.html",
    "revision": "c71ea3e7110cae859df7d626106f2346"
  },
  {
    "url": "rules/one-component-per-file.html",
    "revision": "f9094141d3d8a24f2e8f124e9cbdfc5b"
  },
  {
    "url": "rules/order-in-components.html",
    "revision": "e8e046da9bd26f6df747e6e53b5a2998"
  },
  {
    "url": "rules/return-in-computed-property.html",
    "revision": "74c07b6455ad04c398b316470a685b8e"
  },
  {
    "url": "rules/singleline-html-element-content-newline.html",
    "revision": "32f0a8e15d937a15283e23b042f02801"
  },
  {
    "url": "rules/this-in-template.html",
    "revision": "50ad455d0997f52b20f8473371c75d4b"
  },
  {
    "url": "rules/valid-s-else-if.html",
    "revision": "c3f4727a05f6822c83ab22f8acf8d528"
  },
  {
    "url": "rules/valid-s-else.html",
    "revision": "f1d26d41b253ee058375c4dad307f42c"
  },
  {
    "url": "rules/valid-s-for.html",
    "revision": "c5a702e29df2ec0514dd3203a2fdbc3e"
  },
  {
    "url": "rules/valid-s-if.html",
    "revision": "42c9331c849105731fa64c054ef0ebce"
  },
  {
    "url": "rules/valid-s-show.html",
    "revision": "b9e89d95c6dd7ec9cb7f3b56e0790613"
  },
  {
    "url": "rules/valid-template-root.html",
    "revision": "af7ae4c29eb333c560788f9e492d7384"
  },
  {
    "url": "style-guide/index.html",
    "revision": "86e979fdbea0367450931a53b6351ca2"
  },
  {
    "url": "user-guide/index.html",
    "revision": "3549ea204fd24d7d71656cd99b03331e"
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
