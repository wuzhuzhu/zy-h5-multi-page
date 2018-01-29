[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/zeit/next.js/tree/master/examples/with-kea)

# 8win SSR FE framework

## Tech Feature

- [x] [`next.js`](https://zeit.co/blog/next4)  A small framework for server-rendered universal JavaScript webapps
- [x] [`dynamic import`](https://github.com/zeit/next.js#dynamic-import)  <b>IMPORTANT</b> Always use dynamic import when use huge npm package.
- [x] [`styled css`](https://github.com/zeit/styled-jsx) Full, scoped and component-friendly CSS support for JSX
- [x] [`koa`](http://koajs.com/) Node server we based on
- [x] [`redux-saga`](https://redux-saga.js.org/) A library that aims to make application side effects
- [x] [`PWA`](https://developers.google.com/web/progressive-web-apps/) A new way to deliver amazing user experiences on the web.
- [x] [`sw-precache-webpack-plugin`](https://github.com/goldhand/sw-precache-webpack-plugin) A webpack plugin for using service workers to cache your external project dependencies
- [x] [`antd-mobile`](https://mobile.ant.design/index-cn) 一个基于 Preact / React / React Native 的 UI 组件库
- [x] [`ant-motion`](https://motion.ant.design/) Animation specification and components of Ant Design.
- [x] [`lottie`](react-lottie) A premire => js animation [`solution`](https://airbnb.design/lottie/) by Airbnb design.

## Todo
- [ ] [`workbox-webpack-plugin`](https://developers.google.com/web/tools/workbox/) New generation of sw template.

## Highlights

- 离线可浏览(PWA serviceworker)
- 可控的服务端渲染(`No SSR: true` 控制)
- 多页应用
- 多页共享的redux & redux-saga状态(/example 点击navigate测试)
- 动态加载模块(next/dynamic)
- 全局sass样式及theme变量
- antd-mobile组件库（动态引入main-layout后加载）
- ant-motion动效库(路由/relax/face-blindness查看示例)
- lottie自定义动画

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

#### Dynamic import 例子

/a.js Size: 100kb
``` javascript
import dynamic from "next/dynamic";

const B = dynamic(import('./b'))

export default () => <div><B /></div>
```

/b(1).js Size: 100kb, VeryLargePackage's Size: 1000kb
``` javascript
import dynamic from "next/dynamic";

const VeryLargePackage = dynamic(import('big-one'))

export default () => <div><VeryLargePackage /></div>
```

/b(2).js
``` javascript
import dynamic from "next/dynamic";

import VeryLargePackage from 'big-one'

export default () => <div><VeryLargePackage /></div>
```

```npm run build && npm start```之后
当路由加载了A组件后
b(1)方式将会异步加载一个100kb(b.js本身) 和另一个1000kb（npm package）
b(2)方式将会异步加载一个1100kb左右的整合文件
两种方式均不会在路由未加载A组件时，增大app.js(所有页面均会加载的默认js大小)
<b>IMPORTANT: </b>不要在Layout等通用组件加载过大的npm package.