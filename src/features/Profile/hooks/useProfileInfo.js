import { useMemo } from "react";
import { useSelector } from "react-redux";

export default function useProfileInfo() {
  const info = useSelector((state) => state.profile.info);

  const shortName = useMemo(() => {
    if (!info) {
      return "";
    }
    const [lastName = "", firstName = ""] = (info.name || "").split(" ");

    return `${lastName} ${firstName.charAt(0).toUpperCase()}.`;
  }, [info]);

  return { info, shortName };
}
