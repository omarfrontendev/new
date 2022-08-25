import api from "../../../api";

const getAllNotifications = () => async (dispatch) => {
  try {
    const res = await api.get("/get-user-notifications");
    dispatch({
      type: "GET__ALL__NOTIFICATIONS",
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: "GET__ALL__NOTIFICATIONS",
      payload: error.response.data,
    });
  }
};

export default getAllNotifications;