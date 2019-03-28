const cacheName = 'v1';

// 28-03-2018 note to self
// cacheAssets consists of the url requests from the router!! It doesn't use ejs templates etc 
const cacheAssets = [
    '/',
    '/dist/css/style.css',
    '/assets/obaIMG2.jpeg'
    
    // 'detail.ejs',
    // '404.ejs',
    // 'about.ejs',
    // 'style.css'
];

// Service Worker - Caching
self.addEventListener('install', (event => {
    console.log('installing service worker');
    event.waitUntil(
        caches
        .open(cacheName)
        .then(cache => {
            console.log('Service Worker: Caching Files');
            cache.addAll(cacheAssets);
        })
        .then(() => self.skipWaiting())
    )
}));


self.addEventListener('activate', (event => {
    console.log('activating service worker');
    // Remove unwanted Caches 

    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(cacheNames.map(cache => {
                if (cache !== cacheName) {
                    console.log('Service Worker: Clearing old Cache')
                    return caches.delete(cache);
                }
            }))
        })
    )
}))



// Serve Files When offline
self.addEventListener('fetch', event =>{
    console.log('Service Worker: Fetching');
    event.respondWith(fetch(event.request)
    .catch(()=> caches.match(event.request)))
})