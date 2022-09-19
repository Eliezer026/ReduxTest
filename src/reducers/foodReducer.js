import { ADD_FOOD, DELETE_FOOD, CALL_API, CALL_APISPECIAL } from '../actions/types';

const initialState = {
  foodList: [],
  dataapi:[],
  dataapispecial:[]
}

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FOOD:
      return {
        ...state,
        foodList: state.foodList.concat({
          key: Math.random(),
          name: action.data
        })
      };
    case DELETE_FOOD:
      return {
        ...state,
        foodList: state.foodList.filter((item) =>
          item.key !== action.key)
      };

    case CALL_API:
      return {
        ...state,
        dataapi:state.dataapi.concat({
          data:action.data
        })
      }
    case CALL_APISPECIAL:
      return {
        ...state,
        dataapispecial:[...state.dataapispecial,action.data]
      }
    default:
      return state;
  }
}

export default foodReducer;