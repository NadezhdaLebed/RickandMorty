import { GET_LOCATION_ITEMS_FULFILLED, GET_LOCATION_ITEMS_PENDING, GET_LOCATION_ITEMS_REJECTED } from '../../actions/location';
import { LocationState, ActionType } from '../../interfaces';
import { loadState } from '../../store/localStorage';

const initialState = loadState();
const { info = null } = initialState || {};

const defaultState: LocationState = {
  locations: [],
  info,
  error: null,
}

export default (state = defaultState, action: ActionType) => {
  switch (action.type) {
    case GET_LOCATION_ITEMS_PENDING:
      return {
        ...state,
      };
    case GET_LOCATION_ITEMS_FULFILLED:
      return handleGetItems(state, action.payload);
    case GET_LOCATION_ITEMS_REJECTED:
      return {
        ...state,
        error: action.payload.response
      };
    default:
      return state;
  };
};

const handleGetItems = (state: LocationState, payload: any) => ({
  ...state,
  locations: payload.body.results,
  info: payload.body.info,
});