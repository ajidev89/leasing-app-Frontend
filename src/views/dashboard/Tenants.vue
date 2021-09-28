<template>
    <div class="flex bg-gray-200 gap-4">
    <Sidebar/>
    <div class="flex-1"> 
        <HeaderDashboard/>
        <div class="bg-white shadow rounded mt-4 p-6 md:mr-5">
            <div class="flex justify-between">
                <h1 class="font-extrabold text-xl">All Tenants</h1>
                <button class="bg-purple-800 py-1 flex space-x-2 rounded border-purple-800 border-2 px-4 text-sm text-gray-100"> 
                    <plus-circle-icon size="1.5x" class="stroke-current"></plus-circle-icon> 
                    <p>Add Tenant</p>
                </button>
            </div>
            <Table/>
        </div>   
    </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import HeaderDashboard from '@/components/HeaderDashboard.vue'
import PlusCircleIcon  from 'vue-feather-icon/components/plus-circle.vue'
import Table from "@/components/Table.vue";

export default {
  components:{
      Sidebar,HeaderDashboard,PlusCircleIcon,Table
  },
  data(){
      return{
      }
  }
}

</script>


<style>

</style>