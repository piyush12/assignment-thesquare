import { SELECT_APARTMENT } from '../constants';

export const selectApartement = (value) => {
  return {
    type: SELECT_APARTMENT,
    payload: value,
  };
};
