import { useState } from "react";
import Header from "./Header";

const Login=()=>{
    const [isLoggedIn,setIsLoggedIn]=useState(true);
   
    const handleClick=()=>{
        setIsLoggedIn(!isLoggedIn);
    }
    return(
        <div>
            <Header/>
            <div className="absolute  ">
                <img className="min-h-[100vh]" src="https://assets.nflxext.com/ffe/siteui/vlv3/c7f07b68-7989-4ff7-a31e-11c17dcc2fea/fcf685b8-3f9f-42d8-9af3-4bb86fa5a3b8/IN-en-20240422-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="bg-img" />
            </div>
            <form  className="md:w-3/12 w-1/2 mt-48 mx-auto right-0 flex flex-col left-0 absolute p-12  bg-black bg-opacity-85 rounded-md text-white space-y-6">
                <h1 className="font-semibold text-3xl ">{isLoggedIn?"Sign In": "Sign Up"}</h1>
                {!isLoggedIn && <input type="text" placeholder="Full Name" className="p-2 bg-gray-700 "/>}
                <input  type="text" placeholder="Email  Address" className="p-2 bg-gray-700" />
                <input  type="password" placeholder="password" className="p-2 bg-gray-700 " />
                <button className="p-2 bg-red-700 rounded-md font-semibold">{isLoggedIn?"Sign In": "Sign Up"}</button>
                <p>New to Netflix? <span className="text-blue-600 cursor-pointer"
                onClick={handleClick}>{isLoggedIn?"Sign Up":"Sign In"}</span> Now</p>
            </form>
        </div>
    )
}
export default Login;