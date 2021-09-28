<template>
  <Auth>
      <h5 class="text-2xl font-semibold">Register your account</h5>
      <div class="w-full" >
          {{ errors }}
          <form @submit.prevent="register()" class="mt-4" ref="register">
            <div>
                <label for="email" class="text-sm">Fullname</label>
                <input class="border-2 w-full p-4 focus:outline-none focus:border-purple-700 mt-2" type="text" v-model="name" name="name" id="name" placeholder="Enter your fullname">
                <span v-if="error.name" class="text-sm text-red-400">{{ error.name }}</span>
            </div>
            <div>
                <label for="email" class="text-sm">Email Address</label>
                <input class="border-2 w-full p-4 focus:outline-none focus:border-purple-700 mt-2" type="text" v-model="email" name="email" id="email" placeholder="Enter E-mail Address">
                <span v-if="error.email" class="text-sm text-red-400">{{ error.email }}</span>
            </div>
            <div class="mt-4">
                <label for="email" class="text-sm">Password</label>
                <input class="border-2 w-full p-4 focus:outline-none focus:border-purple-700 mt-2" type="password" v-model="password" name="password" id="password" placeholder="Password">
                <span v-if="error.password" class="text-sm text-red-400">{{ error.password }}</span>
            </div>
           <button type="submit" ref="submit" class="border-2 border-purple-800 bg-purple-800 flex justify-center  text-gray-100 p-4 mt-8 w-full hover:bg-purple-900 rounded-full rounded-br-none">Sign up</button>
        </form>
        <div class="mt-4">
            <div class="flex justify-center">
                 <router-link to="/dashboard/login" class="text-base  hover:text-purple-800">Log in</router-link>
            </div>
        </div>
      </div>
        
  </Auth>
  <div v-if="showToast" >
      <Toast :type="toastType" :msg="toastMsg" />
  </div>
    
</template>

<script>

import Auth from "@/components/Auth";
import Toast from "@/components/Toast"
//Import Axios in .vue file
import axios from 'axios'

export default {
    components:{
        Auth,Toast
    },
    props:['url'],
    data(){
        return{
            name: null,
            email: null,
            password: null,
            error:{
                name:null,
                email: null,
                password:null
            },
            showToast: false,
            toastMsg:'',
            toastType:''
        }
    },
    methods:{
        register(){
            let loading = `<div class="flex space-x-2 w-20 rounded-full justify-center items-center" >
                    <div class="bg-white hover:bg-purple-800 p-2 w-3 h-3 animate-pulse rounded-full"></div>
                    <div>Loading...</div>
              </div>`;
            this.$refs.submit.innerHTML = loading;
            this.$refs.submit.disabled = true;
            let data = {
                name: this.name,
                email: this.email,
                password: this.password
            }
            axios.post(this.url+"register",data)
            .then((res) =>{
                this.$refs.submit.innerHTML = 'Sign up'
                this.$refs.submit.disabled = false;
                if (res.data.code == '1000') {
                    this.error.name = this.error.email = this.error.password = null
                    //Showing toast
                    this.toastType = "success";  
                    this.toastMsg = res.data.message;
                    this.showToast = true;
                    this.removeToast(5000,true);   
                    //reseting form
                    this.$refs.register.reset();            
                }else{
                    let errors =res.data.error;
                    this.error.email = (errors.email) ? errors.email[0] : null;
                    this.error.password = (errors.password) ? errors.password[0] : null;
                    this.error.name = (errors.name) ? errors.name[0] : null;
                    //Showing toast
                    this.toastType = "danger";  
                    this.toastMsg = res.data.message;
                    this.showToast = true;
                    this.removeToast(5000);                  
                }
            })
        },
        removeToast(timeout,redirect){
            setTimeout(() => {
                this.showToast = false;               
                if (redirect) {
                     this.$router.push('/dashboard/login')   
                }else{
                   return false
                }
            }, timeout);
        }
    }
}
</script>

<style>

</style>