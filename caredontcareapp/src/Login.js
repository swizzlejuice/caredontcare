import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import React from 'react';

export function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/profile`; 
    navigate(path);
  }
  
  return (
    <body>
    <div className="login-div">Sign in to continue
      <form className="login-form" onSubmit={handleSubmit(routeChange)}>
        <div className="email-div">
          <label htmlFor="email">UW Email:</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
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
      </form>
    </div>
    </body>
  );
}