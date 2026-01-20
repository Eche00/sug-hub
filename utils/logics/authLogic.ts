import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, } from "firebase/auth";
import { arrayUnion, collection, doc, getDocs, serverTimestamp, setDoc, updateDoc, } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { auth, db } from "@/lib/firebase";

export const HandleRegisteration = async (formdata: any) => {
    const {
        email,
        password,
        firstName,
        lastName,
        type
    } = formdata;
    const allowedTypes = ['student'];

    if (!allowedTypes.includes(type)) {
        throw new Error('Invalid account type');
    }
    try {

        //  Create new Auth user
        const userCresidentials = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCresidentials.user;


        //  Save user to Firestore
        await setDoc(doc(db, "students", user.uid), {
            email,
            firstName,
            lastName,
            type,
            createdAt: serverTimestamp(),
        });

        toast.success("User Registered Successfully ");
        return user;

    } catch (error: any) {
        console.error("Registration Failed:", error);


        toast.error("User Registration Failed ");

        throw error;
    }
};



export const HandleLogin = async (formData: any) => {
    const { email, password } = formData;

    try {
        await signInWithEmailAndPassword(auth, email, password)
        toast.success("Login Successfully");
    } catch (error) {
        console.error('Login Failed:', error);
        toast.error("Login Failed(Invalid email or Password)");
        throw error;
    }
}


export const ResetPassword = async (resetEmail: string) => {
    try {
        // Send reset email
        await sendPasswordResetEmail(auth, resetEmail);
        toast.success("Reset Email sent.");
    } catch (error: any) {
        console.error("Reset Email Failed:", error);

        let errorMessage = "Failed to send reset email.";
        if (error.code === "auth/invalid-email") {
            errorMessage = "Invalid email address.";
        }
        toast.error(errorMessage);
        throw error;
    }
};
