const allNotificationsReducer = (restaurants = [], action) => {
  switch (action.type) {
    case "GET__ALL__NOTIFICATIONS":
      return [...restaurants, ...action.payload];
    case "CLEAR__ALL__NOTIFICATIONS":
      return [...action.payload];
    default:
      return [...restaurants];
  }
};

export default allNotificationsReducer;