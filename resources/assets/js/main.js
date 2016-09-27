import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from  'vue-resource';

Vue.use(VueResource);
Vue.use(VueRouter);

// Style
import './assets/css/bootstrap.css';
import './assets/css/font-awesome.css';
import './assets/css/animate.css';
import './assets/css/style.css';

// Js
import './assets/js/bootstrap';

import App from './app';
import routeConfig from './routes';

Vue.http.options.root = '/api';

let router = new VueRouter();
routeConfig(router);
router.start(App, '#app');
window.router = router;