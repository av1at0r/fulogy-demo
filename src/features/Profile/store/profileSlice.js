const { createSlice } = require("@reduxjs/toolkit");
const {
  default: profileInfoStorage,
} = require("../../../utils/profileInfoStorage");

const initialState = {
  info: null,
};

const { reducer, actions } = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setInfo(state, action) {
      state.info = action.payload.info;
    },
  },
});

export default reducer;
export const { setInfo: setProfileInfo } = actions;

export const updateProfileInfoLocal = (profile) => (dispatch) => {
  try {
    profileInfoStorage.setProfile(profile);
    dispatch(actions.setInfo({ info: profile }));
  } catch {}
};
