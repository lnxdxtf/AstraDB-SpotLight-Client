<template>
    <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="addAstraConnection" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog relative w-auto pointer-events-none">
            <div
                class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto text-white bg-astra-dark bg-clip-padding rounded-md outline-none text-current">
                <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 rounded-t-md">
                    <span class="w-full text-xl font-bold text-center text-white">ADD CONNECTION</span>
                    <button type="button"
                        class="btn-close box-content w-4 h-4 p-1 text-white font-bold border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline"
                        data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body relative p-4 flex flex-col gap-5 text-white">
                    <div class="flex flex-col w-full h-full gap-4 p-4 bg-astra-quaternary rounded-md">
                        <div class="w-full flex gap-4 items-center">
                            <span class="whitespace-nowrap">NAME:</span>
                            <input type="text" v-model="connection.name"
                                class="bg-transparent outline-none border-b-astra-light w-full truncate">
                        </div>
                        <div class="w-full flex gap-4 items-center">
                            <span class="whitespace-nowrap">DATABASE ID:</span>
                            <input type="text" v-model="connection.databaseId"
                                class="bg-transparent outline-none border-b-astra-light w-full truncate">
                        </div>
                        <div class="w-full flex gap-4 items-center">
                            <span class="whitespace-nowrap">REGION:</span>
                            <input type="text" v-model="connection.region"
                                class="bg-transparent outline-none border-b-astra-light w-full truncate">
                        </div>
                        <div class="w-full flex gap-4 items-center">
                            <span class="whitespace-nowrap">X-CASSANDRA-TOKEN:</span>
                            <input type="text" v-model="connection.xCassandraToken"
                                class="bg-transparent outline-none border-b-astra-light w-full truncate">
                        </div>

                    </div>
                    <div @click="addConnection" data-bs-dismiss="modal" aria-label="Close"
                        class="w-full p-4 flex justify-center font-bold bg-astra-contrast hover:bg-astra-secondary cursor-pointer rounded-md">
                        Add
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { addConnectionCard } from '../utils/mixins/misc'
export default {
    mixins: [addConnectionCard]
}
</script>
