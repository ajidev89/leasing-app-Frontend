<template>
    <div class="font-body text-gray-700 mt-0">
      <router-view :token="token" :url="base_url"/>
    </div>
</template>

<script>
export default {
  data(){
    return{
      loggedinUser: null
    }
  },
  mounted(){
    var LocalToken = localStorage.getItem('token') ? localStorage.getItem('token') : '' ;
    this.$store.dispatch('getToken',LocalToken);
  },
  computed:{
     token(){
        return this.$store.state.token
     },
     base_url(){
       return this.$store.state.base_url
     }
  }
}
</script>

<style>

</style>


