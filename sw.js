// Guarda el juego y los memes para jugar sin internet.
const CACHE = "islas-v1";
const FILES = [
 "./",
 "index.html",
 "manifest.webmanifest",
 "icon-192.png",
 "icon-512.png",
 "memes/bien/bien01.mp4",
 "memes/bien/bien02.mp4",
 "memes/bien/bien03.mp4",
 "memes/bien/bien04.mp4",
 "memes/bien/bien05.mp4",
 "memes/bien/bien06.mp4",
 "memes/bien/bien07.mp4",
 "memes/bien/bien08.mp4",
 "memes/bien/bien09.mp4",
 "memes/bien/bien10.mp4",
 "memes/bien/bien11.mp4",
 "memes/bien/bien12.mp4",
 "memes/bien/bien13.mp4",
 "memes/bien/bien14.mp4",
 "memes/bien/bien15.mp4",
 "memes/bien/bien16.mp4",
 "memes/bien/bien17.mp4",
 "memes/bien/bien18.mp4",
 "memes/bien/bien19.mp4",
 "memes/mal/mal01.mp4",
 "memes/mal/mal02.mp4",
 "memes/mal/mal03.mp4",
 "memes/mal/mal04.mp4",
 "memes/mal/mal05.mp4",
 "memes/mal/mal06.mp4",
 "memes/mal/mal07.mp4",
 "memes/mal/mal08.mp4",
 "memes/mal/mal09.mp4",
 "memes/mal/mal10.mp4",
 "memes/mal/mal11.mp4",
 "memes/mal/mal12.mp4",
 "memes/mal/mal13.mp4",
 "memes/mal/mal14.mp4",
 "memes/mal/mal15.mp4",
 "memes/mal/mal16.mp4",
 "memes/mal/mal17.mp4"
];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(hit => hit || fetch(e.request)));
});
