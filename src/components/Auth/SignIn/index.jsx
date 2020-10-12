import React from 'react';
import { useForm } from 'react-hook-form';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

import './SignIn.scss';
import { uiConfig } from 'services/firebase.config';

const SignIn = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="sign-in">
      <h1>Sign In</h1>
      <div>with your email and password</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="email" placeholder="Email" ref={register({ required: true })} />
        {errors.email && <p>Email is required!</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={register({ required: true, maxLength: 10 })}
        />
        {errors.password && <p>Password is required!</p>}

        <div className="submit">
          <a href="/sign-in">Forgotten password?</a>
          <input type="submit" value="Sign In" />
        </div>

        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
      </form>
    </div>
  );
};

export default SignIn;
