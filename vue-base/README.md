# vue-base

## Setup Bootstrap manually
- `npm install bootstrap jquery popper.js`
- To main.js: 
```javascript
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
```

## Axios
- `npm i axios vue-axios`
- To main.js:
```javascript
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App)
    .use(VueAxios, axios)
    .mount('#app')
```

## Localisation
- `vue add i18n`
- 