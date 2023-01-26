<template>
    <div class="w-full h-full flex flex-col gap-10">
        <div class="w-full flex justify-center text-white font-bold text-3xl p-4">ASTRADB CONNECTIONS</div>
        <div class="w-full flex justify-between text-white font-bold text-xl items-center">
            <span
                class="flex gap-4 items-center cursor-pointer rounded-md hover:bg-astra-secondary p-2 transition-colors duration-300 ease-linear"
                data-bs-toggle="modal" data-bs-target="#addAstraConnection">
                Add Connection
                <i class="fa-solid fa-plus"></i>
            </span>
            <span @click="howCreateAConnection"
                class="flex gap-4 items-center cursor-pointer p-2 rounded-md bg-astra-quaternary">
                How To Save a Connection
                <i class="fa-solid fa-circle-question"></i>
            </span>
        </div>
        <div class="grid grid-cols-4 gap-4">
            <AstraConnectionCard v-for="connection in $connections" :key="connection.host" :connection="connection" />
        </div>
    </div>
</template>
<script>
import homeMixin from '../utils/mixins/homeMixin.js'
import AstraConnectionCard from '../components/AstraConnectionCard.vue'
export default {
    mixins: [homeMixin],
    components: { AstraConnectionCard }
}
</script>
