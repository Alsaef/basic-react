// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const {SingInGoogle}=useContext(AuthContext)
    const navigate = useNavigate();
    const create=()=>{
        SingInGoogle()
        .then((result)=>{
            const user = result.user;
            console.log(user)
            navigate('/')
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div className=' flex items-center justify-center mt-24 flex-col'>
            <h2 className=' text-4xl text-center p-4'>Sign In With Google</h2>
             <button onClick={create}  className="btn btn-outline btn-accent"><FaGoogle /> Sign In With Google</button>
        </div>
    );
};

export default Login;