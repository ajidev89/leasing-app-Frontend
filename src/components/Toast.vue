<template>
    <div class=" bg-white shadow absolute top-0 right-0 p-3 rounded border-l-4 w-64 m-4" :class="{ 'border-yellow-400' : type == 'warning','border-red-400' : type == 'danger','border-green-400' : type == 'success'}">
        <div class="flex space-x-2" :class="{ 'text-yellow-400' : type == 'warning','text-red-400' : type == 'danger','text-green-400' : type == 'success'}" >
            <div class="flex items-center" >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
            </div>
            <div class="text-gray-700" >
                <h1 class="text-base font-bold" >
                    <span v-if="type == 'warning'" >Warning Alert</span>  
                    <span v-else-if ="type == 'danger'" >Danger Alert</span>  
                    <span v-else-if ="type == 'success'" >Success Alert</span>
                </h1>
                <p class="text-sm" >{{ msg }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:[
        'type','msg'
        ]
}
</script>

<style>

</style>