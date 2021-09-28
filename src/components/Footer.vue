<template>
  <div class="grid text-gray-700 gap-4 md:px-8 md:py-16 md:grid-cols-3 pb-10">
    <div class="p-4 md:py-10 md:pr-10" >
        <h1 class="font-semibold text-lg"> LOGO</h1>
        <p class="mt-4" >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt a et ipsa corrupti quis facere dolores suscipit earum at repudiandae animi quam fugiat, possimus quos nisi quidem ipsam ducimus eligendi!
        </p>
        <div class="mt-4 inline-flex space-x-2 ">
              <div class="border-2 border-purple-700 rounded-full h-10 w-10 flex items-center justify-center" >
                  <facebook-icon size="1.5x" stroke="#6D28D9" width="18" class="text-gray-100"></facebook-icon>
              </div>
               <div class="border-2 border-purple-700 rounded-full h-10 w-10 flex items-center justify-center" >
                  <instagram-icon size="1.5x" stroke="#6D28D9" width="18" class="custom-class"></instagram-icon>   
              </div>
               <div class="border-2 border-purple-700 rounded-full h-10 w-10 flex items-center justify-center" >
                  <twitter-icon size="1.5x" stroke="#6D28D9"  width="18" class="custom-class text-purple-700"></twitter-icon>
              </div>
        </div>
    </div>
    <div class="p-4 md:py-10 md:pl-14">
        <h1 class="font-semibold text-lg">Quick Links</h1>
        <ul class="mt-4">
          <li class="mb-2">About us</li>
          <li class="mb-2">Contact us</li>
          <li class="mb-2">Product & Services</li>
          <li class="mb-2">Privacy Policy</li>
            <li class="mb-2">Terms & Conditions</li>
        </ul>
    </div>
    <div class="p-4 md:py-10">
        <h1 class="font-semibold text-lg">Stay up to date with our products & services</h1>
        <form action="" class="mt-4" method="post">
            <input class="border-2 w-56 md:w-96 p-2 focus:outline-none focus:border-purple-700 " type="text" name="email" id="email" placeholder="Enter E-mail Address">
            <input type="submit" class=" border-2 border-purple-800 bg-purple-800 text-gray-100 px-6 py-2 mt-4" value="Sign up">
        </form>
    </div>
  </div>
  <div class="flex justify-center bg-purple-800 p-2 md:px-8 text-sm text-gray-100 md:justify-between">
    <div class="text-sm">
        Copyright @ {{ year }} - LOGO
    </div>
    <div class="hidden md:inline-flex space-x-3">
        <facebook-icon size="1.5x" stroke="#F3F4F6" width="18" class="text-gray-100"></facebook-icon>
        <instagram-icon size="1.5x" stroke="#F3F4F6" width="18" class="custom-class"></instagram-icon>
        <twitter-icon size="1.5x" stroke="#F3F4F6" width="18" class="custom-class"></twitter-icon>
    </div>
    </div>
</template>

<script>
import  FacebookIcon  from 'vue-feather-icon/components/facebook.vue'
import  InstagramIcon  from 'vue-feather-icon/components/instagram.vue'
import  TwitterIcon  from 'vue-feather-icon/components/twitter.vue'
export default {
  components:{
    FacebookIcon,InstagramIcon,TwitterIcon
  },
  data() {
    return {
      year: ""
    }
  },
  mounted(){
     this.year = new Date().getFullYear(); 
  }
}
</script>

<style>

</style>