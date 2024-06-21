'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c99abf40ef6b7c41520986e1d26af0a3",
".git/config": "a5d0c11aad5651daf3670ea3137f6197",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "953d94111c1062fe364b7974c6c2a822",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e4ee163eba8674eedaba61c394ce0800",
".git/logs/refs/heads/main": "1696aa5155bc76ab88489624e24aeaf0",
".git/logs/refs/remotes/origin/main": "c668623c834c300bb5dc6df319dfb28c",
".git/objects/07/266ae18b44ea06b673b8abed76fc056864585f": "e7f23a93efed6438d42545cd021fbf18",
".git/objects/07/2d7c098201e41d19249b8c9366c38be5d3a43e": "8ffff375df5a870ef76e66301c8d9830",
".git/objects/07/c318db127402bb27c5c802cfffecb3a6bcc271": "3f2787ce8b8246f0b7231e610c798826",
".git/objects/0b/cb3d891e93dc387bf568ad3654df0628966b67": "a4888b8f5cac7df5f6760703edabde5b",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/02cb6b36b72a0b0ee2f83298c26d9be01624fd": "833bcb8697b3655ccfe7e31438aef495",
".git/objects/25/13df62461aa9c3c0aed024405fc2c5557aa46b": "a74b123bf2fa5920d260bfd7f65998e3",
".git/objects/25/604331e4c11e096d542adddb18cd73607c1138": "801391d79c1263c3ccb5bd38a73513af",
".git/objects/2c/b1728201f25a714264bc4d0cf1d3065b4feebd": "11b8e18ba03c517ef6b2709ef275728b",
".git/objects/38/05a4a4243fb0ad7981cdd87bd86e85bc5ccefd": "5add32163815f83860c46368a42914da",
".git/objects/48/cdb22818fb2e9f14316deb69151b456f4211e9": "9f9b985d07fc097ca2637873b48bca6a",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/510f3e33c6c35bfdf4ff5c730e423820a5177a": "d6be8c459bd261956d4c34d75143c05e",
".git/objects/4f/6d4193660b0967d1ce155da37d04353a438f56": "b5e935e90fbb6ea71214a6422a9848ab",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5a/5465ef141b356d76deccb9196cd72e698bab5c": "c4c6f61290d362e2f0e13dc0a5006dbb",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/69/6b152cdf6955c012f9080181c990247f38942b": "81fba7cd474bc63e83f9d7cc56832da9",
".git/objects/6f/f40b39cde1f86ac29e2d5a120f8de7850d789e": "00ade6063f76dc09b50fa67417facd7f",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/e5511cc8318de3a4fdb4682b9c7cd20d588cfc": "f1f9f384af6214209881ee62581bf1f6",
".git/objects/74/c1a42b253d415990618e5f284f9244754a53b1": "ef04dee17c2ec2a06399e9fa6fc26c93",
".git/objects/84/1d31d038c41be0d39f02df191c2a07b0205571": "8f308dab8ca81d5f10ccdd1d2aab3076",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/56255a4d28bfcd2e0246f84f0bf1890df38673": "d78403b30d2d76f4b7953a87959f12a4",
".git/objects/91/bfa8397e81e077c4702e9c860c76527505b4e3": "d94fe1f0f909dc99ef80840809d4046e",
".git/objects/93/37e6ecdec144c8cbdbe71b1cfb67a8cd3b7053": "e1ddd62e5be2c20a7e24513ddbaf6309",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/98/50c0b764241ff0fc1647da96513b69044a52fd": "2078053bd379fc308f38080e74a11c12",
".git/objects/99/b640dff452ed31e2758ce546a734e5b8827817": "1be9347bbdb95fee892483920808537e",
".git/objects/a0/9c1c9f748ec074f5b3c61cf70baae53daf09e4": "ed96079889445c553c6b0cf5e7882cd5",
".git/objects/ad/ed26944175650b04cda44b2a9fb623ef31ccaa": "760004bb01c082b30fec667cf5e8b54a",
".git/objects/af/6587447fab1c86df418e470e764ef19f4ffb20": "0ae938291c208efe0921836ddc4c53e2",
".git/objects/b1/3ba2c76e05f8951ed4f29dfe1ef85efcc7c2d5": "1cb8e81a8e26359fc80a86bb04670073",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/96d1462b5dcf777aad6f3669cc7466796eb9dd": "4683c5edaa2308106b1c701a6fc00cc6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d0/2aad290509a55e1ebca9739540c1fad7c9f4d1": "b8cc7c67fd5055d1fbd4e23b3fd7c8c9",
".git/objects/d0/489c54b95d5279dcfd126e2e1ab114b2abe136": "bff89e2167dc0f5d0c5e8ab245aba61a",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/eed3bafeec04d272839f75ed90109b49ab115d": "f9d2eec9668e1ad249fc463e441c968c",
".git/objects/e0/2a47f1991fe00292a49342dde88832e216b2c4": "86494f0ad98290b3d4f9bd88e315e550",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/92060533e12ac923095ba8999551c5573e8841": "667caa08a8d12f7e648bf1cd2b2fc835",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/refs/heads/main": "c68af5a22248186e046a719bb9230667",
".git/refs/remotes/origin/main": "c68af5a22248186e046a719bb9230667",
"assets/AssetManifest.bin": "c3b706c211c863ae4c938ea1b9e6b0b1",
"assets/AssetManifest.bin.json": "96cc8c20ea22726d2044612e8b2b26f8",
"assets/AssetManifest.json": "5e7ce6f4c873df315847be629ec36bd8",
"assets/assets/icons/close.png": "ebecf92f6b620ec6d03f8e8c34627eee",
"assets/assets/icons/home.png": "acfe42d4c73e5d25ba3d030b981bf5f2",
"assets/assets/icons/info.png": "c5c9c2639d09a6d815415f0cc01e7e7f",
"assets/assets/icons/pause.png": "4e3b919581ae0bb5913cee7111500e6f",
"assets/assets/icons/play.png": "0d50b25bc975211b98f2b9e867d81c89",
"assets/assets/icons/redo.png": "243baabf76448acc7d073ca511e8788f",
"assets/assets/icons/stack.png": "38f58a5a78b9a93b7974831030bd9f34",
"assets/assets/illustrations/player_chill.png": "240f99971cdc81ad668f0eaffc23f1e2",
"assets/assets/illustrations/player_cool.png": "b5ff718f195e7ccf266a0a6b9bb8a619",
"assets/assets/illustrations/player_excited.png": "6fed66803f4f490bc6ef91199970f981",
"assets/assets/illustrations/player_serious.png": "d758909547d171c0349d16406028baf9",
"assets/FontManifest.json": "ab3967433a2a8b661fb2c3aa83272f36",
"assets/fonts/array_wide.otf": "a3e2515d1b930b822ca089bf75d0cf90",
"assets/fonts/dm_sans_medium.ttf": "2dd767322ccc760c0c31d6a900b9d3b2",
"assets/fonts/dm_sans_regular.ttf": "916f3ae325c2bcd71bec9b469c6a6aa0",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "152f235616c63e029696b2f06f626825",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "0410763221fdaad1ced4c3a9ef4ef70c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "414c12698c286d92702a006145cf9651",
"/": "414c12698c286d92702a006145cf9651",
"main.dart.js": "7652c284185815f46f21a0d64090ec55",
"manifest.json": "4bb786db6df81a3aa392f8eb2733d59f",
"version.json": "a9545f40dfa73ffcdff9b15f37549e78"};
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
