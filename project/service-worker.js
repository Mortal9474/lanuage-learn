// service-worker.js
// PWA 离线缓存：首次访问时缓存核心文件

const CACHE_NAME = "lang-app-v1";

// 首次安装时缓存的文件列表
const CORE_FILES = [
  "./",
  "./index.html",
  "./css/style.css",
  "./js/app.js",
  "./js/loader.js",
  "./js/espeak.js",
  "./js/tts.js",
  "./js/canvas.js",
  "./js/quiz.js",
  "./js/annotation.js",
  "./js/theme.js",
  "./data/config.js",
  "./data/languages.js",
  "./data/themes.js"
];

// 安装：缓存核心文件
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE_FILES))
      .then(() => self.skipWaiting())
      .catch(err => console.warn("SW 缓存失败", err))
  );
});

// 激活：清理旧缓存
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

// 请求：优先缓存，离线可访问
self.addEventListener("fetch", (e) => {
  // 只处理同源 GET 请求
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(res => {
        // 成功的资源也放进缓存
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        }
        return res;
      }).catch(() => caches.match("./index.html"));
    })
  );
});