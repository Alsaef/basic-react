// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Profile = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
            <img src={user.photoURL} alt="" />
            <h2>{user.email}</h2>
        </div>
    );
};

export default Profile;