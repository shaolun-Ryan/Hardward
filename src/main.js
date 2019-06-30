import Vue from 'vue'
import VueResource from 'vue-resource'
import Echarts from "echarts"
import * as d3 from 'd3';
// import Vuex from 'vuex'//因为下面直接引入文件，所以不用引入vuex
import axios from 'axios'
//设置post传参的配置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
import VueAxios from 'vue-axios'

import App from "./App.vue"

import $ from 'jquery'
import './assets/css/bootstrap.min.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import store from './store'



//使用vue-resource(不光要引入)
Vue.use(VueResource)

// Vue.use(VueAxios,axios)
Vue.prototype.$axios = axios
// axios.defaults.baseURL = '/api'
Vue.prototype.$echarts = Echarts



Vue.use(Echarts)
Vue.component('chart', Echarts)

//把Echarts绑定在Vue原型上，这样组建里面就可以通过this.$echarts来访问了
Vue.prototype.$echarts = Echarts

// Vue.prototype.d3  = d3



new Vue({
    el:'#app',
    store,//使用store
    template:'<App/>',
    components:{App}
})