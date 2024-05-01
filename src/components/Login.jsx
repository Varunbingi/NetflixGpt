import { useState,useRef } from "react";
import Header from "./Header";
import { validateData } from "../utils/validateData";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { auth } from "../utils/FirebaseConfig";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG, USER_AVATAR } from "../utils/constants";

const Login=()=>{
    const dispatch=useDispatch();
    
    const [isLoggedIn,setIsLoggedIn]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null);

    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null)
    const handleButton=()=>{
       const message= validateData(email.current.value,password.current.value)
       setErrorMessage(message)
    
       if(!isLoggedIn){
        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
       // Signed up 
         const user = userCredential.user;
         updateProfile(user, {
            displayName: name.current.value, photoURL: USER_AVATAR
          }).then(() => {
            const {uid,email,displayName,photoURL}=auth.currentUser;
            dispatch(
                addUser({
                    uid:uid,
                    email:email,
                    displayName:displayName,
                    photoURL:photoURL

                })
            );
            
          }).catch((error) => {
            setErrorMessage(error.message)
          });
         })
         .catch((error) => {
             const errorCode = error.code;
             const errorMessage = error.message;
             setErrorMessage(errorCode+" "+errorMessage)
             
         });
       }
       else{
        signInWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          
          
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+" "+errorMessage)
        });
       }
      
    }
   
    const handleClick=()=>{
        setIsLoggedIn(!isLoggedIn);
    }
    return(
        <div>
            <Header/>
            <div className="absolute  ">
                <img className="min-h-[100vh]" src={BG_IMG}alt="bg-img" />
            </div>
            <form onClick={(e)=>e.preventDefault()} className="md:w-3/12 w-1/2 mt-48 mx-auto right-0 flex flex-col left-0 absolute p-12  bg-black bg-opacity-85 rounded-md text-white space-y-6">
                <h1 className="font-semibold text-3xl ">{isLoggedIn?"Sign In": "Sign Up"}</h1>
                {!isLoggedIn && <input ref={name} type="text" placeholder="Full Name" className="p-2 bg-gray-700 "/>}
                <input  ref={email} type="text" placeholder="Email  Address" className="p-2 bg-gray-700" />
                <input ref={password} type="password" placeholder="password" className="p-2 bg-gray-700 " />
                <p className="text-xl text-red-500">{errorMessage}</p>
                <button onClick={handleButton} className="p-2 bg-red-700 rounded-md font-semibold">{isLoggedIn?"Sign In": "Sign Up"}</button>
                <p>New to Netflix? <span className="text-blue-600 cursor-pointer"
                onClick={handleClick}>{isLoggedIn?"Sign Up":"Sign In"}</span> Now</p>
            </form>
        </div>
    )
}
export default Login;