self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("buscard").then(cache => {
      return cache.addAll([
        "index.html",
        "conductor.html",
        "passenger.html",
        "admin.html"
      ]);
    })
  );
});
