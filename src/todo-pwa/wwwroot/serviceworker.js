var cacheName = "static-cache-v1";
var filesToCache = [
    "css"
];

self.addEventListener("install", function(event) {
    console.log("[ServiceWorker] Installing");
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log("[ServiceWorker] Caching files");
            return cache.addAll(filesToCache)
        })
    )
});