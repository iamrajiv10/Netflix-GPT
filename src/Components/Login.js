import { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return(
        <div>
            <Header />
            <div>
                <img className="absolute"
                src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_small.jpg" 
                alt="background" />
            </div>
            <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-xl bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (<input type="text" placeholder="Full Name" className="p-2 my-4 w-full bg-stone-700" />)}
                <input type="text" placeholder="Email Address" className="p-2 my-4 w-full bg-stone-700" />
                <input type="password" placeholder="Password" className="p-2 my-4 w-full bg-stone-700" />
                <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="my-8  text-slate-500">
                    {isSignInForm?"New to Netflix? " : "Already Registered? "}
                    <span  className="text-white cursor-pointer"
                    onClick={toggleSignInForm}>{isSignInForm ? "Sign Up Now" : "Sign In Now"}</span> </p>

            </form>
        </div>
    )
}

export default Login;