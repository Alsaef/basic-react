// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaCaretSquareLeft } from 'react-icons/fa';
import './Header.css'
const Header = () => {
    const {user,SingOutGoogle}=useContext(AuthContext)
    const out=()=>{
        SingOutGoogle()
        .than(()=>{
            alert('SingOut')
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div>
            <div className="navbar bg-base-300">
                <a className="btn btn-ghost normal-case text-xl">Phone Hunter</a>
                <div>
                    <Link className='mx-2' to='/'>Home</Link>
                    <Link className='mx-2' to='/oppo'>Oppo</Link>
                    <Link className='mx-2' to='/samsung'>Samsung</Link>
                    {user ?
                    <div className=' flex items-center p-1'>
                        <p className='p-3'><span>{user.email}</span></p>
                        <button onClick={out} className="btn btn-error"><FaCaretSquareLeft /> SignOut</button>
                        <div className='px-2'>
                          <Link to='/profile'>  <img className=' w-12 rounded' src={user.photoURL} alt="" /></Link>
                        </div>
                    </div>:
                     <Link className='mx-2' to='/login'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;