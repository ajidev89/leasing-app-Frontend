<template>      
    <div class="bg-white rounded shadow md:mt-4 p-6 md:mr-5">
        <div class="flex justify-between md:justify-end">
            <div class="flex space-x-3 md:hidden" >
                <menu-icon size="1.5x" @click="menu()" class="custom-class"></menu-icon>
                <h1 class="font-bold uppercase" >Leasing App</h1>
            </div>
            <div class="flex space-x-3">
                 <div class="flex space-x-2" >
                    <search-icon size="1.5x" @click="menu()" class="custom-class"></search-icon>
                    <input type="text" v-model="search" name="search" class="hidden md:inline focus:outline-none" placeholder="Search Properties.." id="search">
                </div>
                <div class="flex">
                    <user-icon size="24" class="custom-class"></user-icon>
                    <h1 class="pl-2 hidden md:inline text-gray-500">{{ name }}</h1>
                </div>
            </div>
           
        </div>
    </div>
</template>
<script>
import  UserIcon from 'vue-feather-icon/components/user.vue'
import  SearchIcon  from 'vue-feather-icon/components/search.vue'
import MenuIcon  from 'vue-feather-icon/components/menu.vue'

export default {
  components: {
    UserIcon,SearchIcon,MenuIcon 
  },
  props:['name'],
  data(){
      return{
          search: ""
      }
  },
  methods:{
      menu(){
          alert('meny')
      },
      look(){
          alert('look')
      }

  }
}
</script>