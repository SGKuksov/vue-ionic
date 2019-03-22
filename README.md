# vue-ionic

## Настройка ionic

1. ionic init // создаем ionic.config.json
   1.1. name
   1.2. custom

2. ionic link // связываем приложение с app flow

## Добавить компоненты ionic

```html
<link
  href="https://unpkg.com/@ionic/core@4.1.2/css/ionic.bundle.css"
  rel="stylesheet"
/>
<script src="https://unpkg.com/@ionic/core@4.1.2/dist/ionic.js"></script>
```

## Настройка слежения

1. Добавить задачу для запуска
   "ionic:serve": "vue-cli-service serve",

## Настройка сборки

1. Добавить задачу на сборку vue в www
   "ionic:build": "vue-cli-service build",

## Настройка и запуск capacitor
capacitor.config.json
```json
{
  "appId": "io.ionic.starter.test2.funcfunc",
  "appName": "vueApp",
  "bundledWebRuntime": false,
  "webDir": "dist"
}
```
```
ionic capacitor add ios
ionic capacitor copy ios
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
