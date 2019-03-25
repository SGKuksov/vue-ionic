# vue-ionic

## Настройка ionic

1. инициализируем ionic

```bash
ionic init
```

```json ionic.config.json
{
  "name": "vueApp",
  "integrations": {
    "capacitor": {}
  },
  "type": "custom"
}
```

2. связываем приложение с app flow

```bash
ionic link
```

## Добавить компоненты ionic

```html index.html
<link
  href="https://unpkg.com/@ionic/core@4.1.2/css/ionic.bundle.css"
  rel="stylesheet"
/>
```

```js main.js
import Ionic from "@ionic/vue";
Vue.use(Ionic);
```

## Настройка слежения

Добавить задачу для запуска слежения

```json package.json
{
  "ionic:serve": "vue-cli-service serve"
}
```

## Настройка сборки

Добавить задачу на сборку vue из www/

```json package.json
{
  "ionic:build": "vue-cli-service build"
}
```

## Настройка и запуск capacitor

```json capacitor.config.json
{
  "appId": "io.ionic.starter.test2.funcfunc",
  "appName": "vueApp",
  "bundledWebRuntime": false,
  "webDir": "dist"
}
```

```bash
ionic capacitor add ios
ionic capacitor open ios
ionic capacitor copy ios
```

## Комментарии

1. Не работает двойное связывание данных v-model
Вместо него

```html
<ion-checkbox
  slot="end"
  @input="entry.checked = $event.target.value"
  :value="entry.isChecked"
></ion-checkbox>
```

2. Подключение изображений через ion-img
```html
<ion-img alt="Vue logo" :src="require('@/assets/logo.png')"></ion-img>
```


## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Run your end-to-end tests

```
npm run test:e2e
```

### Run your unit tests

```
npm run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
