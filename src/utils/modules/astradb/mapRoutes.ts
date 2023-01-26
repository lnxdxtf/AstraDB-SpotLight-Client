import store from '../../store/store';



export function getNameSpaces() {
    const host = getClient().host
    fetch(`${host}/schemas/namespaces`,)
}

function getClient() {
    return store.state.astraModule.astraClient.connection;
}
function createHeader() {
    return {
        "X-Cassandra-Token": getClient().xCassandraToken
    }
}