<template>
    <div class="bg-gradient-to-r from-purple-400 via-purple-800 to-blue-500 h-screen flex justify-center items-center">
        <div class="w-96 md:w-100">
            <Card>
                <slot></slot>
            </Card>
        </div>
    </div>
</template>

<script>

import Card from "@/components/Card.vue";

export default {
    components:{
        Card
    }

}
</script>

<style>

</style>