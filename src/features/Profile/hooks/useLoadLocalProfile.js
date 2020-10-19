import { useEffect } from "react";
import { useDispatch } from "react-redux";
import profileInfoStorage from "../../../utils/profileInfoStorage";
import { setProfileInfo } from "../store/profileSlice";

export default function useLoadLocalProfile() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProfileInfo({ info: profileInfoStorage.getProfile() }));
  }, []);
}
