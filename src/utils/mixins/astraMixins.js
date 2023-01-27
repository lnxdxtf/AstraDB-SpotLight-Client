import { mapState, mapMutations } from 'vuex'

export const keyspacesMixin = {
    computed: {
        ...mapState('astraModule', {
            $astraClient: 'astraClient'
        })
    },
    methods: {
        // ...mapMutations()
        setKeySpace(keyspace) {
            this.$astraClient.keySpace = keyspace
            this.$router.push(`/astradb/${keyspace}/tables`)
        }
    },
    beforeMount() {
        this.$astraClient.getkeySpaces()
    },
}

export const tablesMixin = {
    computed: {
        ...mapState('astraModule', {
            $astraClient: 'astraClient'
        })
    },
    methods: {
        setTable(table) {
            this.$astraClient.table = table
            this.$router.push(`/astradb/${this.$astraClient.keySpace}/${table}`)
        }
    },
    beforeMount() {
        this.$astraClient.getTables()
    }
}

export const tableMixin = {
    computed: {
        ...mapState('astraModule', {
            $astraClient: 'astraClient'
        })
    },
    beforeMount() {
        this.$astraClient.getDataTable()
    }
}