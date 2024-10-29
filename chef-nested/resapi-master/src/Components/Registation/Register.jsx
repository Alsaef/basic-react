// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
    const {creatAccount}=useContext(AuthContext)
    const navigate=useNavigate()
    let location = useLocation();
    const from=location.state?.from?.pathname||'/'
  const handelAccount = (event)=>{
    event.preventDefault()
    const email= event.target.email.value;
    const password= event.target.password.value;
    console.log(email,password)
    creatAccount(email,password)
    .then((result)=>{
        const user= result.user
        console.log(user)
        navigate(from,{replace:true})
    })
    .catch(error => console.log(error.message))
  }
    return (
        <div>
                        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handelAccount} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <hr className=' border-spacing-1 mb-3' />
      <Link to='/login'><p className=' text-center pb-3 font-semibold mt-2'>Login</p></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;