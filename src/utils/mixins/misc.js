import { mapState, mapMutations } from "vuex"
import Swal from 'sweetalert2'

export const sidebarMixin = {
    data() {
        return {
            expand: true
        }
    }
}

export const topbarMixin = {
    data() {
        return {
            hidedata: true
        }
    }
}

export const connectionCard = {
    data() {
        return {
            showConnectionData: false,
        }
    },
    props: {
        connection: {}
    },
    methods: {
        ...mapMutations('astraModule', {

        }),
        connectToDB() {
   
        }
    }    
}