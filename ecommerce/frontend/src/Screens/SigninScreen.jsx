import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  {Link } from "react-router-dom";
import { signIn } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function SigninScreen(props) {
  const dispatch = useDispatch();
  const [email , setEmail] = useState('');
  const [password, setPassword] = useState('')

  const redirect = props.location.search ? props.location.search.split('=')[1] : '/';
  const userSignin = useSelector(state => state.userSignin);
  const {userInfo ,loading,error} = userSignin;

  const  submitHandler= (e)=>{
      e.preventDefault();
      dispatch(signIn(email,password))
  }
  useEffect(() => {
    if(userInfo){
      props.history.push(redirect)
    }
  }, [props.history,redirect,userInfo])
  return (
    <div>
        <form className="form" onSubmit={submitHandler}> 
           <div>
             <h1>Sign In</h1>
           </div>
           {loading && <LoadingBox></LoadingBox>}
           {error && <MessageBox variant="danger">{error}</MessageBox>}
           <div>
             <label htmlFor="email">Email address</label>
             <input type="email"
                  id="email"
                  placeholder="Enter Email"
                  required
                  onChange={(e)=>setEmail(e.target.value)}              
             />
           </div>
           <div>
             <label htmlFor="password">Password </label>
             <input type="password"
                  id="password"
                  placeholder="Enter password"
                  required
                  onChange={(e)=>setPassword(e.target.value)}              
             />
           </div>
           <div>
             <label htmlFor=""></label>
             <button className="button" type="submit">Sign In</button>
           </div>
           <div>
             <label htmlFor=""></label>
             <div>
               New customer ?  <Link to="/register">Create your account</Link>
               
             </div>
           </div>
        </form>
    </div>
  )
}
