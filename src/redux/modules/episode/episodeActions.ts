import superagent from 'superagent';
import { GET_EPISODE_ITEMS_FULFILLED, GET_EPISODE_ITEMS_PENDING, GET_EPISODE_ITEMS_REJECTED } from '../../actions/episode';

export const getEpisodeItems = (page: number) => async (dispatch: any) => {
    dispatch({ type: GET_EPISODE_ITEMS_PENDING });
    try {
        const payload = await superagent
        .get('https://rickandmortyapi.com/api/episode')
        .query({ page: page + 1 })
        return dispatch({ type: GET_EPISODE_ITEMS_FULFILLED, payload })
    } catch (error) {
        return dispatch({ type: GET_EPISODE_ITEMS_REJECTED, payload: error })
    }
};