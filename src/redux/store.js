import { createStore } from 'redux';

const reduser = (
  state = {
    contacts: [],
    filter: '',
  }
) => state;

export const store = createStore(reduser);
