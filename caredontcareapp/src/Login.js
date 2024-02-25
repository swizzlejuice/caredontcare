import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';

export function SignupForm() {
  const { register, handleSubmit, formState: { errors }, setError } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const auth = getAuth();

    try {
      console.log(`Attempting to sign in with email: ${data.email}`); // Log the email
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate('/home');
    } catch (error) {
      console.error('Error logging in:', error.message);
      setError('firebase', { message: `Error logging in: ${error.code}` });
    }
  };

  
  return (
    <body>
    <div className="login-div">Sign in to continue
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="email-div">
          <label htmlFor="email">UW Email:</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@uw\.edu$/i,
                message: "Must be a valid UW email"
              }
            })}
          />
          {errors.email && <span className="login-error">{errors.email.message}</span>}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters"
              }
            })}
          />
          {errors.password && <span className="login-error">{errors.password.message}</span>}
        </div>

        <button className="login-btn" type="submit">Sign in</button>
        {errors.firebase && <span className="login-error">{errors.firebase.message}</span>}
      </form>
    </div>
    </body>
  );
}