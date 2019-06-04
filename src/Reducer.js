const dState = {logoIsLoading: false, theme: "reload"};

export default (state = dState, action) => {
  switch (action.type) {
    case "changeTheme":
      return {
        logoIsLoading: !state.logoIsLoading,
        theme: state.theme === "loading" ? "reload" : "loading",
      };      
    default:
      return state;
    }
}