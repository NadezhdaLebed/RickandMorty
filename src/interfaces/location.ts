export interface Location {
    id: number;
    name: string;
    type: Location;
    dimension: string;
    residents?: string[];
    url?: string;
    created?: string;
}

export type Locations = Location[];