<template>
    <div class="w-full h-fit flex gap-5 justify-evenly items-center px-4 py-2 bg-astra-tertiary rounded-md text-white">
        <span class="flex gap-2 items-center">
            <i class="fa-solid fa-server"></i>
            <span v-if="$astraClient">Connection Name: {{ $astraClient.connection.name }}</span>
            <span v-else>No connection selected</span>
        </span>

    </div>
</template>

<script>
import { topbarMixin } from '../utils/mixins/misc'
export default {
    mixins: [topbarMixin]
}
</script>
