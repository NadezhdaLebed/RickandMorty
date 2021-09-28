import { GET_EPISODE_ITEMS_FULFILLED, GET_EPISODE_ITEMS_PENDING, GET_EPISODE_ITEMS_REJECTED } from '../../actions/episode';
import { EpisodeState, ActionType } from '../../interfaces';
import { loadState } from '../../store/localStorage';

const initialState = loadState();
const { info = null } = initialState || {};

const defaultState: EpisodeState = {
  episodes: [],
  info,
  error: null,
}

export default (state = defaultState, action: ActionType) => {
  switch (action.type) {
    case GET_EPISODE_ITEMS_PENDING:
      return {
        ...state,
      };
    case GET_EPISODE_ITEMS_FULFILLED:
      return handleGetItems(state, action.payload);
    case GET_EPISODE_ITEMS_REJECTED:
      return {
        ...state,
        error: action.payload.response
      };
    default: 
      return state;
  };
};

const handleGetItems = (state: EpisodeState, payload: any) => ({
  ...state,
  episodes: payload.body.results,
  info: payload.body.info,
});
