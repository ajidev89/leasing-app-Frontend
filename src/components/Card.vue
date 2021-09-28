<template>
    <div class="card text-gray-700 p-4">
        <div class="bg-white shadow-lg overflow-hidden rounded-md">
            <div v-if="show">
                 <img :src="img" :alt="name">
                <div class="text-lg p-4">
                    <h5 class="font-semibold">{{ name }}</h5>
                    <p class="text-base mt-2"> {{ description }}</p>
                    <div class="flex justify-between mt-2">
                        <div>
                            <img :src="seller" class="rounded-full h-9 w-9" :alt="seller">
                        </div>
                        <a href="#" class="m-2 text-base font-semibold hover:text-purple-700">Contact Seller</a>
                    </div>
                </div>
            </div>
            <div v-else class="p-6" >
                <slot></slot> 
            </div>
                  
        </div> 
    </div>
</template>

<script>
export default {
    props:[
        'name','seller', 'description','img','show'
    ]
}
</script>

<style>

</style>