/** @format */

const initialState = {
  user: null,
};

console.log('initialState', initialState);

const authReducer = (state = initialState, action) => {
  console.log('action', action.type);
  switch (action.type) {
    case 'ADD_USER_DATA':
      console.log('actionss', action.payload);
      return {
        ...state,
        user: action.payload,
      };

    case 'REMOVE_USER_DATA':
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};
export default authReducer;
