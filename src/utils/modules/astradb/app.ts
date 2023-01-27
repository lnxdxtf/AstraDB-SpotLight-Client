import { Connection } from "../../store/modules/astraModule"
import { getKeySpaces_API, getTables_API, getDataTable_API } from './mapRoutes'
import { KeySpace } from "./astraInterfaces"

export default class AstraDBRestCLIENT {
    connection: Connection = {
        name: "",
        host: "",
        databaseId: "",
        region: "",
        xCassandraToken: ""
    }

    keySpaces: KeySpace[] = []
    tables: string[] = []

    keySpace: string = ''
    table: string = ''

    dataTable: any = {}

    loading: boolean = false

    constructor(connection: Connection) {
        this.connection = connection
    }

    async getkeySpaces() {
        this.loading = true
        this.keySpaces = (await getKeySpaces_API()).map((ks: string) => {
            return {
                name: ks,
                datacenters: [{
                    name: this.connection.region,
                    replicas: 3
                }]
            }
        })
        this.loading = false
    }

    async getTables() {
        this.loading = true
        this.tables = await getTables_API(this.keySpace)
        this.loading = false
    }

    async getDataTable() {
        this.loading = true
        this.dataTable = await getDataTable_API(this.keySpace, this.table)
        this.loading = false
    }



}