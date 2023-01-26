import { mapState, mapMutations, mapActions } from 'vuex'
import Swal from 'sweetalert2'

const homeMixin = {
    computed: {
        ...mapState('astraModule', {
            $connections: 'connections',
        })
    },

    methods: {
        ...mapMutations('astraModule', {
            $setConnections: 'SET_CONNECTIONS'
        }),
        howCreateAConnection() {
            Swal.fire({
                icon: 'info',
                title: 'How to save a connection',
                text: 'To save local: you can add a connection in the connections array of the astradb_connections.json file',
                showConfirmButton: false,
                showCancelButton: false
            })
        }
    },

    async beforeMount() {
        this.$setConnections()
    }
}

export default homeMixin