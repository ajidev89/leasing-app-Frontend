<template>
    <Auth> 
         <h5 class="text-2xl font-semibold">Forget your password</h5>
         <form @submit.prevent="forgetPassword()" method="post">
            <div>
                <label for="email" class="text-sm">Email Address</label>
                <input class="border-2 w-full p-4 focus:outline-none focus:border-purple-700 mt-2" v-model="email" type="text" name="email" id="email" placeholder="Enter E-mail Address">
                <span v-if="error.email" class="text-sm text-red-400">{{ error.email }}</span>
            </div>
            <button type="submit" ref="submit" class="flex justify-center border-2 border-purple-800 bg-purple-800 text-gray-100 p-4 mt-4 w-full hover:bg-purple-900 rounded-full rounded-br-none">Reset Password</button>
        </form>
        <div class="mt-4">
            <div class="flex justify-center">
                 <router-link to="/dashboard/login" class="text-base  hover:text-purple-800">Back to Login page</router-link>
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
            email:"",
            error:{
                email: ""
            }, 
            showToast: false,
            toastMsg:'',
            toastType:''
        }
    },
    methods:{
        forgetPassword(){
            let loading = `<div class="flex space-x-2 w-20 rounded-full justify-center items-center" >
                    <div class="bg-white hover:bg-purple-800 p-2 w-3 h-3 animate-pulse rounded-full"></div>
                    <div>Sending...</div>
              </div>`;
            this.$refs.submit.innerHTML = loading;
            this.$refs.submit.disabled = true;
            let data = {
                email: this.email 
            }
            axios.post(this.url+"forget-password",data)
            .then((res)=>{
                this.$refs.submit.innerHTML = 'Reset Password';
                this.$refs.submit.disabled = false;
                if (res.data.code == '1000') {
                     this.error.email  = null
                      //Showing toast
                    this.toastType = "success";  
                    this.toastMsg = res.data.message;
                    this.showToast = true;
                    this.removeToast(5000); 
                }else{
                    let errors =res.data.error;
                    this.error.email = (errors.email) ? errors.email[0] : null;
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