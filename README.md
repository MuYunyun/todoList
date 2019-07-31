### How to write your own redux

<a href="http://MuYunyun.github.io/todoList" target="\_blank">效果展示</a>

该 demo 已被整合到 [reactSPA](https://github.com/MuYunyun/reactSPA), [在线展示](http://muyunyun.cn/reactSPA)。这个项目中对 redux 的使用作了一个比较完整的示范。

```js
$ git clone https://github.com/MuYunyun/todoList.git
cd todoList
yarn
yarn start
```

> redux 使用见分支 [feature/redux](https://github.com/MuYunyun/todoList/tree/feature/redux)

### 使用 React Hooks 替代 Redux

在 React 16.8 版本之后, 如果`不是特别复杂`的业务场景, 可以使用 React 提供的 `useContext、useReducer` 实现自定义简化版的 redux, 可见该项目 master 分支。

> 特别复杂的场景暂时不建议使用此模式, 原因见 [react-redux v7 回退到订阅的原因](https://github.com/reduxjs/react-redux/issues/1177)

### 相关链接

* [redux middleware 源码分析](https://github.com/MuYunyun/blog/issues/15)
* [如何写一个 redux](https://github.com/MuYunyun/blog/blob/master/React/%E7%9B%B8%E5%85%B3%E6%8A%80%E6%9C%AF%E6%A0%88/Redux%E4%B8%8EMobx%E9%80%82%E7%94%A8%E5%9C%BA%E6%99%AF.md)
