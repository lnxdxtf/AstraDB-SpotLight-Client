import { createApp } from 'vue'
import './style.css'
import 'tw-elements';
import 'animate.css';
import store from './utils/store/store'
import { router } from "./utils/routes/router"
import App from './App.vue'

function AstraSpotLightStart(): void {
    const AstraSpotLightApp = createApp(App)
    AstraSpotLightApp.use(router())
    AstraSpotLightApp.use(store)
    AstraSpotLightApp.mount('#app')
}

AstraSpotLightStart()