"use strict";var precacheConfig=[["/aaatelier_site/index.html","f4e8d37789e6bee03069548c893d6b08"],["/aaatelier_site/static/css/main.7a412e14.css","41f414e2f4fa8bf09066261665ba1c13"],["/aaatelier_site/static/js/main.3c97aeb6.js","9063aabbb813d90bbb51014c4d35d8f4"],["/aaatelier_site/static/media/01.fda41837.png","fda41837e86084fd5e5987be3f349e1a"],["/aaatelier_site/static/media/03.2f63e7db.png","2f63e7db0cc9870106d6c31f546d6b8b"],["/aaatelier_site/static/media/03.d552acef.png","d552acef21adf5eb8271ee2bbcf52d08"],["/aaatelier_site/static/media/04.709ca36b.png","709ca36b4a0940b66ec0c3b0e6ec93cb"],["/aaatelier_site/static/media/04.f027ba12.png","f027ba12a59f94621cdc01a6bf212929"],["/aaatelier_site/static/media/05.f1d989a4.png","f1d989a4a6372a46967737b2ed7024e5"],["/aaatelier_site/static/media/icon_email.6a2b901b.svg","6a2b901b3bec75a7b4aada71235b7438"],["/aaatelier_site/static/media/icon_facebook.65d992fd.svg","65d992fd37ddf414b9659ea303e77688"],["/aaatelier_site/static/media/icon_insta.3434234b.svg","3434234ba80b0f319d5f5fa0af93b1fb"],["/aaatelier_site/static/media/icon_kakao.32b6ff54.svg","32b6ff541d77680a8df3b8dceb6e3c7f"],["/aaatelier_site/static/media/logo_white.0cfd295d.svg","0cfd295d3f8953b2ea677b38a6e410fc"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/aaatelier_site/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});