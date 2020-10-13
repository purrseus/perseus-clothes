import React from 'react';
import { useForm } from 'react-hook-form';

import './SignUp.scss';

const SignUp = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
      <div>with your email and password</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="displayName"
          placeholder="Display Name"
          ref={register({ required: true })}
        />
        {errors.displayName && <p>Display name is required!</p>}

        <input
          type="text"
          name="email"
          placeholder="Email"
          ref={register({ required: true })}
        />
        {errors.email && <p>Email is required!</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={register({ required: true, maxLength: 10 })}
        />
        {errors.password && <p>Password is required!</p>}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          ref={register({ required: true, maxLength: 10 })}
        />
        {errors.confirmPassword && <p>Confirm password is required!</p>}

        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default SignUp;
