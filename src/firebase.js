import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyC7Zq6ZF5xpXRhzEUFzCQS_r9lh7_mjdqI",
  authDomain: "netflix-clone-38764.firebaseapp.com",
  projectId: "netflix-clone-38764",
  storageBucket: "netflix-clone-38764.firebasestorage.app",
  messagingSenderId: "477294750093",
  appId: "1:477294750093:web:26048a0fe53333fdbbf5c4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)


const signup = async (name, email, password)=> {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)

        const user = res.user;
        await addDoc(collection(db, "user"),{
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.log(error);
        // alert("You Already Have Accout")
        toast.error(error.code.split('/')[1].split('-').join('  '))
    }
}


const login = async (email,password)=>{
    try {
       await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join('  '))
    }
}

const logOut = ()=>{
    signOut(auth);
}


export {auth, db, login, signup, logOut}