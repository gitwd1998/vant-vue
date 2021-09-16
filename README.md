# VANT-VUE

## 移动端调试面板插件vConsole

1. 安装 vconsole-webpack-plugin 插件

```
npm install vconsole-webpack-plugin --save-dev
```

2. 修改配置文件vue.config.js

```js
const vConsolePlugin = require('vconsole-webpack-plugin')

module.exports = {
  configureWebpack: config => {
    const debug = process.env.NODE_ENV !== 'production'
    let pluginsDev = [
      new vConsolePlugin({
        filter: [], // 需要过滤的入口文件
        enable: debug, // 生产环境不打开
      })
    ]
    config.plugins = [...config.plugins, ...pluginsDev]
  }
}
```

3. 在main.js文件中引入

```js
import Vue from 'vue'
import VConsole from 'vconsole'
const vConsole = new VConsole()
Vue.use(vConsole)
```

4. 日志类型

```js
console.log('foo'); // 白底黑字
console.info('bar'); // 白底紫字
console.debug('oh'); // 白底黄字
console.warn('foo'); // 黄底黄字
console.error('bar'); // 红底红字
```

5. 支持

```js
console.time('foo'); // 启动名为 foo 的计时器
console.timeEnd('foo'); // 停止 foo 计时器并输出经过的时间
```

6. 公共属性及方法

```js
//当前 vConsole 的版本号

vConsole.version

//显示 vConsole 主面板

vConsole.show()

//隐藏 vConsole 主面板

vConsole.hide()

//析构一个 vConsole 对象实例，并将 vConsole 面板从页面中移除。

var vConsole = new VConsole();

vConsole.destroy();

//显示 vConsole 的开关按钮。

vConsole.showSwitch()

//隐藏 vConsole 的开关按钮

vConsole.hideSwitch()

// vConsole配置项

vConsole.option

// 配置vConsole

vConsole.setOption('maxLogNumber', 5000);

vConsole.setOption({maxLogNumber: 5000});
```

7. vConsole配置项

| 属性 | 类型 | 可选 | 默认值 | 描述 |
| - | - | - | - | - |
| defaultPlugins | Array | √ | ['system', 'netword', 'element', 'storage'] | 初始化内置插件 | 
| onReady | Function | √ |   | 当vConsole完成初始化并加载完内置组件后触发 |
| onClearLog | Function | √ |   | 点击Log或者System面板的clear按钮后触发｜
| maxLogNumber | Number | √ | 1000 | 超出上限的日志会被清除 |
| disableLogScrolling | Boolean | √ |   | 当有新日志时面板打开后会自动滚动到底部 |
