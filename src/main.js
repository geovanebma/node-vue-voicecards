import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Importar arquivos CSS do Bootstrap e BootstrapVue
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import '../src/styles/main.css';

// Tornar BootstrapVue disponível em todo o projeto
Vue.use(BootstrapVue);
// Opcional: tornar os ícones do BootstrapVue disponíveis em todo o projeto
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');