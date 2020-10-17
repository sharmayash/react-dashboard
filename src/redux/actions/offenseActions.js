import { LOAD_DATA } from "../types";

export const loadData = (modifiedData) => (dispatch) => {
  dispatch({
    type: LOAD_DATA,
    payload: modifiedData,
  });
};
