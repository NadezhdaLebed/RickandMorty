import { Characters } from './../interfaces/character';
import { Locations } from '../interfaces/location';
import { Episodes } from '../interfaces';
import { Info } from '../interfaces';

export interface ActionType {
    type: string;
    payload: any;
}

export interface IState {
    characters: CharacterState;
    locations: LocationState;
    episodes: EpisodeState;
}

export interface CharacterState {
    characters: Characters;
    info: Info;
    error: Response | any;
}

export interface LocationState {
    locations: Locations;
    info: Info;
    error: Response | any;
}

export interface EpisodeState {
    episodes: Episodes;
    info: Info;
    error: Response | any;
}