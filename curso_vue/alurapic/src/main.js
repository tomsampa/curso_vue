import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import VeeValidate , { Validator } from 'vee-validate';
import pt_BR from './pt_BR';
import { routes } from './routes'
import './directives/Transform'
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/teste.css';
import './assets/js/teste.js';

import 'jquery/dist/jquery.js';
import 'bootstrap/dist/js/bootstrap.js';

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';

/*
Vue.http.interceptors.push((req, next) => {
    // é possível colocar informações no header antes do envio da requisição
    req.headers.set('Authorization', 'informação de segurança aqui');
    console.log('Lidando com o request');

    next(res => {
      console.log('Lidando com a resposta')
      // é possível acessar os dados da reposta e realizar transformações antes
      console.log(res.body);
    });
});
*/

Vue.use(VueRouter);

const router = new VueRouter({ 
  routes,
  mode: 'history'
 });

Validator.localize('pt_BR', pt_BR);
Vue.use(VeeValidate, {locale: 'pt_BR'});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
