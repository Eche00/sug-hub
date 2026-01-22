'use client'
import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export const useUserInfo = () => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    // GET CURRENT USER
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
            try {
                if (authUser) {
                    const userDocRef = doc(db, "students", authUser.uid);
                    const userDoc = await getDoc(userDocRef);

                    if (userDoc.exists()) {
                        setUser({ uid: authUser.uid, ...userDoc.data() });
                    } else {
                        setUser({ uid: authUser.uid });
                    }
                } else {
                    // 👇 CRITICAL FIX
                    setUser(null);
                }
            } catch (error) {
                console.error("Error fetching user:", error);
                setUser(null);
            } finally {
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, []);

    // HANDLE LOG OUT
    const handleLogOutUser = async () => {
        try {
            await signOut(auth);
            setUser(null);
            router.push("/");
            toast.success("Signed out successfully");
        } catch (error) {
            console.error("Logout Failed:", error);
            toast.error("Unable to sign out. Please try again.");
        }
    };

    return {
        user,
        loading,
        handleLogOutUser,
    };
};
