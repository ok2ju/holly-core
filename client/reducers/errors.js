import { IFNO_RECEIVED, ERROR_RECEIVED } from '../actions';

const initialState = {
  list: [],
  entities: {},
};

export function errors(state = initialState, action) { // eslint-disable-line
  switch (action.type) {
    case ERROR_RECEIVED:
      return {
        ...state,
        list: [...state.list, action.payload],
        entities: { ...state.entities, [action.payload.id]: action.payload },
      };
    case IFNO_RECEIVED:
      return {
        ...state,
        list: [...state.list, action.payload],
        entities: { ...state.entities, [action.payload.id]: action.payload },
      };
    default:
      return state;
  }
}
