import { createStore } from 'vuex'
import { astraModule } from './modules/astraModule'

const store = createStore({
    modules: {
        astraModule
    }
})

export default store;