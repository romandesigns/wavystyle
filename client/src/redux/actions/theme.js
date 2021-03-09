// Set theme
export const updateTheme = (payload) => (dispatch) => {
  dispatch({ type: "UPDATE_THEME", payload: payload });
};
