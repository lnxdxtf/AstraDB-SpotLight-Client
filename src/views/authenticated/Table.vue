<template>
    <div>
        <div v-if="!$astraClient.loading" class="w-full-h-full flex flex-col gap-10">
            <div class="w-full flex justify-center text-white font-bold text-3xl p-4">
                {{ $astraClient.keySpace }} / {{ $astraClient.table }}
            </div>
            <div class="flex flex-col text-white rounded-md p-4 bg-astra-quaternary text-sm font-light">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <thead class="border-astra-primary border-b sticky-top">
                                    <tr>
                                        <th v-for="col of $astraClient.dataTable.columns"
                                            class="font-bold px-0.5 py-4 text-left text-base">
                                            {{ col.name }}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="row of $astraClient.dataTable.rows.rows"
                                        class="border-astra-primary border-b">
                                        <td v-for="column in $astraClient.dataTable.columns" class="w-[100px] p-0.5">
                                            {{ row[column.name] }}   
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <AstraLoader v-else />
    </div>
</template>
<script>
import { tableMixin } from '../../utils/mixins/astraMixins'
import AstraLoader from '../../components/AstraLoader.vue'
export default {
    mixins: [tableMixin],
    components: {
        AstraLoader
    }
}
</script>
