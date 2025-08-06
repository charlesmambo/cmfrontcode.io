import React, { useState } from 'react';
import LoginForm from '../../assets/components/userDetails/LoginForm';
import SignUp from '../../assets/components/userDetails/SignUp';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false); // state to toggle views

  return (
    <section>
      {isSignUp ? (
        <SignUp onSwitchToLogin={() => setIsSignUp(false)} />
      ) : (
        <LoginForm onSwitchToSignUp={() => setIsSignUp(true)} />
      )}
    </section>
  );
};

export default Login;
