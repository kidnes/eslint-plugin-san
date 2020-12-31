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
    "revision": "c2bb9ca669396965d264ab89063a8676"
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
    "url": "assets/js/14.ca47be31.js",
    "revision": "b292a8f0ff2502a6b55b0f88eb5db4bf"
  },
  {
    "url": "assets/js/15.be02ee24.js",
    "revision": "3119e5b408b50970ef7ee48dafe374f7"
  },
  {
    "url": "assets/js/16.2eabe4ca.js",
    "revision": "1c7ef5cf7340e346280a459e71f3dcb6"
  },
  {
    "url": "assets/js/17.1a9143e5.js",
    "revision": "ef483946485be430d9d401f289f65103"
  },
  {
    "url": "assets/js/18.7f7e8520.js",
    "revision": "451e5cb4f7fc806d27f57a201b2af317"
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
    "url": "assets/js/21.a6952714.js",
    "revision": "4bc9371027eba81e059414dea9d251b0"
  },
  {
    "url": "assets/js/22.a1437710.js",
    "revision": "9ed025c65ab5853d132f36d53447aa6b"
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
    "url": "assets/js/26.110ece86.js",
    "revision": "ed8b8ef4aa5b0fe7d539c6067eefcd19"
  },
  {
    "url": "assets/js/27.d876137a.js",
    "revision": "caabacfca2cc8a558dbccfc5a474b517"
  },
  {
    "url": "assets/js/28.902d4b69.js",
    "revision": "051fe85597de4d3af47e9d74785bfc39"
  },
  {
    "url": "assets/js/29.8e28825b.js",
    "revision": "ebecfc4f63347169f96d2c3cb0d3bb1c"
  },
  {
    "url": "assets/js/3.4a62011d.js",
    "revision": "66387c8cdbe93a716d0cbfaff6e96d5a"
  },
  {
    "url": "assets/js/30.074d24b9.js",
    "revision": "baeea007afa784619628148402b1e77d"
  },
  {
    "url": "assets/js/31.6ae64f28.js",
    "revision": "c8d581a28676416f257afbd177557c7b"
  },
  {
    "url": "assets/js/32.ba24dc81.js",
    "revision": "9c5be7c508a7ec2dcd3a1e5f35c3a1e3"
  },
  {
    "url": "assets/js/33.d490205a.js",
    "revision": "0b723a614343db63172f1e0e32ed6763"
  },
  {
    "url": "assets/js/34.2936c788.js",
    "revision": "de79fb467f20685e2604b553c0341d07"
  },
  {
    "url": "assets/js/35.b0d1c652.js",
    "revision": "8f92872b6dc02c9a788a1080b362fd14"
  },
  {
    "url": "assets/js/36.17e7392b.js",
    "revision": "3006e0cf1d75f5205a3597b368167f70"
  },
  {
    "url": "assets/js/37.1ede32cb.js",
    "revision": "62312cf986d185079b4b19c1d3ba7232"
  },
  {
    "url": "assets/js/38.90336f44.js",
    "revision": "72ff217ede6a0a9d53fa488f596d4837"
  },
  {
    "url": "assets/js/39.62c53dde.js",
    "revision": "7281bb528176b755655aae34787c12b0"
  },
  {
    "url": "assets/js/4.d1f2a1b0.js",
    "revision": "30d90d9f69466ab6fee33462b8fdf0ae"
  },
  {
    "url": "assets/js/40.2856ef96.js",
    "revision": "6eceef3f366df3fc9a41c2af19f36149"
  },
  {
    "url": "assets/js/41.50b111ee.js",
    "revision": "30ba6ae0c054a66cc10c232f583b19d9"
  },
  {
    "url": "assets/js/42.3f6a495f.js",
    "revision": "7d4303ba9aafdfb746e8ca6ce3706e65"
  },
  {
    "url": "assets/js/43.330bdc7f.js",
    "revision": "06a164dc9c17a32e14169919187b81a0"
  },
  {
    "url": "assets/js/44.6e45108a.js",
    "revision": "30def3e29c8e1d5bca3bd055406877d2"
  },
  {
    "url": "assets/js/45.5150926e.js",
    "revision": "71019eefa2cae3db5752db34a8ec9bad"
  },
  {
    "url": "assets/js/46.0310a4b9.js",
    "revision": "7ec78906cfdc64d7427d2318c942f4b9"
  },
  {
    "url": "assets/js/47.bef4dde4.js",
    "revision": "a89a1bab47d553c78274c1da2657a666"
  },
  {
    "url": "assets/js/48.02ab28fd.js",
    "revision": "82ff69a3ba28aa0e38740aa12f1585a6"
  },
  {
    "url": "assets/js/49.279da64c.js",
    "revision": "12ec6832e6d19fb44321a0e06fb90951"
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
    "url": "assets/js/51.3c998d34.js",
    "revision": "5b29eafe10f56c34c793bcfb9844b2fb"
  },
  {
    "url": "assets/js/52.5056ba0f.js",
    "revision": "283e1e7567d8155c3f6ef0387ba862f0"
  },
  {
    "url": "assets/js/53.fa1b4a32.js",
    "revision": "313f8273ea84e93d84a106f13bd295ec"
  },
  {
    "url": "assets/js/54.4629e721.js",
    "revision": "13a64292dd89ff22a5857f114f5b3608"
  },
  {
    "url": "assets/js/55.eb8a7e41.js",
    "revision": "4b892cc0c99a050a3aadeca8c9ec822e"
  },
  {
    "url": "assets/js/56.a23a0c6e.js",
    "revision": "9f85801bd38799d91de56e4568a1caeb"
  },
  {
    "url": "assets/js/57.e7403988.js",
    "revision": "53dd374987872748a75009c8e81d2981"
  },
  {
    "url": "assets/js/58.1e4bb874.js",
    "revision": "9d224fd48f11dc0d06a33ba72e403880"
  },
  {
    "url": "assets/js/59.99ed3571.js",
    "revision": "0ee9560199f96a5cdeb5fb232eeaae81"
  },
  {
    "url": "assets/js/6.0621999c.js",
    "revision": "f5037bdccb488e6b5d702eb9a3d6be85"
  },
  {
    "url": "assets/js/60.4fc88dbe.js",
    "revision": "a1f4902b6ee0c28c88e0a0a692957dd5"
  },
  {
    "url": "assets/js/61.54bc24fc.js",
    "revision": "df92e7dc4d3bd723501962716fbd9823"
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
    "url": "assets/js/app.3ff06d17.js",
    "revision": "4da222562a2b4bcd9302c64c38ff4e92"
  },
  {
    "url": "assets/js/vendors~docsearch.cdcb6b19.js",
    "revision": "98a40a050a2241279f9a780c3d63b30a"
  },
  {
    "url": "developer-guide/index.html",
    "revision": "36a58e6a829a73b0e6f97d998f75a9c2"
  },
  {
    "url": "index.html",
    "revision": "6f0e13e2867226ab22933260f63dcb90"
  },
  {
    "url": "rules.html",
    "revision": "67e884616b7a5b306aa56ef3429d65b6"
  },
  {
    "url": "rules/attribute-hyphenation.html",
    "revision": "b21e9cd1dbd8749bef54aa84ef31ffde"
  },
  {
    "url": "rules/attributes-order.html",
    "revision": "af24176014868fa3865a1bf461dde160"
  },
  {
    "url": "rules/comment-directive.html",
    "revision": "b4e65147e5c886be2d7c5ef2279509fb"
  },
  {
    "url": "rules/component-tags-order.html",
    "revision": "3be00f4a0d418f66c2dce16aa9e6fc43"
  },
  {
    "url": "rules/custom-event-name-casing.html",
    "revision": "9ae293addf7f235f06abd28de5f12960"
  },
  {
    "url": "rules/html-closing-bracket-newline.html",
    "revision": "edb33fa75d64f501fe77ac2b1b2fb608"
  },
  {
    "url": "rules/html-closing-bracket-spacing.html",
    "revision": "99dff5b103497e1552ab07580c87c6a6"
  },
  {
    "url": "rules/html-end-tags.html",
    "revision": "445079027e95905e4611cd9a17fb7b23"
  },
  {
    "url": "rules/html-indent.html",
    "revision": "7ff64b699c6a633ae51561b416261cad"
  },
  {
    "url": "rules/html-quotes.html",
    "revision": "0b4781565236d5d13274b5af929c935a"
  },
  {
    "url": "rules/html-self-closing.html",
    "revision": "76ce6c91a14cdc1ec9184839f92ef29f"
  },
  {
    "url": "rules/index.html",
    "revision": "5d9fd64a61a806335dfba3870e12fc39"
  },
  {
    "url": "rules/max-attributes-per-line.html",
    "revision": "b142375b55a72a0621ca673e886e3dda"
  },
  {
    "url": "rules/multiline-html-element-content-newline.html",
    "revision": "33b746302ed4ff172f0f8061f496ce55"
  },
  {
    "url": "rules/mustache-interpolation-spacing.html",
    "revision": "430d1138bb8a6d326b78b62d98920d8c"
  },
  {
    "url": "rules/no-async-in-computed-properties.html",
    "revision": "c0394223d02085b4c24a546324fe1577"
  },
  {
    "url": "rules/no-dupe-keys.html",
    "revision": "66e5212d17dec18c902c7b4b0b94f224"
  },
  {
    "url": "rules/no-dupe-s-else-if.html",
    "revision": "1e6d7f3288c6a2bc160c197f87cccef5"
  },
  {
    "url": "rules/no-duplicate-attributes.html",
    "revision": "e797f1bcf4e59e23c30d343d5067ed0b"
  },
  {
    "url": "rules/no-lone-template.html",
    "revision": "7afb22c6bb413a3eafc7b08698790272"
  },
  {
    "url": "rules/no-multi-spaces.html",
    "revision": "410e0d4a05730a335a2d78ea15d820c6"
  },
  {
    "url": "rules/no-multiple-template-root.html",
    "revision": "dd893311c71e329aeb2857a84763ffa2"
  },
  {
    "url": "rules/no-parsing-error.html",
    "revision": "a522fcc9906bba6bd16653b59492569a"
  },
  {
    "url": "rules/no-reserved-keys.html",
    "revision": "20f3540308a3b65038612d93ef332850"
  },
  {
    "url": "rules/no-shared-component-data.html",
    "revision": "8efca8c926f2880e75a5506e0924ab75"
  },
  {
    "url": "rules/no-side-effects-in-computed-properties.html",
    "revision": "2cdab26e5e205eef6804d297e47b6bda"
  },
  {
    "url": "rules/no-spaces-around-equal-signs-in-attribute.html",
    "revision": "81f9f77317836a3b2e484eafa380400a"
  },
  {
    "url": "rules/no-template-shadow.html",
    "revision": "f9f0b0bc829b64b978130805f7422733"
  },
  {
    "url": "rules/no-textarea-mustache.html",
    "revision": "f18ff7af41dd8357f1ad1a0fc8c715bb"
  },
  {
    "url": "rules/no-unused-components.html",
    "revision": "01fadc665db4200d48eaa9b2b2a8f44a"
  },
  {
    "url": "rules/no-unused-vars.html",
    "revision": "87633a450d07d7db522aed6bc172c591"
  },
  {
    "url": "rules/no-use-s-if-with-s-for.html",
    "revision": "fc85a4877ec0710a73842e3d76cc6b01"
  },
  {
    "url": "rules/one-component-per-file.html",
    "revision": "4f33d78c43b05917502e663391b450f8"
  },
  {
    "url": "rules/order-in-components.html",
    "revision": "a8f892abbc2f0f13e564c100990803b6"
  },
  {
    "url": "rules/return-in-computed-property.html",
    "revision": "4cfa38a0fd7b99e62a690fffc5db22c2"
  },
  {
    "url": "rules/singleline-html-element-content-newline.html",
    "revision": "762550c38f8b7195dc6a326b431b86b0"
  },
  {
    "url": "rules/this-in-template.html",
    "revision": "24d9356cbb86fee6d568989fe3bce5d5"
  },
  {
    "url": "rules/valid-s-else-if.html",
    "revision": "3eb3fe03dca5c52e7793d72545e7d9df"
  },
  {
    "url": "rules/valid-s-else.html",
    "revision": "041fd9842e7110e23916c2e49bd162b9"
  },
  {
    "url": "rules/valid-s-for.html",
    "revision": "64f2434603ec20423004bf9da9b83fca"
  },
  {
    "url": "rules/valid-s-if.html",
    "revision": "26ef87320d5116dbe30f2766f4e36244"
  },
  {
    "url": "rules/valid-s-show.html",
    "revision": "3754873262565db3bf5dd50d0e5d1632"
  },
  {
    "url": "rules/valid-template-root.html",
    "revision": "5baf8f4218f58ea895c8c48512dae788"
  },
  {
    "url": "style-guide/index.html",
    "revision": "728a502742d55e0d0a3686ecd0fded29"
  },
  {
    "url": "user-guide/index.html",
    "revision": "43df0ee7e645efe6478173ad7d778132"
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
