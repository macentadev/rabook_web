'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "325a0d2d2e4bb4d4f2ce3f3ca9e3424c",
"index.html": "4a5990e8e88ab4eaf72be9693c760b7c",
"/": "4a5990e8e88ab4eaf72be9693c760b7c",
"main.dart.js": "4f7a212053d71b5a965435cecbfee392",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c8956308c785badab34a674c05aaa0b9",
"assets/AssetManifest.json": "5de3acb3cf22f8ee16929aa0992343ec",
"assets/NOTICES": "a284cc6cef03baefaeb589423a0f2b47",
"assets/FontManifest.json": "7fa850cc17663c3f74d68a8f45139030",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/readingnavbar/next.png": "dc3d69cfb111c5a1eb5a1799b137d5e3",
"assets/assets/readingnavbar/star.png": "a4260f85dd6ed4f6d284dafe682d715f",
"assets/assets/readingnavbar/play.png": "e84c8c16989630f94be88b376adc3663",
"assets/assets/readingnavbar/previous.png": "2418b745a9ba51a8c2cdf6ef69231cf0",
"assets/assets/story_publish.webp": "f94a1693e8a3528910d9fd0c68ad61f0",
"assets/assets/finishmonster.png": "aa26348a3872c9838bd5c5cd729daed7",
"assets/assets/leaderboard_header.svg": "02e4f2fa70c53fddd1416903f4b5875d",
"assets/assets/appbar/streak.png": "6a405f17e57fefcc04f37a38fb17486a",
"assets/assets/appbar/badge.png": "f2bc7c4aa609280c318cb665157bcf2c",
"assets/assets/correct.png": "04b780f293dcba29503f51e111cbcb34",
"assets/assets/correctleg.png": "92f0f1306a8b74926e57c512c06b47ab",
"assets/assets/g_logo.png": "68e6a9a8e6a973126c1a5d77cb67317a",
"assets/assets/time.png": "1c80329cfcf3f68f5eaea150a31f6441",
"assets/assets/nostories.png": "a6af9fe2c5e77d6d2ed316fa50facfbb",
"assets/assets/ratoon.png": "e3984e00dc2a848e59969a0dd62828bd",
"assets/assets/yesquiz.png": "7fc4a4b3d12eaa85496c9b0ee403bcfc",
"assets/assets/back_btn.png": "2addc48325440be96ce03a80919941cb",
"assets/assets/lock.png": "935deeb66b37183eb0dd77f1119371b8",
"assets/assets/ska.png": "6a6356398b129b8575bff76bb09ecb05",
"assets/assets/paywall.png": "baab3df10169414061989c94634bc639",
"assets/assets/reversewave.svg": "4c139edc64e5b3d094958f570cc42036",
"assets/assets/nostories.svg": "a565386cd23779bc2326b41595bf7357",
"assets/assets/applepay.json": "c2f89b795b286c72d371111ff5c222a1",
"assets/assets/tabbar/leader.png": "0e9657f6174043b68313c6b2c513ff5a",
"assets/assets/tabbar/writeinactive.png": "9f43592ab42794b3a72249b04d72e3d1",
"assets/assets/tabbar/profileinactive.png": "df56d59314b766e0778a7f8f6d539d09",
"assets/assets/tabbar/read.png": "e4ff195bfd4d2937c3ac193bda3d91f2",
"assets/assets/tabbar/stories.png": "5545e29ca68c39caca38ea3b9d465cae",
"assets/assets/tabbar/profile.png": "f1e6d7bfdbdd4f16d6f7808f3d977347",
"assets/assets/tabbar/readinactive.png": "731e3480010ba3a829e3b00a1539fffa",
"assets/assets/tabbar/write.png": "e1eeb3fb615f92e24a591553ae21c821",
"assets/assets/tabbar/storiesinactive.png": "3805e457b9ce6773b6009db62f09dc56",
"assets/assets/tabbar/leaderinactive.png": "8832d26fe98f455fef8d88da0636a3ae",
"assets/assets/children.png": "8ea2da497468a61f67dbe80c0ae580c0",
"assets/assets/quizQ.png": "cc4f8fe2c47f69694a50064c3b7fa0c2",
"assets/assets/onboard4.png": "348fc50340a5dab766b7e4d732f8ebc6",
"assets/assets/next_btn.png": "e19e149a52718242a54277be78b10543",
"assets/assets/splash.png": "ee9e0119c729f52d91d510bc234adb21",
"assets/assets/wrongleg.png": "7c82c06963aa21489d4fdae500eef0d9",
"assets/assets/onboard3.png": "84f004c4d8015382fb5c1e20ec05976d",
"assets/assets/paywalldirect.png": "9ed58fb9cd0233738662eba90fcf9e67",
"assets/assets/onboard2.png": "af2f99e07c64a6e14af093319ac6cf20",
"assets/assets/green_background_header.svg": "a77bbbbc2aaaf438aa129c79baa1cee8",
"assets/assets/onboard1.png": "f7a3663e9328eba40b9ba8d2613ded0c",
"assets/assets/green_background_header.png": "bd2721cb81116541a0b213d7ec162a11",
"assets/assets/playstore.png": "bf49ed443274ee1f269049569351f667",
"assets/assets/incorrect.png": "6b168afec1866f0b2d557b6d6602ca11",
"assets/assets/fonts/THICCCBOI-Bold.otf": "2f603a053f1c41caf779dca46ca2dfba",
"assets/assets/fonts/THICCCBOI-Regular.otf": "e1b18726b4a7950265bdb11605600fc9",
"assets/assets/wave.svg": "7d2161f559ee8260ec2c98385e34d5bb",
"assets/assets/gpay.json": "21bbd402313fa5d51228cd599302668d",
"assets/assets/streakbig.png": "7062a08df304a13cd035de96f59d415e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
