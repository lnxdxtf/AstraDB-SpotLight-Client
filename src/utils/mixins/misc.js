import { mapState, mapMutations } from "vuex"
import Swal from 'sweetalert2'

export const sidebarMixin = {
    data() {
        return {
            expand: true,
        }
    },
    computed: {
        ...mapState('astraModule', {
            $authenticated: 'authenticated',
        })
    },
    methods: {
        ...mapMutations('astraModule', {
            $removeAstraClient: 'REMOVE_ASTRA_CLIENT'
        }),
        setPage(page) {
            this.expand = false
            this.$router.push(page)
        },
        disconect() {
            this.setPage('/')
            this.$removeAstraClient()
        }
    }
}

export const topbarMixin = {
    data() {
        return {
            hidedata: true
        }
    },
    computed: {
        ...mapState('astraModule', {
            $astraClient: 'astraClient'
        })
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
            $removeConnection: 'REMOVE_CONNECTION',
            $setAstraClient: 'SET_ASTRA_CLIENT'
        }),
        connectClient() {
            this.$setAstraClient(this.connection)
            this.$router.push('/astradb/keyspaces')
        }
    }
}

export const addConnectionCard = {
    data() {
        return {
            connection: {
                name: "",
                databaseId: "",
                region: "",
                xCassandraToken: ""
            }
        }
    },
    methods: {
        ...mapMutations('astraModule', {
            $addConnection: 'ADD_CONNECTION'
        }),
        checkNull() {
            const keys = Object.keys(this.connection)
            let fieldsNull = []
            for (const key of keys) {
                if (this.connection[key] == "") fieldsNull.push(key)
            }
            if (fieldsNull.length > 0) {
                Swal.fire({
                    icon: "error",
                    title: "Connection Null",
                    text: `This fields cant be null: ${fieldsNull.join(", ")}`,
                })
                return false
            }
            return true
        },
        addConnection() {
            if (this.checkNull()) {
                this.$addConnection(this.connection)
                this.clearConnection()
            }
        },
        clearConnection() {
            this.connection = {
                production: false,
                name: "",
                host: "",
                databaseId: "",
                region: "",
                token: ""
            }
        },
    }
}