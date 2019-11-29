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

## 4. 目录

- messages: 多语言定义文件夹, 所有多语言定义均放在此文件夹, 可以在此文件夹下新建子文件夹
- translations: 运行`npm run i18n`之后生成的多语言配置文件, 默认中文, 会将`messages`下的内容转换成json文件放到'zh-CN.json'中. `en.json`也会生成对应的`key`, 内容自行填入, 所以不要手动修改`zh-CN.json`它是通过`messages`下的内容生成的.

## 5. 其他命令

```sh
# 1. lint
npm run lint
# 2. 增加或更新messages文件下的内容后要生成多语言文件
npm run i18n
# 3. auto fix tslint
npm run lint:fix
```

## 6. 其他

- 使用[husky](https://github.com/typicode/husky), 增加了`pre commit`的`npm run lint`的hook
- 全局的TS声明文件`src/react-app-env.d.ts`
