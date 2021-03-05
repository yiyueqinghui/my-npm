// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import MyUi from 'yiyueqinghui-ui'
Vue.use(Vuex)
Vue.use(MyUi)

console.log(MyUi)

import store from './vuex/index.js'


Vue.config.productionTip = false




//打包结果过大--》vuex的内容过多了
//提出解决方案---》根据组件动态加载vuex

/*
function a(){
	
}
a.install = function(Vue){
	//全局混入
	Vue.mixin({
		methods:{   //方法混入
			add:function(){
				console.log('add')
			}
		},
		data:function(){ // 数据的混入
			return {
				globalA:123
			}
		},
		beforeCreate:function(){    //生命周期的混入
			  console.log('global created')
			  var name = this.$options.name;
			  console.log(name)
			  if(name && name!='index'){
			  	import("./vuex/module/"+name).then(res=>{
						this.$store.registerModule(name,res.default)
					})
			  }
				
		}
	})
	
	
}
Vue.use(a)
*/



/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  store,
  template: '<App/>'
})
