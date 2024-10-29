/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation  } from 'react-router-dom';

const Private = ({children}) => {
    const {user,loding}=useContext(AuthContext)
    const location = useLocation();
    if (loding) {
        return (
           <div className=' mx-60 mt-56'>
            <progress className="progress w-56"></progress>
           </div>
        )
    }
    if(user){
        return children
    }
    
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default Private;