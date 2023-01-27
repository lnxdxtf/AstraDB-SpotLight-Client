import store from '../../store/store';

export async function getKeySpaces_API() {
    const host = getClient().host
    return await (await fetch(`${host}/keyspaces`, { method: 'GET', headers: createHeader() })).json();
}
export async function getTables_API(keyspace: string) {
    const host = getClient().host
    return await (await fetch(`${host}/keyspaces/${keyspace}/tables`, { method: 'GET', headers: createHeader() })).json();
}

export function getDataTable_API(keyspace: string, table: string) {
    const host = getClient().host
    return Promise.all([
        fetch(`${host}/keyspaces/${keyspace}/tables/${table}/columns`, { method: 'GET', headers: createHeader() }),
        fetch(`${host}/keyspaces/${keyspace}/tables/${table}/rows`, { method: 'GET', headers: createHeader() })
    ]).then(async response => {
        return {
            columns: await response[0].json(),
            rows: await response[1].json(),
        }
    })
}

function getClient() {
    return store.state.astraModule.astraClient.connection;
}
function createHeader(): Headers {
    return new Headers({
        "X-Cassandra-Token": getClient().xCassandraToken,
        "Content-type": "application/json; charset=UTF-8"
    })
}

