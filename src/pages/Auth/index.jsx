import React from 'react';
import './Auth.scss';
import SignIn from 'components/Auth/SignIn';
import SignUp from 'components/Auth/SignUp';

const Auth = () => {
  return (
    <div className="auth">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
