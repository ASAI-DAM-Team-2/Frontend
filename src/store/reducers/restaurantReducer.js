const initState = {
  restaurants: [
    { id: 1, name: 'Amigo rest', img: 'path', address: 'Olivia 365' },
    { id: 2, name: 'Tondo rest', img: 'path', address: 'Olivia 365' },
    { id: 3, name: 'Miamia rest', img: 'path', address: 'Olivia 365' },
  ],
};
const restaurantReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_RESTAURANT':
      console.log('created restaurant', action.restaurant);
  }
  return state;
};
export default restaurantReducer;
