<template>
    <div class="flex bg-gray-200 gap-4">
    <Sidebar/>
    <div class="flex-1"> 
        <HeaderDashboard/>
        <div class="bg-white shadow rounded mt-4 p-6 md:mr-5">
            <div class="flex justify-between">
                <h1 class="font-extrabold text-xl">Add property</h1>
            </div>
            <div>
                <form @submit.prevent="submitProperty">
                     <div class="grid grid-cols-1 md:grid-cols-4 gap-5 mt-4" >
                         <div  class="col-span-3">
                            <label class="text-sm">Name of Property</label>
                            <input class="border-2 w-full p-4 focus:outline-none focus:border-purple-700 mt-2" v-model="propertyName" type="text" placeholder="Enter Name of property">
                            <span v-if="error.propertyName" class="text-sm text-red-400">{{ error.propertyName }}</span>
                        </div>
                        <div>
                            <label class="text-sm">Select mode</label>
                            <select class="border-2 w-full p-4 focus:outline-none focus:border-purple-700 mt-2" v-model="Mode">
                                <option selected>Select State</option>
                                <option value="leasing" >Leasing/Rentals</option>
                                 <option value="selling" >Selling</option>
                            </select>
                            <span v-if="error.Mode" class="text-sm text-red-400">{{ error.Mode}}</span>

                        </div>

                     </div>
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-5 mt-4" >
                        <div class="col-span-2">
                            <label class="text-sm">Address of Property</label>
                            <input class="border-2 w-full p-4 focus:outline-none focus:border-purple-700 mt-2" v-model="Location" type="text" placeholder="Enter Location of property">
                            <span v-if="error.Location" class="text-sm text-red-400">{{ error.Location}}</span>
                        </div>
                        <div>
                            <label class="text-sm">State</label>
                            <select class="border-2 w-full p-4 focus:outline-none focus:border-purple-700 mt-2" v-model="State">
                                <option selected>Select State</option>
                                <option value="Lagos" >Lagos State</option>
                            </select>
                            <span v-if="error.State" class="text-sm text-red-400">{{ error.State}}</span>
                        </div>
                        <div>
                            <label class="text-sm">City</label>
                            <select class="border-2 w-full p-4 focus:outline-none focus:border-purple-700 mt-2" v-model="City">
                                <option selected>Select City</option>
                                <option value="Ikorodu" >Ikorodu</option>
                            </select>
                            <span v-if="error.City" class="text-sm text-red-400">{{ error.City}}</span>
                        </div>
                    </div>
                    <div class="mt-4">
                        <label class="text-sm">Facilities</label>
                        <input @keyup.right="addFacility()" v-model="Facility" class="border-2 w-full p-4 focus:outline-none focus:border-purple-700 mt-2" type="text" placeholder="Enter Facilites">
                        <span v-if="error.Facilities" class="text-sm text-red-400">{{ error.Facilities}}</span>
                        <div class="flex space-x-4 mt-4"  v-if="Facilities">
                            <div class="bg-gray-200 flex space-x-2  px-4 py-2 rounded-full " v-for="Facility in Facilities" :key="Facility">
                                        <p> {{Facility}}</p>     
                                    <div class="text-gray-700 flex items-center" @click="popFacilty(Facility)">
                                        <x-icon size="1.5x" class="stroke-current h-4 w-4 " ></x-icon>  
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-4">
                        <input type="submit" class="text-center border-2 border-purple-800 bg-purple-800 text-gray-100 py-3 px-6 text-sm hover:bg-purple-900 rounded-full rounded-br-none" value="">
                    </div>
            </form>
            </div>
                 
        </div>
    </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import HeaderDashboard from '@/components/HeaderDashboard.vue'
import PlusCircleIcon  from 'vue-feather-icon/components/plus-circle.vue'
import  XIcon  from 'vue-feather-icon/components/x.vue'

export default {
  components:{
      Sidebar,HeaderDashboard,PlusCircleIcon,XIcon
  },
  data(){
      return{
            propertyName: '',
            Location: '',
            State: '',
            City: '',
            Mode:'',
            Facility:'',
            Facilities: [],
            error:{
                propertyName: null,
                Location: null,
                State: null,
                City:null,
                Mode:null,
                Facilities:null
            }
      }
  },
  methods:{
      addFacility(){
        if (!this.Facilities.includes(this.Facility.trim().toLowerCase())) {
          this.Facilities.push(this.Facility.trim().toLowerCase())  
        }else{
          this.error.Facilities =this.Facility + ' already exist';
          setTimeout(() => {
              this.error.Facilities = ""
          }, 3000);
        }
        this.Facility =" "
        
      },
      popFacilty(Key){
             this.Facilities= this.Facilities.filter((item) => {
            return Key !== item
        })
      },
      submitProperty(){
            alert("Check mad")
      }
  }
}

</script>


<style>

</style>