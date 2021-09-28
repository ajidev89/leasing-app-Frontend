<template>
  <MyHeader/>
    <div class="h-img-slider text-gray-100 " style="background-image: url('img/Slider1.jpg');">
        <div class="flex items-center justify-center w-full h-full top-0 md:px-20" style=" background: rgba(0,0,0,0.5);">
            <div class="w-full p-4 md:p-0">
                <h1 class="text-center text-5xl">Are you tired of agent fee?</h1>
                <p class="text-center mt-2" >Meet with landlords directly and ask for their price</p>
                <div class="mt-4 z-50 flex justify-center " >
                    <input type="text" v-model="search" class="bg-white p-4 text-gray-700 focus:outline-none rounded-full rounded-br-none rounded-tr-none w-80" placeholder="Enter Location" id="">
                    <button @click="searchProperties()" class="bg-purple-800 p-4 hover:bg-purple-900 flex items-center rounded-full rounded-bl-none rounded-tl-none text-gray-100" > 
                        <div class="flex space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <p>Search</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
         <div class=" bg-gray-100 pt-8">
            <div class="text-center mb-4">
                <p class="text-gray-700">Looking for new properties to buy?</p>
                <h1 class="text-4xl text-gray-700">Checkout our properties listing</h1>
                <div class="flex justify-center mt-4" >
                    <div class="bg-white text-gray-700 w-48 h-12  flex rounded-full">
                        <button @click="toggleType('sale')" ref="sale" class="active-left font-semibold  w-28 rounded-full">Sale</button>
                        <button @click="toggleType('lease')" ref="lease" class="w-28 rounded-full" >Lease</button>
                    </div>

                </div>
                
            </div>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-3 pb-10 md:px-12">
                <Card v-for="property in properties" :key="property" :name="property.name" :img="property.img" :description="property.description" :show="true" :seller="property.seller"/>
             </div>
        </div>
        <Footer/>

    </div>
 
</template>

<script>

import MyHeader from '@/components/Header.vue'
import ScrollTop from "@/components/ScrollTop.vue";
import Card from "@/components/Card.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: 'Home',
  components: {
     MyHeader,Card,Footer,ScrollTop
  },
  inheritAttrs: false,
  data(){
      return{
          sale: 0,
          lease: 0,
          search:"",
          properties:[
                {
                    name:'Newly Built House in Alanta',
                    seller: 'img/properties/binyamin-mellish-726.jpeg',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae optio, voluptate, deserunt delectus consectetur animi id possimus tenetur omnis quod corporis quo aperiam incidunt similique totam vel hic sed nihil?',
                    img:'img/properties/project-img-1.jpg'
                },
                {
                    name:'Newly Built House in England',
                    seller: 'img/properties/binyamin-mellish-726.jpeg',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae optio, voluptate, deserunt delectus consectetur animi id possimus tenetur omnis quod corporis quo aperiam incidunt similique totam vel hic sed nihil?',
                    img:'img/properties/project-img-2.jpg'
                },
                 {
                    name:'Newly Built House in Russia',
                    seller: 'img/properties/binyamin-mellish-726.jpeg',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae optio, voluptate, deserunt delectus consectetur animi id possimus tenetur omnis quod corporis quo aperiam incidunt similique totam vel hic sed nihil?',
                    img:'img/properties/project-img-3.jpg'
                },
                 {
                    name:'Newly Built House in Russia',
                    seller: 'img/properties/binyamin-mellish-726.jpeg',
                    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae optio, voluptate, deserunt delectus consectetur animi id possimus tenetur omnis quod corporis quo aperiam incidunt similique totam vel hic sed nihil?',
                    img:'img/properties/project-img-3.jpg'
                }
                
             ]
          }
      },
    methods: {
        toggleType(elem){
        let sale =this.$refs.sale;
        let lease =this.$refs.lease;
          if(elem == 'sale'){
              if(!sale.classList.contains('active-left')){
                  sale.classList.add('active-left');
                  lease.classList.remove('active-right');
                  //showProperties('sale') 

              }
          }
          else{
              if(!lease.classList.contains('active-right')){
                  lease.classList.add('active-right');
                  sale.classList.remove('active-left');
                  //showProperties('sale')         
              }

          }
        },
        searchProperties(){
            if(this.search){
                 alert(this.search)
            }  
        }
    },
    mounted(){
     
    }
 }

</script>
