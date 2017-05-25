import { MESSAGE_RECEIVED } from '../actions';

const initialState = {
  list: [],
  entities: {},
};

export const messages = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE_RECEIVED:
      return {
        ...state,
        list: [...state.list, action.payload.id],
        entities: { ...state.entities, [action.payload.id]: action.payload },
      };
    default:
      return state;
  }
};

const getAllMessages = state =>
  state.messages.list.map(itemId => state.messages.entities[itemId]);

export const getMessages = (state, filter) => {
  const allMessages = getAllMessages(state);

  switch (filter) {
    case 'all':
      return allMessages;
    case 'info':
      return allMessages.filter(message => message.type === 'info');
    case 'error':
      return allMessages.filter(message => message.type === 'error');
    default:
      throw new Error(`Unknown filter ${filter}`);
  }
};
