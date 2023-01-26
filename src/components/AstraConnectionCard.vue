<template>
    <div class="flex flex-col p-4 bg-astra-tertiary text-white rounded-md gap-6">

        <div class="w-full flex justify-center text-xl font-bold">{{ connection.name }}</div>
        <div class="w-full flex flex-col gap-4 p-4 rounded-md bg-astra-quaternary">
            <div class="w-full flex justify-end text-xl font-bold">
                <i v-if="showConnectionData" class="fa-solid fa-eye-slash cursor-pointer"
                    @click="showConnectionData = false"></i>
                <i v-else class="fa-solid fa-eye cursor-pointer" @click="showConnectionData = true"></i>
            </div>
            <div class="w-full flex gap-5 items-center">
                <span>HOST:</span>
                <span class="font-bold truncate">
                    {{ showConnectionData? connection.host : "*".repeat(connection.host.length) }}
                </span>
            </div>
            <div class="w-full flex gap-5 items-center">
                <span>DATABASE ID:</span>
                <span class="font-bold truncate">
                    {{ showConnectionData? connection.databaseId : "*".repeat(connection.databaseId.length) }}
                </span>
            </div>
            <div class="w-full flex gap-5 items-center">
                <span>REGION:</span>
                <span class="font-bold truncate">
                    {{ showConnectionData? connection.region : "*".repeat(connection.region.length) }}
                </span>
            </div>
            <div class="w-full flex gap-5 items-center">
                <span>TOKEN:</span>
                <span class="font-bold truncate">
                    {{ showConnectionData? connection.token : "*".repeat(connection.token.length) }}
                </span>
            </div>
            <div class="w-full flex gap-5 items-center">
                <span>TYPE:</span>
                <span class="font-bold truncate">
                    {{ connection.production ? "PRODUCTION" : "DEVELOPMENT" }}
                </span>
            </div>
        </div>
        <div @click="connectToDB" class="w-full flex justify-center text-xl font-bold rounded-md bg-astra-contrast hover:bg-astra-secondary p-4 cursor-pointer transition-colors duration-300 ease-in-out">
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