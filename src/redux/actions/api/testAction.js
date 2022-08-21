const testAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "UPDATE_USER_STATE",
      payload: "DATA TO RETURN IS HERE",
    });
  } catch (error) {
    dispatch({
      type: "UPDATE_USER_STATE",
      payload: "DATA TO RETURN IS HERE",
    });
  }
};

export default testAction;
