import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user)

    const handleLogOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            
        }).catch((error) => {
            // An error happened.
        });

    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
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
    }, [])

    return (
        <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between  ">
            <img className="w-44"
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="logo" />
            {user && (
            <div className="flex gap-4">
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