# PC项目搭建模板

## 1. 介绍

基于React的项目搭建模板

## 2. Features

- 支持Typescript
- 支持React Redux
- 支持React Router
- 支持tslint
- 支持基于react-intl的国际化
- 支持less
- 使用了[react-app-rewired](https://github.com/timarney/react-app-rewired)和[customize-cra
](https://github.com/arackaf/customize-cra), 避免eject配置文件, 升级`webpack`, `babel`更方便, 只需要升级`react-scripts`即可
- 引入封装好的[ajax](https://gitlab.nie.netease.com/sedan/ajax), 简单的基于fetch的封装
- 引入[beehive组件库](https://gitlab.nie.netease.com/common-component-dev-group/beehive)
- 引入封装好的[redux-promise](https://gitlab.nie.netease.com/sedan/redux-promise), 一个支持`redux-thunk`和异步多状态的redux middware
- 引入封装好的[beehive-utils
](https://gitlab.nie.netease.com/sedan/beehive-utils), 封装了平时常用的一些方法

## 3. 使用

```sh
npm install
npm run start
```
