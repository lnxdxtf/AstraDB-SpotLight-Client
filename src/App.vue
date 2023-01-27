<template>
  <div>
    <div class="flex flex-col gap-4 w-screen h-screen p-4 bg-astra-light dark:bg-astra-dark">
      <div class="w-full flex gap-4">
        <AstraSideBar />
        <AstraTopBar />
      </div>
      <router-view
        class="animate__animated animate__fadeIn rounded-md hide-scroll bg-black dark:bg-opacity-60 bg-opacity-50 w-full h-[90vh] flex flex-col p-4 overflow-x-hidden overflow-y-auto"></router-view>
    </div>
    <AstraModalContainer />
  </div>
</template>

<script>
import AstraSideBar from "./components/AstraSideBar.vue"
import AstraTopBar from "./components/AstraTopBar.vue"
import AstraModalContainer from "./components/AstraModalContainer.vue"
export default {
  components: {
    AstraSideBar,
    AstraTopBar,
    AstraModalContainer
  }
}
</script>