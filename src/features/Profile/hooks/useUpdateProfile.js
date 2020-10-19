import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import sharedApi from "../../../../shared/api";

import { updateProfileInfoLocal } from "../store/profileSlice";

export default function useUpdateProfile() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();

  const updateProfile = useCallback(async (profile) => {
    setLoading(true);
    setSuccess(false);
    try {
      await sharedApi("/api/update-profile", {
        method: "POST",
        json: profile,
      });
      setSuccess(true);
      dispatch(updateProfileInfoLocal(profile));
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, updateProfile, success };
}
