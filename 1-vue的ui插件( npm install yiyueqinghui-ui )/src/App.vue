<template>
  <div>
    <Main/>
    <Link type="success">易华录</Link>
  </div>
</template>

<script>
import Main from './components/Main'
import Link from './components/Link'
export default {
    data(){
      return {
        initData: ''
      }
    },
    components:{
      Main,
      Link
    }
}
</script>

<style>

</style>