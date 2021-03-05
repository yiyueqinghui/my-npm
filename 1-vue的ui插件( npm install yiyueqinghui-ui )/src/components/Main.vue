<template>
  <div class="container">
    <button>{{name}}</button>
  </div>
</template>

<script>
export default {
	name:'yi-main',
  props: {
      name: {
          type: String,
          default: '默认按钮'
      }
  }
}
</script>

<style scoped>
.container{
	  display: inline-block;
}
.container button{
	  padding: 10px 20px;
    text-align: center;
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    border: none;
    border-radius: 5px;
    letter-spacing: 1px;
}
</style>