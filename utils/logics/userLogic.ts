// lib/logics/profileLogic.ts
import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import toast from "react-hot-toast"; // import toast
import { signOut } from "firebase/auth";

export const useUserInfo = () => {
    const [user, setUser] = useState<any>({});
    const [loading, setLoading] = useState(true);

    // GETTING CURRENT USER
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
            if (authUser) {
                const userDocRef = doc(db, "students", authUser.uid);
                const userDoc = await getDoc(userDocRef);
                if (userDoc.exists()) {
                    setUser({ uid: authUser.uid, ...userDoc.data() });
                } else {
                    setUser({ uid: authUser.uid });
                }
            }
            setLoading(false)
        });

        return () => unsubscribe();
    }, []);

    // HANDLE LOG OUT 
    const handleLogOutUser = async () => {
        try {
            await signOut(auth)
            toast.success("Signed out successfully");
            window.location.reload()
        } catch (error) {
            console.error("Logout Failed:", error);
            toast.error("Unable to sign out. Please try again.");
        }
    }
    return {
        user,
        loading,
        handleLogOutUser
    }
};
