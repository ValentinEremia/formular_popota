'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "978b4fdad09b6dc4ad7509aee3c85435",
"version.json": "5f921f03f33062ab04c45234efaea966",
"index.html": "5b5e85fd5097ad4863c6748f04cca808",
"/": "5b5e85fd5097ad4863c6748f04cca808",
"main.dart.js": "a0dc60d0289b27b9c48cd5232110ac79",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "48c36981813dfb3208543021cb7e2094",
".git/config": "01cde159ac1c715bcb777145da2732c9",
".git/objects/95/16515a1fa14c333dd78633c4715f2fea26c3f8": "cd3554e3f9689c77f0db19f85786aa64",
".git/objects/3e/188e1c0f9f9428054f8f0b29b67eb5f0c2fab7": "b0006eb6e5673185182896e0ede1cd2c",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/57/4c98d10fbe438a26313118cd6e3bb4a3c75f9f": "796d1c37c997466b04480308ab35b626",
".git/objects/6f/df8bebb740a46fcd9dce0784e624e0f6eeae75": "48de039150d1bf0d32bd2851b9b56840",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "8764738d87b028ae515b40f0ab50200d",
".git/objects/51/9243064865cc21c96badce80c182514490ef68": "34cdf2ba60ca79b8a58b9592acd2d6c8",
".git/objects/34/d1d12e0c6868f18752f57e0a698403aa73c359": "629ef6561cb034d4c3f43a9e1e6966af",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/b5/01c2ae9c06e2ec714eb916d0f8e7e80c2b2c9e": "b53e32fe3ff165340a4149b56d87df6e",
".git/objects/b5/b8286791d450f85c566ba0bac7d61ed18bd222": "073a4e67516d00d2454d216b7178992e",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/ac/91cef654e95d0c10ce02c896fe99135ea13b6e": "2d3edcc47ea5edadd0f26d5e39c32a31",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d0/cf5be63f1aa9fdf6cdf6d037c957b13a293b79": "9fce58d3cf8ab23b754abd02438f77e2",
".git/objects/b3/5d396476ebee3587288d93224e108c6003e0e6": "2ba0240897771e375da3fcbc2ce6f5b6",
".git/objects/df/8d623c5a3bf705758c41116875805f4fe9cbc4": "fe52f0020c78b0e0087baa567e349018",
".git/objects/a2/057abd5f5c3fcaf0bb569bc224cef59cbe34ce": "a8c10de01d55fd26d0712c1e9b0f9056",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/64960135d210e22b7a3001516feda092454987": "a3a088d5d4487cb170fe7dd90205c631",
".git/objects/e5/8db332b5a6bcc43770395c0e7eb78dce33fd64": "9276ca247a723be3216c21fd601da639",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/c4e50174fff8b6c751c7f1cf9fbf2e56b44a38": "87db59ab9585aa679cf2ffc44b9576c0",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fe/92a746934e01f4b01924f5b13fbb45608065fe": "5fe4686184ad335356eda2fc424ba911",
".git/objects/4e/dfcce2e33eb706ba17fc1fe407a8ee76e08be5": "9c202ce438251010a6575e70ed5ddd51",
".git/objects/27/598189f9b6d649554a258075eca0245a74d3f6": "0f6ace5e4f14544f54eb2e09511a4e5e",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/1f/857a13785b2a0fb8b0cad69921e95a77334421": "ba4be48bfd53e4f3bb1b58561861d401",
".git/objects/87/7c668264fbecf1ad64a2fef43dea26db4591b3": "0d0514b5d9ad63eb4446d30876fd29a2",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/c23f797d39f2abc88d644c7a4d1ad898c21bf9": "3ad8aa1c9eeb145af39558889ebb467a",
".git/objects/72/40ae3641fb8919e52e969fc5fa744b36b0290c": "0f8e0f65d5f3ddf5a9dff6ac04a226c1",
".git/objects/44/ded7eba217d9c41973a32d83484943a26af9e6": "48b32d5af4df30b573ded71189c740a4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/4e647818cd5078703f5d0d02f5032a3406ac7a": "338bea2d1f87c053de59256e8ff355c5",
".git/objects/07/8996d8b7da4496115acda2a1fd13000ee70697": "bc6b55dca81f58d1dc3c80c707daa1e6",
".git/objects/6e/47e05523807a02e336cb90d678a75ec467be69": "de1ba8c96aac9b9355dc068b43478dc1",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/96/be5f1a73fb7a9ef38ff7d20549cb9329963bc9": "6efcbacedefd94331719f8c5ce168632",
".git/objects/3f/62b52aeda24431294effc909c472db1d3ed63e": "d17c4570d2a29e148a6b466b4eeb3302",
".git/objects/0a/8f276e4a1ca172e443618ba54f71bf440a8607": "6b3a8021330db167e393228730ce5692",
".git/objects/0a/dca45e0b1480d8bc33365ee4e0e9bf669641ae": "6687767e4d703c08ab12b4c559be651f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/8cf0b0c2ca13a984207c532b02bc167f28ac1a": "97e162bea46b49c12fdf480cf84d42c0",
".git/objects/dd/0148aeef5342bfc1d3982accfe2fc162257257": "4208baa1e3cf45dd0a4063caad16f66f",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/dc/b3d1743ef4947ffef83bb38af89777ebc5e88a": "bf2ff11ffdf689edad73b4bb2d025856",
".git/objects/d5/a964b94d04232cec807eb67b90da51593059e7": "024368bd8a20d5d7a9344191c604473e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/77b93f8f1b659fa2e1fedffcb8aac7edaf8de5": "649af4823b32f1d561c25a6e154048b4",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/a6/df35ae8183ba143ec42c08f6bf708d5caf81cc": "a0ec7cc47cf8d6d4863a41751766388f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/e8/ba3b8046324ad0420d13bfc6612657a4ef1fc8": "96861c596119195031a6fbd207b59a26",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/70/ad64980fb556319d7b39b23f1a10957a14c5a6": "9e55df48caa571f234ca19da18cd3949",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/71/550cfd9a287256710dc858a28fbd048ea76d10": "80b02ca024a62aa90efaf59228f59ca4",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/78/0b8fafa9aced82d4a2a23bdd0597c1f4b439bb": "deed92ee428c82aa9aec34c07474f72d",
".git/objects/8b/62fd61c211949b83036ef52f756b9d6d55a1b2": "75c12cba6c114fddbc54cde78c6d17bc",
".git/objects/7f/89c06afa28a6a89557812b5eb86c5ff9045678": "1cba53b13958a779d38825d4f0234f09",
".git/objects/22/5fd101b345b97864752da32fe5e0fbf7d94781": "0fa35c0c96bb61ba1fe4e557756a6ebf",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ee4b4a6e544daf3d2bf95988b1db06d5",
".git/logs/refs/heads/main": "3b7e3d58d2730f53b50e813a4b430981",
".git/logs/refs/remotes/origin/main": "922b70088f13443d29c15ca22314ad3f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "106f6b735528503d994ba5e714621084",
".git/refs/remotes/origin/main": "106f6b735528503d994ba5e714621084",
".git/index": "04243acdc3302d8cda7c64d4df08bc1e",
".git/COMMIT_EDITMSG": "f2ace40fc91bbd982722cec17c8f13e1",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "a9faeaccfcdc82059978d72f5f3161ec",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "eec3a78990cffea95a8e978a6ae55ca6",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
