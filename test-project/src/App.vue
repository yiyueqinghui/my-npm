<template>
  <div id="app">
      <Input @change="change"></Input>
  </div>
</template>

<script>
import Input from './components/index.vue'

export default {
  name: 'App',
  data(){
  	return {
  		level:1
  		
  	}
  },
//render(h){
//	return (
//		<h1>title</h1>
//	)
//},
  methods:{
  	change(val){
  		console.log(val)
  	}
  },
  components: {
    Input
  }
}
</script>
