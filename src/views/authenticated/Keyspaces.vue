<template>
    <div>
        <div v-if="!$astraClient.loading" class="w-full-h-full flex flex-col gap-10">
            <div class="w-full flex justify-center text-white font-bold text-3xl p-4">KEYSPACES</div>
            <div class="grid grid-cols-4 p-4 gap-4 rounded-md text-white">
                <div v-for="ks of $astraClient.keySpaces" @click="setKeySpace(ks.name)"
                    class="flex flex-col gap-4 p-4 rounded-md bg-astra-tertiary hover:scale-105 hover:bg-astra-secondary cursor-pointer">
                    <div class="flex w-full justify-center text-xl font-bold">{{ ks.name }}</div>
                    <div v-for="dt of ks.datacenters" class="flex flex-col gap-2 rounded-md p-2 bg-astra-quaternary">
                        <div class="w-full flex gap-5 items-center">
                            <span>DATACENTER</span>
                            <span>{{ dt.name }}</span>
                        </div>
                        <div class="w-full flex gap-5 items-center">
                            <span>REPLICAS</span>
                            <span>{{ dt.replicas }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <AstraLoader v-else />
    </div>
</template>
<script>
import { keyspacesMixin } from '../../utils/mixins/astraMixins'
import AstraLoader from '../../components/AstraLoader.vue'
export default {
    mixins: [keyspacesMixin],
    components: {
        AstraLoader
    }
}
</script>
