import { SELECT_APARTMENT } from '../constants';

const initialState = {
  activeSlide: 0,
};

export default function apartementReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_APARTMENT:
      return { ...state, activeSlide: action.payload };
    default:
      return state;
  }
}
