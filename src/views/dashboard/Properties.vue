<template>
    <div class="flex bg-gray-200 gap-4">
    <Sidebar/>
    <div class="flex-1"> 
        <HeaderDashboard/>
        <div class="bg-white shadow rounded mt-4 p-6 md:mr-5">
            <div class="flex justify-between">
                <h1 class="font-extrabold text-xl">All properties</h1>
                 <router-link to="/dashboard/properties/add-property"  class="bg-purple-800 py-1 flex space-x-2 rounded border-purple-800 border-2 px-4 text-sm text-gray-100"> 
                    <plus-circle-icon size="1.5x" class="stroke-current"></plus-circle-icon> 
                    <p>Add property</p>
                 </router-link>
            </div>
            <div class="flex space-x-3 mt-4">
               <h1 class="font-extrabold text-purple-800 border-b-2 pb-2 border-purple-800">Rentals</h1> 
               <h1 class="font-extrabold">Sell</h1>            
            </div>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-5 mt-6" >
                <div class="border-2 rounded md:w-64" >
                    <img src="http://localhost:8080/img/properties/project-img-1.jpg" class="">
                    <div class="p-5" >
                        <h5 class="font-bold" >LEKKI VILLA</h5>
                        <div class="flex justify-between mt-2" >
                           <h5 class="font-bold" >Apartment</h5> 
                           <p>4</p>
                        </div>
                        <div class="flex justify-between mt-2" >
                           <h5 class="font-bold">Vacancy</h5> 
                           <p>No</p>
                        </div>
                        <div class="mt-4 space-x-3">
                            <button class="bg-purple-800 py-1 border-purple-800 border-2 px-4 text-sm text-gray-100">Edit</button>
                            <button class="border-purple-800 border-2 py-1 px-4 text-sm text-purple-800">View Details</button>
                        </div>
                    </div>
                </div>
                <div class="border-2 rounded md:w-64" >
                    <img src="http://localhost:8080/img/properties/project-img-1.jpg" class="">
                    <div class="p-5" >
                        <h5 class="font-bold" >LEKKI VILLA</h5>
                        <div class="flex justify-between mt-2" >
                           <h5 class="font-bold" >Apartment</h5> 
                           <p>4</p>
                        </div>
                        <div class="flex justify-between mt-2" >
                           <h5 class="font-bold">Vacancy</h5> 
                           <p>No</p>
                        </div>
                        <div class="mt-4 space-x-3">
                            <button class="bg-purple-800 py-1 border-purple-800 border-2 px-4 text-sm text-gray-100">Edit</button>
                            <button class="border-purple-800 border-2 py-1 px-4 text-sm text-purple-800">View Details</button>
                        </div>
                    </div>
                </div>
                <div class="border-2 rounded md:w-64" >
                    <img src="http://localhost:8080/img/properties/project-img-1.jpg" class="">
                    <div class="p-5" >
                        <h5 class="font-bold" >LEKKI VILLA</h5>
                        <div class="flex justify-between mt-2" >
                           <h5 class="font-bold" >Apartment</h5> 
                           <p>4</p>
                        </div>
                        <div class="flex justify-between mt-2" >
                           <h5 class="font-bold">Vacancy</h5> 
                           <p>No</p>
                        </div>
                        <div class="mt-4 space-x-3">
                            <button class="bg-purple-800 py-1 border-purple-800 border-2 px-4 text-sm text-gray-100">Edit</button>
                            <button class="border-purple-800 border-2 py-1 px-4 text-sm text-purple-800">View Details</button>
                        </div>
                    </div>
                </div>
                <div class="border-2 rounded md:w-64" >
                    <img src="http://localhost:8080/img/properties/project-img-1.jpg" class="">
                    <div class="p-5" >
                        <h5 class="font-bold" >LEKKI VILLA</h5>
                        <div class="flex justify-between mt-2" >
                           <h5 class="font-bold" >Apartment</h5> 
                           <p>4</p>
                        </div>
                        <div class="flex justify-between mt-2" >
                           <h5 class="font-bold">Vacancy</h5> 
                           <p>No</p>
                        </div>
                        <div class="mt-4 space-x-3">
                            <button class="bg-purple-800 py-1 border-purple-800 border-2 px-4 text-sm text-gray-100">Edit</button>
                            <button class="border-purple-800 border-2 py-1 px-4 text-sm text-purple-800">View Details</button>
                        </div>
                    </div>
                </div>
            </div>       
        </div>
    </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import HeaderDashboard from '@/components/HeaderDashboard.vue'
import PlusCircleIcon  from 'vue-feather-icon/components/plus-circle.vue'

export default {
  components:{
      Sidebar,HeaderDashboard,PlusCircleIcon
  },
  data(){
      return{

      }
  }
}

</script>


<style>

</style>