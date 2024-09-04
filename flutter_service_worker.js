'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "01801e9df75e4551ffcf6c9d9c9d81ca",
"version.json": "a913e76340a4eadc959a619798de15a4",
"index.html": "9d51fdef9944ce8fb0bd5a15773cbd9a",
"/": "9d51fdef9944ce8fb0bd5a15773cbd9a",
"main.dart.js": "fc1268cb467cc8041f13401603201f5d",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "172361acef0fe3da3e7351a63483770c",
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
