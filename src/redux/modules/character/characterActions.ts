import superagent from 'superagent';
import { GET_CHARACTER_ITEMS_PENDING, GET_CHARACTER_ITEMS_REJECTED, GET_CHARACTER_ITEMS_FULFILLED } from '../../actions/character';

export const getCharacterItems = (page: number) => async (dispatch: any) => {
    dispatch({ type: GET_CHARACTER_ITEMS_PENDING });
    try {
        const payload = await superagent
        .get('https://rickandmortyapi.com/api/character')
        .query({ page: page + 1 })
        return dispatch({ type: GET_CHARACTER_ITEMS_FULFILLED, payload })
    } catch (error) {
        return dispatch({ type: GET_CHARACTER_ITEMS_REJECTED, payload: error })
    }
};