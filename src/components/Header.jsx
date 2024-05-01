import { useNavigate } from 'react-router-dom';
import {auth} from '../utils/FirebaseConfig'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO } from '../utils/constants';

const Header = () => {
  const dispatch=useDispatch();
  const user=useSelector((store)=>(store.user))
  const navigate=useNavigate();
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      
    }).catch((error) => {
      navigate("/error")
    });
  }
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {
          
          const {uid,email, displayName,photoURL} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          navigate("/browse")
          
        } else {
          dispatch(removeUser());
          navigate("/")
          
        }
    });
    //unsubscribe when component unmounts
    return ()=>unsubscribe();
  },[])
  return (
    <div className="absolute bg-gradient-to-b w-screen from-black py-2 px-8 z-10 flex justify-between">
        <img src={NETFLIX_LOGO} className="w-44" alt="logo" />
       {user&& (<div className="p-2 flex gap-3 ">
          <img src={user?.photoURL} alt='userLogo' className='w-12 h-12'/>
          <button onClick={handleSignOut} className="text-white p-2 bg-red-700 h-12" >Sign Out</button>
        </div>)
        }
    </div>
  )
}

export default Header