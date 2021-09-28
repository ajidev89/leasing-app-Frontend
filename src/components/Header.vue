<template>
    <div class="flex justify-center bg-purple-700 p-2 px-8 text-sm text-gray-100 md:justify-between">
        <div class="hidden md:inline mx-5">
            Invest into our real estate and Get 20% per month
        </div>
        <div class="inline-flex space-x-3 mx-5 text-sm">
            <facebook-icon size="1.5x" stroke="#F3F4F6" width="18" class="text-gray-100"></facebook-icon>
            <instagram-icon size="1.5x" stroke="#F3F4F6" width="18" class="custom-class"></instagram-icon>
            <twitter-icon size="1.5x" stroke="#F3F4F6" width="18" class="custom-class"></twitter-icon>  
        </div>
    </div>
     <div class="flex justify-between container text-base md:mx-5 px-8 p-5">
         <h1 class="font-bold">LOGO</h1>
         <div class="">
            <ul class="hidden md:inline-flex space-x-4 ">
                <li>
                    <router-link to="/" class="m-2 font-semibold hover:text-purple-700">Home</router-link> 
                </li>
                <li>
                    <router-link to="/about-us" class="m-2 font-semibold hover:text-purple-700">About us</router-link>  
                </li>
                <li>
                    <router-link to="/services" class="m-2 font-semibold hover:text-purple-700">Product & Services</router-link> 
                </li>
                <li>
                    <router-link to="/docs" class="m-2 font-semibold hover:text-purple-700">Developers</router-link>                   
                </li>
                <li>
                    <router-link to="/contact-us" class="m-2 font-semibold hover:text-purple-700">Contact</router-link>                   
                </li>
            </ul>
             <router-link to="/dashboard/login" class="hidden md:inline border-2 text-purple-700 rounded-full text-sm rounded-br-none px-6 py-2 border-purple-700 m-2 hover:bg-purple-700 hover:text-gray-100">Login</router-link>                   
             <router-link to="/dashboard/sign-up" class="hidden md:inline bg-purple-700 rounded-full text-sm text-gray-100 border-2  rounded-br-none px-6 py-2 border-purple-700 m-2 hover:bg-white hover:translate-x-6 hover:text-purple-700" >Join us</router-link>                           
         </div>
        <div class="md:hidden">
            <menu-icon size="1.5x" @click="menu()" class="custom-class"></menu-icon>
                <div class="fixed h-full top-0 left-0 w-full m-0 transform -translate-x-full transition duration-200 ease-in-out" @click.self="menu()" ref="menu">
                    <div class="bg-gray-800 text-gray-100 h-full w-11/12" >
                        <div class="pt-7">
                            <div class="pl-7 flex justify-between">
                                <div class="flex items-center">
                                    <h1 class="text-base text-bold uppercase">Menu</h1>
                                </div>
                                <div>
                                    <x-icon size="1.5x" width="60" stroke="#F3F4F6" class="custom-class" @click="menu()"></x-icon>  
                                </div>
                            </div>
                            <ul class="mt-7">
                                <li class="py-3 pl-7 mb-3 hover:bg-gray-700">
                                    <router-link to="/">Home</router-link> 
                                </li>
                                <li class="py-3 pl-7 mb-3 hover:bg-gray-700">About</li>
                                <li class="py-3 pl-7 mb-3 hover:bg-gray-700">Product & Services</li>
                                <li class="py-3 pl-7 mb-3 hover:bg-gray-700">Developers</li>
                                <li class="py-3 pl-7 mb-3 hover:bg-gray-700">
                                    <router-link to="/contact-us">Contact</router-link> 
                                </li>
                                <li class="py-3 pl-7 mb-3 hover:bg-gray-700">
                                    <router-link to="/dashboard/login">Login</router-link> 
                                </li>
                                <li class="py-3 pl-7 mb-3 hover:bg-gray-700">
                                    <router-link to="/dashboard/sign-up">Join us</router-link> 
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>  
        </div>
    </div>
</template>

<script>
import  ActivityIcon  from 'vue-feather-icon/components/activity.vue'
import  FacebookIcon  from 'vue-feather-icon/components/facebook.vue'
import  InstagramIcon  from 'vue-feather-icon/components/instagram.vue'
import MenuIcon  from 'vue-feather-icon/components/menu.vue'
import  XIcon  from 'vue-feather-icon/components/x.vue'
import  TwitterIcon  from 'vue-feather-icon/components/twitter.vue'
export default {
    components:{
        ActivityIcon,FacebookIcon,InstagramIcon,TwitterIcon,MenuIcon,XIcon
    },
    data(){
        return{
            showMenu:false
        }
    },
    methods:{
        menu(){
            this.showMenu = !this.showMenu
            if(this.showMenu){
                this.$refs.menu.classList.remove('-translate-x-full')
            }else{
                this.$refs.menu.classList.add('-translate-x-full')
            } 
        }
    }
}
</script>

<style scoped>
.router-link-exact-active {
  color:#6d28d9;
}
</style>