<template>
  <div class="fixed z-40 h-full w-full">
        <div @click="scrollTop()" class="bg-purple-700 absolute bottom-0 right-0 h-14 w-14 flex justify-center items-center">
             <arrow-up-icon size="1.5x" stroke="#F3F4F6" class="custom-class"></arrow-up-icon>
        </div>
    </div>
</template>

<script>
import ArrowUpIcon  from 'vue-feather-icon/components/arrow-up.vue'
export default {
    components:{
        ArrowUpIcon 
    },
    methods:{
        scrollTop(){
            let top = document.getElementById("app");
            top.scrollIntoView();
        }
    },
    mounted(){
    }
}
</script>

<style>

</style>