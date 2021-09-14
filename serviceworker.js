const ProfileCache = "AnuragShuklaProfile"
const assets = [
  "/",
  "/index.html",
  "/profile.css",
  "/profile.js",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(ProfileCache).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})