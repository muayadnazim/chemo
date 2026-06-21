// ===== Service Worker - موسوعة الأدوية الكيمياوية =====
const CACHE_NAME = "chemo-cache-v1";

// Files to cache on install
const PRECACHE_URLS = [
    "index.html",
    "style.css",
    "app.js",
    "manifest.json",
    "icon-192.png",
    "icon-512.png",
    "https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&display=swap",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
];

// Install event - cache core files
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(PRECACHE_URLS);
        }).then(() => {
            return self.skipWaiting();
        })
    );
});

// Activate event - clean old caches
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        }).then(() => {
            return self.clients.claim();
        })
    );
});

// Fetch event - network first, fallback to cache
self.addEventListener("fetch", (event) => {
    // Skip non-GET requests
    if (event.request.method !== "GET") return;

    // Handle Google Fonts and Font Awesome from cache-first
    if (
        event.request.url.includes("fonts.googleapis.com") ||
        event.request.url.includes("fonts.gstatic.com") ||
        event.request.url.includes("cdnjs.cloudflare.com")
    ) {
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                return cachedResponse || fetch(event.request).then((response) => {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                    return response;
                });
            })
        );
        return;
    }

    // For our own files - network first, then cache
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                // If valid response, clone it and cache it
                if (response && response.status === 200 && response.type === "basic") {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                }
                return response;
            })
            .catch(() => {
                // If network fails, try cache
                return caches.match(event.request).then((cachedResponse) => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }
                    // If not in cache and offline, return offline page
                    if (event.request.mode === "navigate") {
                        return caches.match("index.html");
                    }
                    return new Response("", { status: 408, statusText: "No internet connection" });
                });
            })
    );
});
