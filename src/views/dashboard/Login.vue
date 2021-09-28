<template>
  <Auth>
      <h5 class="text-2xl font-semibold">Login to your account</h5>
      <div class="w-full" >
          <form @submit.prevent="login()" ref="login" class="mt-4">
            <div>
                <label for="email" class="text-sm">Email Address</label>
                <input class="border-2 w-full p-4 focus:outline-none focus:border-purple-700 mt-2" v-model="email" type="text" name="email" id="email" placeholder="Enter E-mail Address">
                <span v-if="error.email" class="text-sm text-red-400">{{ error.email }}</span>
            </div>
            <div class="mt-4">
                <label for="email" class="text-sm">Password</label>
                <input class="border-2 w-full p-4 focus:outline-none focus:border-purple-700 mt-2" v-model="password" type="password" name="password" id="password" placeholder="Password">
                <span v-if="error.password" class="text-sm text-red-400">{{ error.password }}</span>
            </div>
           <button type="submit" ref="submit" class="flex justify-center border-2 border-purple-800 bg-purple-800 text-gray-100 p-4 mt-8 w-full hover:bg-purple-900 rounded-full rounded-br-none">Log in</button>
        </form>
        <div class="mt-4">
            <div class="flex justify-center">
                 <router-link to="/dashboard/sign-up" class="text-base  hover:text-purple-800">Register</router-link>
            </div>
            <div class="flex justify-center">
                <router-link to="/dashboard/forget-password" class="text-base hover:text-purple-800">Forgot Password</router-link>
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
import Toast from "@/components/Toast";
//Import Axios in .vue file
import axios from 'axios'

export default {
    components:{
        Auth,Toast
    },
    props:['url'],
    data(){
        return{
            email:'',
            password:'',
            error:{
                email: null,
                password:null
            },
            showToast: false,
            toastMsg:'',
            toastType:''
        }
    },
    methods:{
        login(){
            let loading = `<div class="flex space-x-2 w-20 rounded-full justify-center items-center" >
                    <div class="bg-white hover:bg-purple-800 p-2 w-3 h-3 animate-pulse rounded-full"></div>
                    <div>Loading...</div>
              </div>`;
            this.$refs.submit.innerHTML = loading;
            this.$refs.submit.disabled = true;
            let data = {
                email: this.email,
                password: this.password
            }
            axios.post(this.url+"login",data)
            .then( (res)=>{
                this.$refs.submit.innerHTML = 'Log in'
                this.$refs.submit.disabled = false;
                if (res.data.code == '1000') {
                    this.error.email = this.error.password = null
                    let user = res.data.user
                    localStorage.setItem('token',res.data.token)
                    this.$store.dispatch('getToken',res.data.token);
                    //Showing toast
                    this.toastType = "success";  
                    this.toastMsg = "Welcome "+ user.name
                    this.showToast = true;
                    this.$refs.login.reset();  
                    this.removeToast(5000,true);
                     //reseting form
                    
                }else{
                    let errors =(res.data.error) 
                    if (errors) {
                        this.error.email = (errors.email) ? errors.email[0] : null;
                        this.error.password = (errors.password) ? errors.password[0] : null;
                    }
                    //Showing toast
                    this.toastType = "danger";  
                    this.toastMsg = res.data.message;
                    this.showToast = true;
                    this.removeToast(5000); 
                }
            
            });
        },
        removeToast(timeout,redirect){
            setTimeout(() => {
                this.showToast = false;
                if (redirect) {
                     this.$router.push('/dashboard/index')   
                }else{
                   return false
                }
            }, timeout);
        }
    }
}
</script>

