import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

//全局修改axios默认配置
axios.defaults.baseURL = 'http://rap2.taobao.org:38080/app/mock/258513';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.config.productionTip = false;
Vue.prototype.axios = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
