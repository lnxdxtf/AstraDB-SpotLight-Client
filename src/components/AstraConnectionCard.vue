<template>
    <div class="flex flex-col p-4 bg-astra-tertiary text-white rounded-md gap-6">

        <div class="w-full flex justify-center text-xl font-bold items-center">
            <span class="w-full flex justify-center">{{ connection.name }}</span>
            <i @click="$removeConnection(connection)"
                class="cursor-pointer fa-solid fa-square-xmark text-red-500 flex justify-end"></i>
        </div>

        <div class="w-full flex flex-col gap-4 p-4 rounded-md bg-astra-quaternary">
            <div class="w-full flex justify-end text-xl font-bold">
                <i v-if="showConnectionData" class="fa-solid fa-eye-slash cursor-pointer"
                    @click="showConnectionData = false"></i>
                <i v-else class="fa-solid fa-eye cursor-pointer" @click="showConnectionData = true"></i>
            </div>
            <div class="w-full flex gap-5 items-center">
                <span class="whitespace-nowrap">HOST:</span>
                <span class="font-bold truncate">
                    {{ showConnectionData? connection.host : "*".repeat(connection.host.length) }}
                </span>
            </div>
            <div class="w-full flex gap-5 items-center">
                <span class="whitespace-nowrap">DATABASE ID:</span>
                <span class="font-bold truncate">
                    {{ showConnectionData? connection.databaseId : "*".repeat(connection.databaseId.length) }}
                </span>
            </div>
            <div class="w-full flex gap-5 items-center">
                <span class="whitespace-nowrap">REGION:</span>
                <span class="font-bold truncate">
                    {{ showConnectionData? connection.region : "*".repeat(connection.region.length) }}
                </span>
            </div>
            <div class="w-full flex gap-5 items-center">
                <span class="whitespace-nowrap">X-CASSANDRA-TOKEN:</span>
                <span class="font-bold truncate">
                    {{ showConnectionData? connection.xCassandraToken : "*".repeat(connection.xCassandraToken.length) }}
                </span>
            </div>
        </div>
        <div @click="connectClient"
            class="w-full flex justify-center text-xl font-bold rounded-md bg-astra-contrast hover:hue-rotate-30 p-4 cursor-pointer transition-all duration-300 ease-in-out">
            CONNECT
        </div>
    </div>
</template>
<script>
import { connectionCard } from '../utils/mixins/misc'
export default {
    mixins: [connectionCard]
}
</script>