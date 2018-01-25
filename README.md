[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/zeit/next.js/tree/master/examples/with-kea)

# 8win SSR FE framework

## Tech Feature

- [x] [`next.js`](https://zeit.co/blog/next4)  A small framework for server-rendered universal JavaScript webapps
- [x] [`koa`](http://koajs.com/) Node server we based on
- [x] [`redux-saga`](https://redux-saga.js.org/) A library that aims to make application side effects
- [x] [`PWA`](https://developers.google.com/web/progressive-web-apps/) A new way to deliver amazing user experiences on the web.
- [x] [`sw-precache-webpack-plugin`](https://github.com/goldhand/sw-precache-webpack-plugin) A webpack plugin for using service workers to cache your external project dependencies

## Todo
- [ ] [`workbox-webpack-plugin`](https://developers.google.com/web/tools/workbox/) New generation of sw template.



### How To Use

Node version 8.2+

``` bash
git clone https://link/of/this/git/repo
yarn
// dev( sw cache not working )
npm run dev
// prod( active pwa mode )
npm run build
npm start
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```
