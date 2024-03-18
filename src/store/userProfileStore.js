import { create } from "zustand";

const userProfifeStore = create((set) => ({
    userProfile: null,
    setUserProfile: (userProfile) => set({userProfile}),
    // addPost
}));

export default userProfifeStore 