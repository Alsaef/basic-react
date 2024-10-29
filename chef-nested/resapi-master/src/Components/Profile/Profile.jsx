// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Profile = () => {
    const { user,logOut } = useContext(AuthContext)
    const handelOut=()=>{
        logOut()
        .then(() => {
          alert('singout')
          }).catch((error) => {
           console.log(error)
          });
    }
    return (
        <div>
            {
                user ?
                    <div className=' mx-80 mt-20'>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                            <figure><img src={user.photoURL} /></figure>
                            <p className=" font-semibold text-center">{user.displayName}</p>
                                <h2 className=" font-semibold text-center">{user.email}</h2>
                                <button className='btn ms-2 btn-error' onClick={handelOut}>LogOut</button>
                            </div>
                        </div>
                    </div> :
                    <div className=' mx-60 mt-56'>
                        <progress className="progress w-56"></progress>
                    </div>
            }
        </div>
    );
};

export default Profile;