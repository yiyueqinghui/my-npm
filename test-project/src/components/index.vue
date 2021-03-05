<template>
  <div class="about">
    <input :type="typeInput" @change="inputChange" />
    <yi-main :name="name" />
    <yi-link type="warning">跳转官网</yi-link>
  </div>
</template>

<script>
export default {
	name:'index',
  props: {
    typeInput: String,
    default:"text"
    
  },
  data(){
  	return {
  		
  		
  	}
  },
  computed:{
  	name(){
  		return this.$store.state.name;
  	}
  },
  methods: {
    inputChange(val){
      this.$emit("change", val);
    }
  },
  mounted(){
  	console.log(this.globalA)
  }
};
</script>