<template>
	<a :class="{primary:type=='primary',success:type=='success',warning:type=='warning',base:true}">
		<slot></slot>
	</a>
</template>

<script>
	export default {
		name:'yi-link',
		props:{
			type:{
				type:String,
				default:'primary'
			}
		},
		data(){
			return {
				
				
			}
		},
		mounted(){
			
		}
	}
</script>

<style scoped>
	.base{
		text-decoration: underline;
	}
	.primary{
		color:#409eff;
	}
	.success{
		color: #67c23a;
	}
	.warning{
		color:#f56c6c;
	}
</style>