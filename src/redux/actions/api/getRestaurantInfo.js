import api from "../../../api";

const getRestaurantInfo = () => async (dispatch) => {
  try {
    const res = await api.get("/single-restaurant?restaurant_id=3");
    dispatch({
      type: "GET__RESTAURANT__INFO",
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: "GET__RESTAURANT__INFO",
      payload: error.response.data,
    });
  }
}

export default getRestaurantInfo;