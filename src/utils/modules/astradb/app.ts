import { Connection } from "../../store/modules/astraModule"

export default class AstraDBRestCLIENT {
    connection: Connection = {
        name: "",
        host: "",
        databaseId: "",
        region: "",
        xCassandraToken: ""
    }

    constructor(connection: Connection) {
        this.connection = connection
    }


}