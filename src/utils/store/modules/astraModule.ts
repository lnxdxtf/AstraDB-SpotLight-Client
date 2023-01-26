export const astraModule = {
    namespaced: true,
    state: () => ({
        databaseID: '',
        databaseRegion: '',
        applicationToken: '',
        authenticated: false,
        connections: [],
    }),
    mutations: {
        SET_DATABASE_ID(state: any, payload: string): void {
            state.databaseID = payload;
        },
        SET_DATABASE_REGION(state: any, payload: string): void {
            state.databaseRegion = payload;
        },
        SET_APPLICATION_TOKEN(state: any, payload: string): void {
            state.applicationToken = payload;
        },
        SET_AUTHENTICATED(state: any, payload: boolean): void {
            state.authenticated = payload;
        },
        async SET_CONNECTIONS(state: any,) {
            state.connections = [];
            const jsonCon = await (await fetch('../../../astradb_connections.json')).json();
            state.connections = jsonCon.connections;
        },
        ADD_CONNECTION(state: any, payload: any): void {
            state.connections.push(payload);
        },
        REMOVE_CONNECTION(state: any, payload: Connection): void {
            const newConnections = state.connections.filter((c: Connection) => c.host != payload.host);
            state.connections = newConnections;
        }
    }

}

interface Connection {
    production: boolean;
    name: string;
    host: string;
    databaseId: string;
    region: string;
    token: string;
}