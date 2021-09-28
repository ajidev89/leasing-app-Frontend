<template>
    <div class="md:flex bg-gray-200 gap-4">
    <Sidebar/>
    <div class="flex-grow"> 
        <HeaderDashboard :name="name"/>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 px-4 md:mr-9 md:ml-6" >
            <div class="bg-blue-400 text-gray-100 border-2 border-blue-400 rounded-2xl rounded-br-none p-8">
                <h5 class="text-base uppercase text-bold" >Properties</h5>
                <h1 class="text-3xl">28</h1>
            </div>
            <div class="bg-red-400 text-gray-100 border-2 border-red-400 rounded-2xl rounded-br-none p-8">
                <h5 class="text-base uppercase text-bold" >Tenants</h5>
                <h1 class="text-3xl">8</h1>
            </div>
            <div class="bg-green-400 text-gray-100 border-2 border-green-400 rounded-2xl rounded-br-none p-8">
                <h5 class="text-base uppercase text-bold" >Sold Properties</h5>
                <h1 class="text-3xl">3</h1>
            </div>
        </div>
        <div class="md:flex mt-10" >
            <div class="md:w-2/5 w-full" >
                <Card>
                    <h1 class="font-extrabold font-2xl border-b-2 pb-2">New Properties </h1>
                    <div class="flex justify-center h-64">
                        <div class="w-80 md:w-96 h-64 mt-4 px-5"> 
                            <swiper :pagination='{
                                "type": "fraction"
                                }' :navigation="true" class="mySwiper">
                                <swiper-slide v-for="proprty in properties" :key="proprty" class="text-center h-64" >
                                     <img :src="proprty.img" class="rounded text-center">
                                </swiper-slide>
                            </swiper>
                        </div>    
                    </div>    
                </Card>
            </div>
            <div class="md:w-3/5 w-full " >
                <Card>
                    <h1 class="font-extrabold font-2xl border-b-2 pb-2">Rental Status</h1>
                    <ul class="mt-4 overflow-auto px-3 scrollbar scrollbar-thumb-rounded-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 h-64">
                        <li v-for="status in statuses" :key="status" class="py-4 px-2 rounded hover:bg-gray-100"> 
                           <small class="text-xs text-gray-400 font-extrabold uppercase">{{ status.name }}: {{ status.apartment }}</small>
                           <div class="flex mt-3">
                                 <img :src="status.tenantPic" class="rounded-full h-9 w-9" :alt="status.tenantName">
                                <p class="pl-3">{{ status.tenantName}} rent {{ status.status }}</p>
                           </div>
                        </li>
                    </ul>
                </Card>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import HeaderDashboard from '@/components/HeaderDashboard.vue'
import Card from '@/components/Card.vue'
//Swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/swiper.min.css';

import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

//Import Axios in .vue file
import axios from 'axios'
// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);

export default {
  components:{
      Sidebar,HeaderDashboard,Card,Swiper,SwiperSlide
  },
  props:['token','url'],
  data(){
      return{
          name:'',
          statuses:[
               {
                    name:'Lekki Villa',
                    tenantPic: 'http://localhost:8080/img/properties/binyamin-mellish-726.jpeg',
                    tenantName: 'Mr ilori',
                    apartment: "deluxe-3",
                    status:'will soon expire in the next 3 months'
                },
                {
                    name:'Abeokuta Rising',
                    tenantPic: 'http://localhost:8080/img/properties/binyamin-mellish-726.jpeg',
                    tenantName: 'Mrs Badmus',
                    apartment: "basic-4",
                    status:'will soon expire in the next 6 months'
                },
                {
                    name:'Sango-Otta Rising',
                    tenantPic: 'http://localhost:8080/img/properties/binyamin-mellish-726.jpeg',
                    tenantName: 'Mr Banire',
                    apartment: "basic-4",
                    status:'will soon expire in the next 1 month'
                }
          ],
        properties:[
            {
                img:'http://localhost:8080/img/properties/project-img-1.jpg'
            },
            {
                img:'http://localhost:8080/img/properties/project-img-3.jpg'
            },
            {
                img:'http://localhost:8080/img/properties/project-img-2.jpg'
            }
        ]
      }
  },
  beforeCreate() {
      if(!this.token){
          this.$router.push('/dashboard/login')
      }else{
           axios.get(this.url+"profile",{
            headers: {'Authorization': 'Bearer '+ this.token}
           }).then((res)=>{
               //console.log(res.data.user.name);
               this.name = res.data.user.name
           });
      }
    }
}

</script>


<style>

</style>