import AstraDBRestCLIENT from "../../modules/astradb/app";
export const astraModule = {
    namespaced: true,
    state: () => ({
        astraClient: null,
        authenticated: false,
        connections: [],
    }),
    mutations: {
        SET_ASTRA_CLIENT(state: any, payload: Connection): void {
            state.astraClient = new AstraDBRestCLIENT(payload);
            state.authenticated = true;
        },
        REMOVE_ASTRA_CLIENT(state: any): void {
            state.astraClient = null;
            state.authenticated = false;
        },
        async SET_CONNECTIONS(state: any,) {
            state.connections = [];
            const jsonCon = await (await fetch('../../../astradb_connections.json')).json();
            const connectionsFormated = jsonCon.connections.map((con: any) => {
                const host = { host: `https://${con.databaseId}-${con.region}.apps.astra.datastax.com/api/rest/v1` }
                return Object.assign(con, host)
            })
            state.connections = connectionsFormated;
        },
        ADD_CONNECTION(state: any, payload: Connection): void {
            const host = { host: `https://${payload.databaseId}-${payload.region}.apps.astra.datastax.com/api/rest/v1` }
            Object.assign(payload, host)
            state.connections.push(payload);
        },
        REMOVE_CONNECTION(state: any, payload: Connection): void {
            if (payload.host == state.astraClient.connection.host) state.astraClient = {}
            const newConnections = state.connections.filter((c: Connection) => c.host !== payload.host);
            state.connections = newConnections;
        }
    }

}

export interface Connection {
    name: string;
    host: string;
    databaseId: string;
    region: string;
    xCassandraToken: string;
}