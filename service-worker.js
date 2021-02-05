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
    "revision": "59d8250649ade26a8a1f78a26c426de2"
  },
  {
    "url": "assets/css/0.styles.9ffef2d1.css",
    "revision": "beeafca2965fcf5c1fd1605779747820"
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
    "url": "assets/js/10.dd8042ac.js",
    "revision": "01c3439c494fd01a59864df8c592eb2a"
  },
  {
    "url": "assets/js/12.857c2c96.js",
    "revision": "9ab2d68e5c77a1074b61dd8d584f2127"
  },
  {
    "url": "assets/js/13.062aea37.js",
    "revision": "dc5640e62d2163d1610407c1255b267b"
  },
  {
    "url": "assets/js/14.21dbb539.js",
    "revision": "7853ff9e1efd7f40d1b03735d0b7523b"
  },
  {
    "url": "assets/js/15.a0dcbbb0.js",
    "revision": "fdc6c6ee7d3101572b44ba6ddccb9217"
  },
  {
    "url": "assets/js/16.e99eb284.js",
    "revision": "0438a8250fd521d59c28eeb2570869c2"
  },
  {
    "url": "assets/js/17.156f924f.js",
    "revision": "3d858d75fb7f91ec0f4ef2bb74fbb218"
  },
  {
    "url": "assets/js/18.d43d817e.js",
    "revision": "4fbbb89817fbbce1b74b4bb76e58ddac"
  },
  {
    "url": "assets/js/19.afc3d552.js",
    "revision": "bb47d14b321361e0637fe0cb2acee6db"
  },
  {
    "url": "assets/js/20.9ae993fe.js",
    "revision": "337042055f69a2d02bb5e45bff20b11e"
  },
  {
    "url": "assets/js/21.73a60670.js",
    "revision": "651f89ce0b64d532e358b4c5116f8968"
  },
  {
    "url": "assets/js/22.1dc17d6b.js",
    "revision": "af5baa80cfea40c0fa636952d46531e4"
  },
  {
    "url": "assets/js/23.77567763.js",
    "revision": "07ac665f1dccae2cdb00415aa096f43a"
  },
  {
    "url": "assets/js/24.c1a62d21.js",
    "revision": "77afd8186b714432fe39ac8c3a7e6d52"
  },
  {
    "url": "assets/js/25.f8ba3e83.js",
    "revision": "9ad6501e25d547091645e969dcc7de76"
  },
  {
    "url": "assets/js/26.d9ad0810.js",
    "revision": "f02e7afade9988b87b912637dd364fb0"
  },
  {
    "url": "assets/js/27.32fcd735.js",
    "revision": "505bda598b3eb96eefecc49ea46e75a5"
  },
  {
    "url": "assets/js/28.53d7b577.js",
    "revision": "051fe85597de4d3af47e9d74785bfc39"
  },
  {
    "url": "assets/js/29.118be8d7.js",
    "revision": "d40e0d7cc5cc7102c96e257b0a390a81"
  },
  {
    "url": "assets/js/3.e4c23617.js",
    "revision": "760e610aef3a9b1c0fc49e160c576656"
  },
  {
    "url": "assets/js/30.ab510a6a.js",
    "revision": "c21d2b86e0b927634294acfb4d617c51"
  },
  {
    "url": "assets/js/31.d4ac641e.js",
    "revision": "2873b8d12385cb7dd65e01e7e2c71719"
  },
  {
    "url": "assets/js/32.5ad62cb9.js",
    "revision": "1a98ce11f6e72d624000a7e860894dd3"
  },
  {
    "url": "assets/js/33.0e9033f5.js",
    "revision": "365124e77c9285c821bb8ebdcb2aee3f"
  },
  {
    "url": "assets/js/34.5e235cdb.js",
    "revision": "cddbe4cc456072f5381e1f8b128ab79c"
  },
  {
    "url": "assets/js/35.993885f2.js",
    "revision": "e4b360d43e0962b1eff6baa3fc452c82"
  },
  {
    "url": "assets/js/36.380e1d88.js",
    "revision": "cdab1ca7e0a84fd3bc7fef7eb2c35f45"
  },
  {
    "url": "assets/js/37.21712711.js",
    "revision": "8261eb1ea635670c7b99f302fc893c31"
  },
  {
    "url": "assets/js/38.8b81a6f3.js",
    "revision": "1335b2a13476ba7a47bae638ecfeee7f"
  },
  {
    "url": "assets/js/39.ba41e04b.js",
    "revision": "b3f9c5c93d43792951eeff40b8c8adba"
  },
  {
    "url": "assets/js/4.23796267.js",
    "revision": "87e16442f5aa8c0139714b3398cf4623"
  },
  {
    "url": "assets/js/40.2e88dcf2.js",
    "revision": "f064531bd9792851d24b98d42697bafc"
  },
  {
    "url": "assets/js/41.f319f480.js",
    "revision": "3b55d8281f1016254b0a529601199603"
  },
  {
    "url": "assets/js/42.5c99156f.js",
    "revision": "cf5983034df8450458752b1230c263f9"
  },
  {
    "url": "assets/js/43.c5752b93.js",
    "revision": "515a80e1420fc8550d285021c6a3e3e3"
  },
  {
    "url": "assets/js/44.b16579b9.js",
    "revision": "30def3e29c8e1d5bca3bd055406877d2"
  },
  {
    "url": "assets/js/45.26eb5894.js",
    "revision": "6aea3ac26eca0c302bd5f7e6143a10de"
  },
  {
    "url": "assets/js/46.88cd7a1f.js",
    "revision": "094bed0315b1b53fabd0a3e9cfc199e7"
  },
  {
    "url": "assets/js/47.ede4e43f.js",
    "revision": "ccf4edb16dd2b382ce381a58b122956c"
  },
  {
    "url": "assets/js/48.6a73e593.js",
    "revision": "2eb00764878cfbab85fad925d6c650d4"
  },
  {
    "url": "assets/js/49.b6f2b392.js",
    "revision": "9bd009296f7ab1c34a46e5db134d7471"
  },
  {
    "url": "assets/js/5.f77c8929.js",
    "revision": "d67412edc4585a79e87f001e54cb9c5e"
  },
  {
    "url": "assets/js/50.cf9b1a60.js",
    "revision": "e754af1abb7a28f28b84076578a0f5b7"
  },
  {
    "url": "assets/js/51.11d7733c.js",
    "revision": "9e81f503360942af5e06038f6347f240"
  },
  {
    "url": "assets/js/52.f68116da.js",
    "revision": "a0a9b71f04191f065e83aadaf9bea2a6"
  },
  {
    "url": "assets/js/53.e3388918.js",
    "revision": "24e2eafca3bb009e614805bdf9868a88"
  },
  {
    "url": "assets/js/54.4db3978c.js",
    "revision": "2da4e1d54c356c17e9f96c28a64167cd"
  },
  {
    "url": "assets/js/55.ce6c4281.js",
    "revision": "5c1a5f0deb5191610bd4218d7d52fd2a"
  },
  {
    "url": "assets/js/56.8be18268.js",
    "revision": "4134342e1aceb8e7818c063ae04cd8b6"
  },
  {
    "url": "assets/js/57.afa7f6ab.js",
    "revision": "82fd9d87461e2cccaa0c7feee2121cbd"
  },
  {
    "url": "assets/js/58.f7c15cc2.js",
    "revision": "746a2d69ddb5505d209a5564ef63a7d6"
  },
  {
    "url": "assets/js/59.e48c50aa.js",
    "revision": "3d5a1f478e43b6d127b1698cce34b0ab"
  },
  {
    "url": "assets/js/6.7d3e84cf.js",
    "revision": "f16ac6147a857d82d0704b673ace08f0"
  },
  {
    "url": "assets/js/60.1b42d7d0.js",
    "revision": "ebfa1fb33ecbeef71c6c8d058c96795f"
  },
  {
    "url": "assets/js/61.cfe34dae.js",
    "revision": "a85ba2fb619d2643a7d256cf0bfb42a4"
  },
  {
    "url": "assets/js/62.7985d6ad.js",
    "revision": "e6db719b235b193016c71b907fa62538"
  },
  {
    "url": "assets/js/63.31b2a3d7.js",
    "revision": "5ad03e93a847c3182f13c876b1a0eb97"
  },
  {
    "url": "assets/js/64.f894216c.js",
    "revision": "8aff1b6d787896d1b843b4a9f9be9f03"
  },
  {
    "url": "assets/js/65.a5690427.js",
    "revision": "16cf719076d30cc73c31836175d260d6"
  },
  {
    "url": "assets/js/66.705133ca.js",
    "revision": "96941146b2ca479fa8ea0a820920ec89"
  },
  {
    "url": "assets/js/67.f6f32349.js",
    "revision": "3dbae20abbea538e4289d68eb0cca692"
  },
  {
    "url": "assets/js/68.d6f856fa.js",
    "revision": "85154e61cb7eac153ccfd17b3e6bc0ab"
  },
  {
    "url": "assets/js/69.a479647a.js",
    "revision": "c64e7eb7f5b11f373e4bcaeba7724fb7"
  },
  {
    "url": "assets/js/7.519ac20f.js",
    "revision": "860e9ba576bda001b33ad9f91e581166"
  },
  {
    "url": "assets/js/70.47a2b801.js",
    "revision": "9ba03d3d7ec01664c32be6d4c5dc44e0"
  },
  {
    "url": "assets/js/71.980a8f19.js",
    "revision": "e3e1e87e18154ef52085f5478a424bdb"
  },
  {
    "url": "assets/js/73.b72d5163.js",
    "revision": "2afd5f352cc131c1fdcf1040ba51e934"
  },
  {
    "url": "assets/js/74.a6821bff.js",
    "revision": "24650860aeec4b38ac44a7fb144e0575"
  },
  {
    "url": "assets/js/8.6b4391f5.js",
    "revision": "2e465730d8b92b29dfd8921487212110"
  },
  {
    "url": "assets/js/9.a676ea17.js",
    "revision": "dc3f002504dc1cedb309da2a5c52b5fd"
  },
  {
    "url": "assets/js/app.202e5a93.js",
    "revision": "488adee91b2431265f0e4ea290be2971"
  },
  {
    "url": "assets/js/vendors~docsearch.af4f3d85.js",
    "revision": "b47b697ae5cf9a7fa8bc8d9f8e6f387a"
  },
  {
    "url": "developer-guide/index.html",
    "revision": "6d6ef1c423523b7db14e060cc6d0a7ac"
  },
  {
    "url": "index.html",
    "revision": "2f994523c19113dda55dfab56c0e9a07"
  },
  {
    "url": "rules.html",
    "revision": "e343faf954511f0b98e3cfde823f02e2"
  },
  {
    "url": "rules/attribute-hyphenation.html",
    "revision": "6f3b571b66a0547609a454119b4ab024"
  },
  {
    "url": "rules/attributes-order.html",
    "revision": "8eb2daa573e46156d7194252f2c79ce0"
  },
  {
    "url": "rules/comment-directive.html",
    "revision": "d1313cb43808a5683dbb496037bb2252"
  },
  {
    "url": "rules/component-tags-order.html",
    "revision": "4e04b22eccca616864d39af2d2a6933d"
  },
  {
    "url": "rules/custom-event-name-casing.html",
    "revision": "6179d896d922f4092e75571a15dc0433"
  },
  {
    "url": "rules/html-closing-bracket-newline.html",
    "revision": "00d0bb774fa04865272e028c3de14eb0"
  },
  {
    "url": "rules/html-closing-bracket-spacing.html",
    "revision": "7c51f6dc7dae98140cd5c7a8de367c2f"
  },
  {
    "url": "rules/html-end-tags.html",
    "revision": "ed293b48f7462b0072b85d1287eeca0f"
  },
  {
    "url": "rules/html-indent.html",
    "revision": "eb6068e6d7cf5ef8860a2928f41ffcec"
  },
  {
    "url": "rules/html-quotes.html",
    "revision": "124a6d74f8b2a5553712c651f1dfdb56"
  },
  {
    "url": "rules/html-self-closing.html",
    "revision": "96bef0ead282677567efc4394f4e0687"
  },
  {
    "url": "rules/index.html",
    "revision": "1652c1a611348b37057a5179aed9a5f6"
  },
  {
    "url": "rules/max-attributes-per-line.html",
    "revision": "f4004794f9969e552f2f355e6e98a98d"
  },
  {
    "url": "rules/multiline-html-element-content-newline.html",
    "revision": "545eacf3cedfc887076372c38b09dc2a"
  },
  {
    "url": "rules/mustache-interpolation-spacing.html",
    "revision": "df06e7d847887c2192f95994d841f06f"
  },
  {
    "url": "rules/no-async-in-computed-properties.html",
    "revision": "131899fb325a7dbb54ac03b96778b266"
  },
  {
    "url": "rules/no-dupe-keys.html",
    "revision": "ace14ff961085604e48d726cab8641ea"
  },
  {
    "url": "rules/no-dupe-s-else-if.html",
    "revision": "26f966a54b3c614209f9d439fd471dec"
  },
  {
    "url": "rules/no-duplicate-attributes.html",
    "revision": "f721ad427618a038023171807e4cac27"
  },
  {
    "url": "rules/no-lone-template.html",
    "revision": "257d9a205d61a437993f76c182991d63"
  },
  {
    "url": "rules/no-multi-spaces.html",
    "revision": "2e24a117cdf8775bd70f4627a540c53a"
  },
  {
    "url": "rules/no-multiple-template-root.html",
    "revision": "d89643aa34bdf6614bd495239969826e"
  },
  {
    "url": "rules/no-parsing-error.html",
    "revision": "0111f4a134f7940b5c3f36a4b1e3ac8c"
  },
  {
    "url": "rules/no-reserved-keys.html",
    "revision": "a66c8b58ed8432e6e942b0ca31d4b819"
  },
  {
    "url": "rules/no-shared-component-data.html",
    "revision": "4b4ee3b091e9ca47399a534285ba92cf"
  },
  {
    "url": "rules/no-side-effects-in-computed-properties.html",
    "revision": "d63737d6a6c11adf429201ca019bb9b9"
  },
  {
    "url": "rules/no-spaces-around-equal-signs-in-attribute.html",
    "revision": "60bd7ff75f1f32fb60b03aff299f1ad6"
  },
  {
    "url": "rules/no-template-shadow.html",
    "revision": "1e9662530ed8fc599f86b7d63a990cd4"
  },
  {
    "url": "rules/no-textarea-mustache.html",
    "revision": "38f0d46e8159acf8a1beb39cc43e77ad"
  },
  {
    "url": "rules/no-unused-components.html",
    "revision": "56752fd746a2f7f705bf8bfdac5edc39"
  },
  {
    "url": "rules/no-unused-vars.html",
    "revision": "ba12eed62e08bf90f6a8596b201a05fd"
  },
  {
    "url": "rules/no-use-s-if-with-s-for.html",
    "revision": "71cea1bdca1aea3d25c1c2c9b8d3cbaa"
  },
  {
    "url": "rules/one-component-per-file.html",
    "revision": "3fe07cd0aab83aec932d0ae23a72e808"
  },
  {
    "url": "rules/order-in-components.html",
    "revision": "b178397244d64f72b09ec5557a117363"
  },
  {
    "url": "rules/return-in-computed-property.html",
    "revision": "bfac50926e41ad765b1df5e53d535752"
  },
  {
    "url": "rules/singleline-html-element-content-newline.html",
    "revision": "366a5433fe2e71c7a922c34c94e4fffc"
  },
  {
    "url": "rules/this-in-template.html",
    "revision": "3837f5c1c9130eb5086378670cb074ea"
  },
  {
    "url": "rules/valid-s-else-if.html",
    "revision": "189e7f60a3ebea70ec1744111dafa4c4"
  },
  {
    "url": "rules/valid-s-else.html",
    "revision": "53b3886ae028a5f7dd38bd98e418a79a"
  },
  {
    "url": "rules/valid-s-for.html",
    "revision": "c66719a21dfbcd29c550cc5a655bbc61"
  },
  {
    "url": "rules/valid-s-if.html",
    "revision": "bea801aaac99cd23b644ae0c1cfdc509"
  },
  {
    "url": "rules/valid-s-show.html",
    "revision": "5387f1e04edad22f1202ae83159e1c06"
  },
  {
    "url": "rules/valid-template-root.html",
    "revision": "4679fe441799bbc53435e2dc0b0fb9a7"
  },
  {
    "url": "style-guide/index.html",
    "revision": "b430b572f5c8abd36d393a2b4ce6f361"
  },
  {
    "url": "user-guide/index.html",
    "revision": "d29030de8698eee134cc00b7ed7f29b3"
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
