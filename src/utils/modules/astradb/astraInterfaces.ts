export interface KeySpace {
    name: string;
    datacenters: Datacenter[];
}

interface Datacenter {
    name: string;
    replicas: number
}