<template>
<div class="bg-purple-800 hidden md:flex w-64 text-gray-100 shadow-2xl h-screen sticky top-0">
    <div class="px-5 pt-5">
        <div class="flex pl-7 mt-7">
            <align-justify-icon size="2x" class="stroke-current text-gray-100 mt-1"></align-justify-icon>
            <h1 class="pl-4 text-lg uppercase text-bold">Leasing App</h1>  
        </div>
        <ul class="pl-7 mt-10 text-sm w-40">
            <li>
                <router-link to="/dashboard/index" class="flex pl-3 py-3 mb-3 hover:bg-gray-100 hover:text-purple-800 rounded-full">
                    <grid-icon size="1.5x" class="stroke-current"></grid-icon> 
                    <p class="pl-2" >Dashboard</p>
                </router-link> 
            </li>
            <li class="">
                <router-link to="/dashboard/properties" class="flex mt-8 pl-3 py-3 mb-3 hover:text-purple-800 hover:bg-gray-100 rounded-full">
                    <home-icon size="1.5x" class="stroke-current"></home-icon>
                    <p class="pl-2">Properties</p>
                </router-link>
            </li>
            <li>
                <router-link to="/dashboard/tenants" class="pl-3 flex mt-8 py-3 mb-3 hover:bg-gray-100 hover:text-purple-800 rounded-full">
                    <users-icon size="1.5x" class="stroke-current"></users-icon>
                    <p class="pl-2">Tenants</p>
                </router-link>
            </li>
            <li >                   
                <a href="#" @click="logout()"  class="pl-3 flex mt-8 py-3 mb-3 hover:bg-gray-100 hover:text-purple-800 rounded-full">
                    <power-icon size="1.5x" class="stroke-current"></power-icon>
                    <p class="pl-2">Logout</p>
                </a>
            </li> 
        </ul>
    </div>
</div>
</template>
<script>
import  GridIcon  from 'vue-feather-icon/components/grid.vue'
import  HomeIcon  from 'vue-feather-icon/components/home.vue'
import  PowerIcon  from 'vue-feather-icon/components/power.vue'
import  UsersIcon  from 'vue-feather-icon/components/users.vue'
import  AlignJustifyIcon  from 'vue-feather-icon/components/align-justify.vue'
//Import Axios in .vue file
import axios from 'axios'
export default {
  components:{
      GridIcon,HomeIcon,PowerIcon,UsersIcon,AlignJustifyIcon
  },
  methods:{
      logout(){
          
          axios.get(this.url+"logout",{
               headers: {'Authorization': `Bearer ${this.token}`}
          }).then((res)=>{
              localStorage.removeItem('token');
              this.$store.dispatch('getToken',"");
              this.$router.push('/dashboard/login')  
          });

      }
  },
  computed:{
      url(){
          return this.$store.state.base_url
      },
      token(){
          return this.$store.state.token
      }
  }
}

</script>

<style scoped>
.router-link-exact-active {
  color:#5B21B6;
  background: #F3F4F6
}
.router-link-exact-active svg{
    stroke: #5B21B6;
}
a svg:hover{
    stroke: #5B21B6;
}
</style>