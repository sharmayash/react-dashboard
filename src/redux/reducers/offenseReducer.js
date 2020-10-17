import { LOAD_DATA } from "../types";

const initialState = {
  isLoading: true,
  totalNFS: null,
  totalOffenses: null,
  totalHomicides: null,
  totalAggAssault: null,
  NoOfOffnsByYear: [],
  NoOfOffnsByClearenceGrp: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        isLoading: !action.payload,
        totalNFS: action.payload.totalNFS,
        totalOffenses: action.payload.totalNoOfOffns,
        totalHomicides: action.payload.totalHomicides,
        totalAggAssault: action.payload.totalAggAssault,
        NoOfOffnsByYear: action.payload.convertToArr.slice(19, 46),
        NoOfOffnsByClearenceGrp: action.payload.convertToArr2,
      };
    default:
      return state;
  }
};
