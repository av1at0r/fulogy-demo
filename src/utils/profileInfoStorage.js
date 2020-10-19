const storage = typeof window !== "undefined" ? localStorage : {};
const key = "profile";

export default {
  getProfile() {
    const profileString = storage.getItem(key);
    try {
      return JSON.parse(profileString);
    } catch {
      return null;
    }
  },
  setProfile(profileObject) {
    storage.setItem(key, JSON.stringify(profileObject));
  },
};
