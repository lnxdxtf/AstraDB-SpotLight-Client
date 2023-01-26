<template >
    <div>
        <!-- Button menu - open offcanvas -->
        <div class="px-4 py-2 rounded-md bg-astra-tertiary items-center" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <i class="text-white fa-solid fa-bars"></i>
        </div>

        <!-- offcanvas -->
        <div class="offcanvas offcanvas-start fixed bottom-0 flex flex-col max-w-full bg-astra-light dark:bg-astra-dark invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 left-0 border-none w-96"
            tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header flex items-center justify-between p-4">
                <div class="flex flex-col items-center gap-2 my-5">

                    <img src="../assets/logo-sportflare-nobg.png" class="w-2/4">
                    <span class="items-center flex justify-center text-astra-primary text-base font-bold">
                        <span v-if="expand">ASTRADB SPOTLIGHT</span>
                        <span v-else><i class="fa-solid fa-database"></i></span>
                    </span>
                </div>
            </div>
            <div class="offcanvas-body flex-grow p-4 overflow-y-auto">

                <div class="w-full flex flex-col gap-4">
                    <div @click="expand = !expand" class="button-astra-menu">
                        <span v-if="expand">HOME</span>
                        <span v-else><i class="fa-solid fa-house"></i></span>
                    </div>
                    <div @click="expand = !expand" class="button-astra-menu">
                        <span v-if="expand">KEYSPACES</span>
                        <span v-else><i class="fa-solid fa-cloud"></i></span>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { sidebarMixin } from "../utils/mixins/misc.js"
export default {
    mixins: [sidebarMixin]
}
</script>

<style>
.button-astra-menu {
    @apply w-full py-2 flex items-center justify-center rounded-md bg-astra-tertiary hover:bg-astra-secondary text-white font-bold transition-colors duration-500 ease-out;
}
</style>