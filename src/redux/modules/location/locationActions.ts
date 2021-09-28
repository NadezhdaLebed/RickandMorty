import superagent from 'superagent';
import { GET_LOCATION_ITEMS_FULFILLED, GET_LOCATION_ITEMS_PENDING, GET_LOCATION_ITEMS_REJECTED } from '../../actions/location';

export const getLocationItems = (page: number) => async (dispatch: any) => {
    dispatch({ type: GET_LOCATION_ITEMS_PENDING });
    try {
        const payload = await superagent
        .get('https://rickandmortyapi.com/api/location')
        .query({ page: page + 1 })
        return dispatch({ type: GET_LOCATION_ITEMS_FULFILLED, payload })
    } catch (error) {
        return dispatch({ type: GET_LOCATION_ITEMS_REJECTED, payload: error })
    }
};