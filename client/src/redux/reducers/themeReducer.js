const initialTheme = window.localStorage.getItem("theme");

const themeReducer = (state = initialTheme, action) => {
  switch (action.type) {
    case "DEFAULT":
      return state;
    case "UPDATE_THEME":
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;
