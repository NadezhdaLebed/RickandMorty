import { GET_CHARACTER_ITEMS_PENDING, GET_CHARACTER_ITEMS_FULFILLED, GET_CHARACTER_ITEMS_REJECTED } from '../../actions/character';
import { CharacterState, ActionType } from '../../interfaces';
import { loadState } from '../../store/localStorage';


const initialState = loadState();
const { info = null } = initialState || {};

const defaultState: CharacterState = {
    characters: [],
    info,
    error: null,
}

export default (state = defaultState, action: ActionType) => {
    switch (action.type) {
        case GET_CHARACTER_ITEMS_PENDING:
            return {
                ...state,
            };
        case GET_CHARACTER_ITEMS_FULFILLED:
            return handleGetItems(state, action.payload);
        case GET_CHARACTER_ITEMS_REJECTED:
            return {
                ...state,
                characters: [],
                error: action.payload.response
            };
        default: 
            return state;
    };
};

const handleGetItems = (state: CharacterState, payload: any) => ({
    ...state,
    characters: payload.body.results,
    info: payload.body.info,
});
