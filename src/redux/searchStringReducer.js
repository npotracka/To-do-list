// action creators
export const updateSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });

export const searchStringReducer = (statePart = '', action) => {
  switch(action.type) {
    case 'UPDATE_SEARCHSTRING':
      return action.payload
    default:
      return statePart;
  }
}