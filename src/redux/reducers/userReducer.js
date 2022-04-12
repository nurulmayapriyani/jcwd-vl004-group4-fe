const INIT_STATE = {
  id: null,
  name: null,
  email: "",
  username: "",
  password: "",
  phone: null,
  status: "",
  is_active: true,
  createdAt: "",
  updatedAt: "",
};

export const authUserLogin = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "USER_LOGIN_SUCCESS":
      return { ...state, ...action.payload };
    case "USER_LOGOUT_SUCCESS":
      return { ...INIT_STATE };
    default:
      return state;
  }
};
