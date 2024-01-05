import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../Utils/Validate";
import { auth } from "../Utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        // Validate the form
        const message = checkValidateData(email.current.value, password.current.value)
        setErrorMessage(message)
        if (message) return;

        //Sign In/ Sign Up Logic
        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(
                            addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));

                    }).catch((error) => {
                        // An error occurred
                        setErrorMessage(error.message);
                    });
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + errorMessage)
                    // ..
                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + errorMessage);
                });
        }

    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div>
                <img className="absolute"
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                    alt="background" />
            </div>
            <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-xl bg-opacity-80"
                onSubmit={(e) => { e.preventDefault() }}>
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (<input ref={name} type="text" placeholder="Full Name" className="p-2 my-4 w-full bg-stone-700" />)}
                <input
                    ref={email}
                    type="text"
                    placeholder="Email Address"
                    className="p-2 my-4 w-full bg-stone-700"
                />
                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="p-2 my-4 w-full bg-stone-700"
                />
                <p className="text-red-500">{errorMessage}</p>
                <button className="p-4 my-6 bg-red-700 w-full rounded-lg"
                    on onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="my-8  text-slate-500">
                    {isSignInForm ? "New to Netflix? " : "Already Registered? "}
                    <span className="text-white cursor-pointer"
                        onClick={toggleSignInForm}>{isSignInForm ? "Sign Up Now" : "Sign In Now"}</span> </p>

            </form>
        </div>
    )
}

export default Login;