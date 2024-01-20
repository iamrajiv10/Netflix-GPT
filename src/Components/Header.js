import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../Utils/constants";
import { toggleGptSearchView } from "../Utils/GptSlice";
import { changeLanguage } from "../Utils/configSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user)
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

    const handleLogOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            
        }).catch((error) => {
            // An error happened.
        });

    }

    useEffect(()=>{
        const unsbscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
            navigate("/browser")
            } else {
              // User is signed out
              dispatch(removeUser());
              navigate("/");
            }
          });

          //Unsiubscribe when component unmounts
          return () => unsbscribe();
    }, [])

    const handleGptSearchClick = () => {
        // Toggle GPT Search component
        dispatch(toggleGptSearchView());
    };

    const handleLanguagechange = (e) => {
        dispatch(changeLanguage(e.target.value))
    }

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col justify-between
        md:flex-row  ">
            <img className="w-44 mx-auto
            md:mx-0"
                src= {LOGO}
                alt="logo" />
            {user && (
            <div className="flex gap-4 mx-auto
            md:mx-0">
                {showGptSearch && (
                <select className="p-2 h-10 bg-red-600 text-white rounded-lg"
                onChange={handleLanguagechange}>
                    {SUPPORTED_LANGUAGES.map((lang)=>
                    <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
                </select>
                ) }
                <button className="p-2 h-10 bg-red-600 text-white rounded-lg"
                onClick={handleGptSearchClick}>
                    {showGptSearch? "Home Page" : "GPT Search"}</button>
                <img className="h-10 rounded-lg"
                src={user?.photoURL}
                    alt="user" />
                <button
                    className="font-bold border-2 h-1/2 px-2 text-white rounded-lg"
                    onClick={handleLogOut}>Log Out</button>
            </div>
            )}

        </div>
    )
}
export default Header;