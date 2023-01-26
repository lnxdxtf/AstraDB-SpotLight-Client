<template>
    <div class="w-full h-fit flex gap-5 justify-evenly items-center px-4 py-2 bg-astra-tertiary rounded-md text-white">
        <span class="flex gap-2 items-center">
            <i class="fa-solid fa-server"></i>
            <span>HOST: {{  }}</span>
        </span>
        <span class="flex gap-2 items-center">
            <i class="fa-solid fa-id-card"></i>
            <span>DATABASE ID: {{  }}</span>
        </span>
        <span class="flex gap-2 items-center">
            <i class="fa-solid fa-database"></i>
            <span>DATABASE NAME: {{  }}</span>
        </span>
        <span class="flex gap-2 items-center">
            <i class="fa-solid fa-boxes-stacked"></i>
            <span>TOTAL KEYSPACES: {{  }}</span>
        </span>
    </div>
</template>

<script>
export default {
    
}
</script>
