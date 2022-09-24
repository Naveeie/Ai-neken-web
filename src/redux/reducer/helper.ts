export const GET_COMMAND = 'GET_COMMAND';

export const getCommand = (state = {}, action: any) => {
  switch (action.type) {
    case GET_COMMAND:
      state = { ...state, command: action.payload };
      break;
    default:
      break;
  }
  return state;
};
