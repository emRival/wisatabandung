'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6363997057dc79bca0d08c2179d56cea",
"version.json": "a913e76340a4eadc959a619798de15a4",
"index.html": "5649c246f0df598f559454451ab71a35",
"/": "5649c246f0df598f559454451ab71a35",
"main.dart.js": "fc1268cb467cc8041f13401603201f5d",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".github/workflows/web.yml": "7fbc06db3654760a7848ff7b78a74c58",
"manifest.json": "172361acef0fe3da3e7351a63483770c",
".git/config": "331c0f47e8c5b982b047a514b505980a",
".git/objects/59/03df43b9fa1cc8abc9304ef07c2aa2ee1cb6e0": "bcc353d8ee0226d8591511462eecf6b4",
".git/objects/0c/57af2afd99c5f65000e1501595c82d25781348": "b2e11d8705f6cf5507a91c1ff88590e4",
".git/objects/68/893addaa6c3eeeb09f76f7d9c2796dcaa57a2c": "4cc2558c9e12addcb402656321450f48",
".git/objects/57/a75b5adc70e0c0a03492122762596f4f59e7ed": "fb8e41b797cc37adb4e50cfb7a2f8a7a",
".git/objects/57/7637f537081cf83a7b9b8e6e873177ed937f8c": "84952f0b32156fc57ec4fab01243ea17",
".git/objects/3d/47577e0c09679eac1834583668e234dfdfb493": "47639982fb1631a08dd4c3c1d05d1a8c",
".git/objects/3d/b0deb2c4196b013d5ed0fae7ab24dc0e9dd21c": "bf07f2b1356933d5ff50528a57ef9abb",
".git/objects/0e/4ef10e00ff3c3de411cc19218df7b90f67a914": "25c387b6e47ffae4dc74ed2793d0bc6a",
".git/objects/9d/de5afef35b411c1d4c68cf1359bf51319ee362": "6ad74765c10b9618c2f145ba58193b8e",
".git/objects/9c/a3355cf8aebb9632b7d8d1ae5345987e508e26": "9e2b3df9921b8a315cfecd7dfddce4ad",
".git/objects/a4/963d98d2ee6eb89ef60447271321af3b2a17f3": "18e2356869ad223839dfac67a5c05398",
".git/objects/d9/da3fd2d29bee7e0ec794eed448bde3bde20fe8": "ed310b1af04f0c79482b60c448199e6c",
".git/objects/d7/0afe254830b9cc5f017e5859ed8b43f79377b7": "db2bd71f2f2253beb15e11dffd0b0c8e",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/b3/8a94f5c56abc343338993da2f091ab4039844a": "a20265e7cababfbd342e784e514f73ef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/24ce54f6631d8f0d88ddf0c40d100ef2a09016": "2ee84b048d155f8ccf80eb4ffb4da801",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/32c6bd15a6ee02e3c5e3767809127b64cb489a": "3dc082d04cd35746934b753a8f24348d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e3/e14556160bd23df8608a20b3902ef7adb221d5": "6a40c22a02cd05534f18d587e69943c6",
".git/objects/c6/8a613d6b55768f20361b2254e0f8bd8b02127a": "5aad22c20d1c0832c6b2e832c2413f22",
".git/objects/ec/10de6df8e909dad38de1ac0d9facf79de8fc0a": "d55fb86ede68001317e8dbb0a98c773f",
".git/objects/4b/b5ce34dbc2318b6404a6ba2a4c0879cb3d49df": "06c46ce326be5cdf34f0b4105d256d03",
".git/objects/16/50be0eb2e5f86677aa220fbb03f1ab3c04d937": "dc2272daa4830f2d06a7e5f0b25b1ce6",
".git/objects/89/63627d723b94e0526ef060a2980199458f9adb": "5882a30c8e818eec2d5aede03ad49f93",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/74/0d0b0806304ae58386c6a226b656115265015f": "17b115a3efca1deac9198fa7f5805925",
".git/objects/28/b0fbfe990be80d1b1c4735a40627317650f40e": "4fe5787de925d14ee3a942aa5514a973",
".git/objects/7b/085ff122c607cc0b87055025912184f0ed7501": "a335ad821fee27834bf3fed68661b9b1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/43/4f1b9bf564cab9065d8b33580a1f77a02b0eba": "deb85873581ec30442f7230633cb4c66",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/36/71cf762e10ffc4acb951641a95015617aeea8d": "fb5cd8f260a092382e044fa284474ad2",
".git/objects/5c/00c87291f929d79fbc55002dbe9a5b24a96696": "fe3a62a61cdaf089d5fb0a7c2858e8ce",
".git/objects/5d/9e55b4a2f9176568d113a2cfa651d206ed9f36": "77f94a0c5a85b8f9539afea3910084d7",
".git/objects/91/6643a391092f47c14126778c9be41c6ec83620": "38e8e09f4160e38ca2602793c6d34124",
".git/objects/5e/9792d6d3d97eec4632035759a2bd4439642ad6": "42b32f8ea90b63f13c4b679bb9d1c8a9",
".git/objects/08/5a7c6af0ca443d64b4c1200d0910a0c9a89046": "717143399bcfbfa66507826cdd2b655d",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/06/61f4e59bb25dadb137a658dfd4cb3b334d56fc": "d498358effd6543b9fee6b1c5d1540fc",
".git/objects/39/8a268d0c2cbd1421b978c7007573f1368dd01d": "2cbb48fdc857a0ae2ea6d6ba555e7e84",
".git/objects/99/8342744f7186146e10a6842688091ee4a8a1a2": "b6be381a955bbcd1d64ee1ccdbfdcbc9",
".git/objects/55/547703dea83fe303f715c43cf2f5385c05bad9": "57418f7792514b7c538af9d3e44d7188",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/59cf5a4e384cea3a543c7e4be23cbd432611bf": "9054a787a20f10edd7049d3862c79e3d",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/88a70ed73f38f969fc0a537419ab8a017333d7": "10085cdc83f1cc38ed5ed743907493e2",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/dd/27b314901de5be079037d890a5339f61ab4430": "a2a4cbc8abe99faf3292f92fad078deb",
".git/objects/b6/825a7bd6b47fb9ff01fe45287e480029d1d9cb": "4e2338a662d25b741f955c0009579cc7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/f6b4710b2ea666f320d14bd39f242bfa815849": "86903d21663d5f8a22ae55a23b9274d7",
".git/objects/b9/7b00c4b10383f11b1f3ac20d4ec631230c4855": "b76ba0f6ec5885df7bc5e253bafeabc3",
".git/objects/fa/9ba5d36f89cebbe5402f1567d5bef1bfff527a": "bfea13fcfc25a6c2bfc2ad96e6b34a10",
".git/objects/c5/16baa3d9584b429beb7d2c635d911466db6202": "283ca11064cb32652f5c753f77ad114e",
".git/objects/f1/dcdb3d6e6704be0786e3524fc33e3be948a254": "5f4f42dd298a0e20689a81bdea08cf70",
".git/objects/ce/5419dc652c1acd96fb07b3e4a80e6ba8a2d8ce": "a8822ecf11937b5ed44f22bcf5be21a7",
".git/objects/46/b5da5cec8c2232bcb52415d3903da8b89f41c7": "1505171308e1b156e3dc2df94cc5aa72",
".git/objects/2d/32dfaccd5d2397d944999a8cd08ef3f6f16c90": "cff43af665d01ea37dbdd1a942efda80",
".git/objects/1b/9b47bc634891b1a14f77b4fced6c02890a01ab": "1ab87a131440560aa22547227c0b0887",
".git/objects/77/8489118bb07af4f5bb7eed1b92ef664d8cf128": "c718e1a319efa9db2ec9793744ce01fb",
".git/objects/48/2a8cfdb029493db44c502f18fe387be2343836": "ad09e35aea53ab89454b02d5fe0478c4",
".git/objects/84/250d8846dab4f64a077e05818ffc80d772bfee": "5078a0be35852253005f6e4cc71802d1",
".git/objects/23/2b052ea0f0925f377a6b0bd917b46c7ca8f637": "3f7856a8f57944dd0574430dc40c99cb",
".git/objects/12/4a9cc150eb40d7fe48f86e09dec56957124027": "5d1a023dbdfbd9dfde799be71c114abb",
".git/objects/8c/b8ffe81ab2e929376c5861403b4f33ab5cccca": "68e49be45dfcafd01d5575cfe1f9ace4",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/78/452c15f0d14e4f5e8a71596886528e736fc2df": "7dc07dd6643e78678faf751ad84cca40",
".git/objects/22/a4a3fb11cf9770ac6cf05a12ce5199673ed625": "19027831984962db9cee764fdd53758a",
".git/objects/22/b0faffe6a56b535557a343ad33bbd19854eb22": "4b82b31e2cae4cb7784cfa889b2011bb",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1d6abb43e592b6bfefe6b60eaf97494b",
".git/logs/refs/heads/main": "0d8adaed4cfa1b66f5b55a5aa0747beb",
".git/logs/refs/remotes/origin/main": "4c8fc25b9489b62239a254b7da743ced",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
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
".git/refs/heads/main": "01b20298d173ed050505c4a82b006c0a",
".git/refs/remotes/origin/main": "01b20298d173ed050505c4a82b006c0a",
".git/index": "ec25f0c8c6baa9ab404bf1face8bc681",
".git/COMMIT_EDITMSG": "5d51db2da0e9df51829e476d05f56045",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "8d22652233c670d1b3639e183a8eedd1",
"assets/NOTICES": "dfde30ec1ed8eeea856323d1841aaec0",
"assets/FontManifest.json": "a8c770d8f9e379cd1b9205f637b326cf",
"assets/AssetManifest.bin.json": "aa94e3998862db7190ef6b87a2766f21",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "38b575c3bd0e965018ee2c9e5f7d9a69",
"assets/fonts/Oswald/Oswald-Regular.ttf": "b299a657c45aa257f1458b327f491bfb",
"assets/fonts/NewAmsterdam/NewAmsterdam-Regular.ttf": "f69c54df5881d97de5eac6d7a78024b4",
"assets/fonts/MaterialIcons-Regular.otf": "184ce9ff005536055a2df3e08521174d",
"assets/assets/images/category_icon.png": "dd0b2fb64f4aca63eeb123d9bfd692bb",
"assets/assets/images/ranca-upas.jpg": "18ec585026e0af3f21db6bb7aaccf2ce",
"assets/assets/images/kawah-putih.jpg": "a2371babfc2a47b7f07cd21c70c4d7c1",
"assets/assets/images/bosscha.jpg": "256600646651e638361646aa2b1b8388",
"assets/assets/images/splash_pic.jpg": "24ced38fbe411986412939e650504287",
"assets/assets/images/museum-geologi.jpg": "feed43fb551fad21fd0b4f40e061c6d3",
"assets/assets/images/img1.jpg": "176f769b387176ab61c814cc68275e19",
"assets/assets/images/taman-film.jpg": "3c440fc167e79c459af92e62c9b3b400",
"assets/assets/images/farm-house.jpg": "3190d0f8d8ad8a5bd96a2e206fb96d06",
"assets/assets/images/floating-market.png": "3825da6a681989426fa55d7493abcf62",
"assets/assets/images/stone-garden.jpg": "baece3780756a2cb8b58e3531201f6e3",
"assets/assets/images/jalan-asia-afrika.jpg": "bec6a2d8b740356d2dfbb1de0fdc3729",
"canvaskit/skwasm.js": "e95d3c5713624a52bf0509ccb24a6124",
"canvaskit/skwasm.js.symbols": "0b8baeff2b4484d2d6be67a7e082f9db",
"canvaskit/canvaskit.js.symbols": "9a39ab8aa3d828142935da9efe99b3a2",
"canvaskit/skwasm.wasm": "ee4afa1790abb925360fd9519c5194f7",
"canvaskit/chromium/canvaskit.js.symbols": "43ec75ce562f82c5dc5be1a738d87e37",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "3909da2fbccad1a2e4a1f42750d24977",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "afdcccf150b5cba228e27c813548b842",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
