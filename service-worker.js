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
    "revision": "ae39841bfb4f87b99566e579ae4ca3c2"
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
    "url": "assets/js/14.d1dcc82f.js",
    "revision": "14465c3d464ec6b227a53e7675d40e73"
  },
  {
    "url": "assets/js/15.536558a5.js",
    "revision": "a5561d2b4bff6e8e07eca608f7f742a3"
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
    "url": "assets/js/18.904b7db4.js",
    "revision": "3cd7a132b1d474a2664fae7d04c88b52"
  },
  {
    "url": "assets/js/19.aa03563e.js",
    "revision": "4118dde9d7ba448718469ec3ad76e6d3"
  },
  {
    "url": "assets/js/20.72695aff.js",
    "revision": "7f70dc67a6fb15b869f9f774d2b29360"
  },
  {
    "url": "assets/js/21.e193eee6.js",
    "revision": "651f89ce0b64d532e358b4c5116f8968"
  },
  {
    "url": "assets/js/22.9f4c56a8.js",
    "revision": "2d60cbb700167a5f439a46b9ecb39e63"
  },
  {
    "url": "assets/js/23.9721a884.js",
    "revision": "14a8c55010c963cfeaa5ab95fe90d23a"
  },
  {
    "url": "assets/js/24.4c869d0e.js",
    "revision": "31118b52be99cacc133b939f1cb2f5a4"
  },
  {
    "url": "assets/js/25.a8605aad.js",
    "revision": "40b06fee37ab8e1e6934a3f65dda8a87"
  },
  {
    "url": "assets/js/26.7928d7f8.js",
    "revision": "4fd8b5f5a145d947c8d0cc1234a3d283"
  },
  {
    "url": "assets/js/27.d1ce8521.js",
    "revision": "acef09464b9b7b9641639b8673ba9119"
  },
  {
    "url": "assets/js/28.e82e205c.js",
    "revision": "3d2f2c9980856510b70cb03058c9dbbb"
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
    "url": "assets/js/30.dcb15bd5.js",
    "revision": "08cfce4e96ff5f7aa0be3225940ad5d2"
  },
  {
    "url": "assets/js/31.6ae64f28.js",
    "revision": "c8d581a28676416f257afbd177557c7b"
  },
  {
    "url": "assets/js/32.bb01c1d3.js",
    "revision": "71986ee95071d1213a4a96d7b20864af"
  },
  {
    "url": "assets/js/33.6c828e2f.js",
    "revision": "3758b749d8f989a850424325bc9f92bc"
  },
  {
    "url": "assets/js/34.2936c788.js",
    "revision": "de79fb467f20685e2604b553c0341d07"
  },
  {
    "url": "assets/js/35.bfdec5a2.js",
    "revision": "7d51bb3d1d48f00f8f387be26d4e832c"
  },
  {
    "url": "assets/js/36.fc057fe9.js",
    "revision": "f25a396d3fd5912a18c7337678ecfef9"
  },
  {
    "url": "assets/js/37.6ad800b2.js",
    "revision": "f8d473fafcee017badee403cd8fd59b1"
  },
  {
    "url": "assets/js/38.90336f44.js",
    "revision": "72ff217ede6a0a9d53fa488f596d4837"
  },
  {
    "url": "assets/js/39.37e613eb.js",
    "revision": "2e7b6e3f9677458d9e016dcc7a9558b1"
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
    "url": "assets/js/41.b6da8780.js",
    "revision": "d3bb5d22f81b0c6417c38b5e0e1962bd"
  },
  {
    "url": "assets/js/42.ff8b240b.js",
    "revision": "8a76b6718dec3de89628f68dac25c0e4"
  },
  {
    "url": "assets/js/43.330bdc7f.js",
    "revision": "06a164dc9c17a32e14169919187b81a0"
  },
  {
    "url": "assets/js/44.3bf2a1e4.js",
    "revision": "42fb04a7fdc8859556edaf8fd3b1d9b9"
  },
  {
    "url": "assets/js/45.6e9c2afe.js",
    "revision": "e9b72f6cf7320002d491d8af3e49ccf7"
  },
  {
    "url": "assets/js/46.47de05be.js",
    "revision": "272e823ad17734955c4b14db60d69389"
  },
  {
    "url": "assets/js/47.5743f346.js",
    "revision": "2bfc63f5c88697ee64a576f110a66b30"
  },
  {
    "url": "assets/js/48.d275bb63.js",
    "revision": "ac512c9191da0a6b9d8ad1207bfa26f6"
  },
  {
    "url": "assets/js/49.1fe13a5d.js",
    "revision": "b4e05ac13948d8afac4577f227126f47"
  },
  {
    "url": "assets/js/5.9fbb8664.js",
    "revision": "d0a846645293f8c3dee8dbf59b88a565"
  },
  {
    "url": "assets/js/50.514663c9.js",
    "revision": "e0d0af0b45cc78581da35ef3bc9c5f6d"
  },
  {
    "url": "assets/js/51.6d3bb48c.js",
    "revision": "7ef28c64e6674732417f3a6d4b192385"
  },
  {
    "url": "assets/js/52.72cca88b.js",
    "revision": "3ef8971b6229b199cc8eb2ce51574078"
  },
  {
    "url": "assets/js/53.f4448a45.js",
    "revision": "f7beb049db513c6391b0a05fdfc49c91"
  },
  {
    "url": "assets/js/54.433d9c8e.js",
    "revision": "cf3bd6fdf969b13119e48c3f917a5e56"
  },
  {
    "url": "assets/js/55.faaa3130.js",
    "revision": "aeda36508c7eb8ba477c4b9f0e53f67f"
  },
  {
    "url": "assets/js/56.cd2e92dc.js",
    "revision": "793a1916df3d5e228eaa237fa1f38d61"
  },
  {
    "url": "assets/js/57.c74a9666.js",
    "revision": "dc0eb0d5dfb9ebe54fc88a984c2fe57b"
  },
  {
    "url": "assets/js/58.d6ba0a7e.js",
    "revision": "746a2d69ddb5505d209a5564ef63a7d6"
  },
  {
    "url": "assets/js/59.dbec0afd.js",
    "revision": "793a7da6a12726f9c6530a2696085bd4"
  },
  {
    "url": "assets/js/6.0621999c.js",
    "revision": "f5037bdccb488e6b5d702eb9a3d6be85"
  },
  {
    "url": "assets/js/60.cd91357c.js",
    "revision": "66b49b28c8b0921e83905ee86bd61394"
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
    "url": "assets/js/app.90922568.js",
    "revision": "bfe43fe2f40c5764b03932e71ac81e97"
  },
  {
    "url": "assets/js/vendors~docsearch.cdcb6b19.js",
    "revision": "98a40a050a2241279f9a780c3d63b30a"
  },
  {
    "url": "developer-guide/index.html",
    "revision": "cd054d4035c50a94df645b571688d58c"
  },
  {
    "url": "index.html",
    "revision": "112ae923a41a04e02910dfcf18dc8e3f"
  },
  {
    "url": "rules.html",
    "revision": "6d3dd3099459ecbd8a29894059c8779a"
  },
  {
    "url": "rules/attribute-hyphenation.html",
    "revision": "527180e4d530fab4ea54a484f06b8c98"
  },
  {
    "url": "rules/attributes-order.html",
    "revision": "925c1263ac65c52d8986d38321e34dc6"
  },
  {
    "url": "rules/comment-directive.html",
    "revision": "36b113afe5ff7f918c93a4b3428a5d0f"
  },
  {
    "url": "rules/component-tags-order.html",
    "revision": "c56de30c76ba05ca05ad5d909161c7d5"
  },
  {
    "url": "rules/custom-event-name-casing.html",
    "revision": "59e442b4db0b47d09356b3d35c449146"
  },
  {
    "url": "rules/html-closing-bracket-newline.html",
    "revision": "73ae50647d690be67ee775fb60117856"
  },
  {
    "url": "rules/html-closing-bracket-spacing.html",
    "revision": "ff00360f2070bf3e2a62e74e9be837d3"
  },
  {
    "url": "rules/html-end-tags.html",
    "revision": "36ce03a0c157a71f7d5a71047fb16429"
  },
  {
    "url": "rules/html-indent.html",
    "revision": "8dd5b05c66da4cb93de913fe2e7bd5cc"
  },
  {
    "url": "rules/html-quotes.html",
    "revision": "be848a6ccbc47943a37fa18cb2d71883"
  },
  {
    "url": "rules/html-self-closing.html",
    "revision": "171f4ca97ef911e628982958f92e9178"
  },
  {
    "url": "rules/index.html",
    "revision": "909dd8240ec0627ab72a41038e2dbcb2"
  },
  {
    "url": "rules/max-attributes-per-line.html",
    "revision": "af7e451534c0be375430fd992cc5bc83"
  },
  {
    "url": "rules/multiline-html-element-content-newline.html",
    "revision": "554d164bfdbfab42c0950877a93c1a0f"
  },
  {
    "url": "rules/mustache-interpolation-spacing.html",
    "revision": "6f95207119a3b245de9eac9978e7f63f"
  },
  {
    "url": "rules/no-async-in-computed-properties.html",
    "revision": "c93f79590466a479b64e41e6b74410ac"
  },
  {
    "url": "rules/no-dupe-keys.html",
    "revision": "b8a069eb40371adf22945cd4b0844951"
  },
  {
    "url": "rules/no-dupe-s-else-if.html",
    "revision": "498bb177a6c4e2dc0bd46df7616b6f34"
  },
  {
    "url": "rules/no-duplicate-attributes.html",
    "revision": "a4384590d10a457b7e75ed3d88ad5b7f"
  },
  {
    "url": "rules/no-lone-template.html",
    "revision": "892edf85ce8cc6ac0519cd3b171fc1b1"
  },
  {
    "url": "rules/no-multi-spaces.html",
    "revision": "87702edf2983e93fd7d44585caa669fd"
  },
  {
    "url": "rules/no-multiple-template-root.html",
    "revision": "3d13a07504625715560063d34e1c8d3e"
  },
  {
    "url": "rules/no-parsing-error.html",
    "revision": "0a68064e792d1f1f4fc403a5e231fb8f"
  },
  {
    "url": "rules/no-reserved-keys.html",
    "revision": "97c51a07e0cea10d10c3b99f348bb3ef"
  },
  {
    "url": "rules/no-shared-component-data.html",
    "revision": "908ee79841492342d5210f1ba70ba082"
  },
  {
    "url": "rules/no-side-effects-in-computed-properties.html",
    "revision": "292caab83baa74c2d62b5e93814a3299"
  },
  {
    "url": "rules/no-spaces-around-equal-signs-in-attribute.html",
    "revision": "641c1454649722ec9e627fdb8fd3b745"
  },
  {
    "url": "rules/no-template-shadow.html",
    "revision": "7aa19d8ec42d333e0b3bae7002c5a999"
  },
  {
    "url": "rules/no-textarea-mustache.html",
    "revision": "fa190a60212116424bc7955745861402"
  },
  {
    "url": "rules/no-unused-components.html",
    "revision": "fbd4e8409761360086e9d7c9f7f5f8b9"
  },
  {
    "url": "rules/no-unused-vars.html",
    "revision": "12912aff748fcbb44e6285ee1f70303a"
  },
  {
    "url": "rules/no-use-s-if-with-s-for.html",
    "revision": "60420acdc13d154468912741ca6deadd"
  },
  {
    "url": "rules/one-component-per-file.html",
    "revision": "f8bc98dfb73e7dd86616e4da14fe24ed"
  },
  {
    "url": "rules/order-in-components.html",
    "revision": "7cc7704b62413e918e55c3f674e39e3a"
  },
  {
    "url": "rules/return-in-computed-property.html",
    "revision": "5b935268b880b229ca961e30e3258bb7"
  },
  {
    "url": "rules/singleline-html-element-content-newline.html",
    "revision": "da0583685cba29a4f57c904ca58f8add"
  },
  {
    "url": "rules/this-in-template.html",
    "revision": "3d5691d522cd67cfc1f23004ac02ed0f"
  },
  {
    "url": "rules/valid-s-else-if.html",
    "revision": "1d116d0b873c31433ceb72c7c03350ea"
  },
  {
    "url": "rules/valid-s-else.html",
    "revision": "f5d8b3de54388544a27f8e949aa1a197"
  },
  {
    "url": "rules/valid-s-for.html",
    "revision": "759ea32010d6e73aaac99bfb066eb7dc"
  },
  {
    "url": "rules/valid-s-if.html",
    "revision": "1f3f7292dcbac8f6551dd4b76201ba3e"
  },
  {
    "url": "rules/valid-s-show.html",
    "revision": "7d1722073e2dade1d6fb859b209aef5f"
  },
  {
    "url": "rules/valid-template-root.html",
    "revision": "2e4757126d96b67864ae5741758bac47"
  },
  {
    "url": "style-guide/index.html",
    "revision": "4e14f71e26bd884d99514e50c89fe1b0"
  },
  {
    "url": "user-guide/index.html",
    "revision": "c31afaa70ab2cbbf662138e9c5af9f24"
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
