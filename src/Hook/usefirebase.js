import initAuthentication from "../Firebase/init.firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { useEffect, useState } from "react";

// init firebase
initAuthentication();

// create firebase authentication code base
const useFirebase = () => {
    // create user state
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    // get firebase auth
    const auth = getAuth();

    // create provider
    const googleProvider = new GoogleAuthProvider();

    // sign in with provider
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // sign out handler
    const handleSignOut = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setError(error.message)
        });
    }

    // get current user from auth
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user);
                setUser(user);
            }
        })
    }, [auth])


    return {
        user,
        error,
        signInUsingGoogle,
        handleSignOut
    }
}

export default useFirebase;