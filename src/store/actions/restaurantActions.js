export const createRestaurant = (restaurant) => {
  return (dispatch, getState) => {
    //make async call to database
    dispatch({ type: 'CREATE_RESTAURANT', restaurant });
  };
};
