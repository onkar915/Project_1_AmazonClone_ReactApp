import React, { useState } from 'react'
import './Login.css'
import {Link,useHistory} from "react-router-dom"
import { auth } from './firebase';
//1.redirect use history
//2. listineing to user is looged in or loggege out push in to data layer
function Login() {

//history
const history = useHistory();
//state short term memory
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
//map the value to the input


const login = event   => {

    event.preventDefault();//this stop the refresh

//do the login logic
auth.signInWithEmailAndPassword(email, password)
.then((auth) => {
//looged in redirect to homepage
history.push('/');

})
.catch((e) => alert(e.message));

}

const register = event => {

    event.preventDefault();//this stop the refresh

//do the regisetr logic
auth.createUserWithEmailAndPassword(email ,password)
.then(auth => {
//create a user <nd logged in, redirect to homepage
history.push('/');
})
.catch((e)=> alert(e.message));

};










    return (
      <div className='login'>
        <Link to='/'>
          <img
            className='login__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          />
        </Link>
        <div className='login__container'>
          <h1>Sign in</h1>

          <form>
            <h5>Email</h5>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type='email'
            />
            <h5>Password</h5>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type='password'
            />
            <button
              onClick={login}
              type='submit'
              className='login__signInButton'
            >
              Sign in
            </button>
          </form>

          <p>
            By signing-in you agree to the Conditions of Use & Sale.
            Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <button onClick={register} className='login__registerButton'>
            Create Your Account
          </button>
        </div>
      </div>
    );
};

export default Login
