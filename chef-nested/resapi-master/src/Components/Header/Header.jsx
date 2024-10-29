// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const {user,logOut}=useContext(AuthContext)
    const handelOut=()=>{
        logOut()
        .then(() => {
          alert('singout')
          }).catch((error) => {
           console.log(error)
          });
    }
    return (
        <div className="navbar bg-base-300">
            <a className="btn btn-ghost normal-case text-xl">Resepi Master </a>
               <Link className=' ms-2' to='/'>Home</Link>
               <Link className=' ms-2' to='/chef'>chef</Link>
               <Link className=' ms-2' to='/profile'>Profile</Link>
               <Link className=' ms-2' to=''>Contact</Link>
           {
             user ?
             <div>
                <button className='btn ms-2 btn-error' onClick={handelOut}>LogOut</button>
                <p className='ms-2'>{user.email}</p>
             </div>:
             <Link className=' ms-2' to='/login'>Login</Link>
             
           }
        </div>

    );
};

export default Header;