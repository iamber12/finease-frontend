import { useState } from "react";

const SignIn = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div>
      <form>
      <h3 className="h3 mb-4">Welcome Back!</h3>
          <p className="md:mb-6 md:pb-6 mb-4 pb-4 bb-dashed text-sm md:text-base">
            Sign in to your account and join us
          </p>
        <div>
          <label htmlFor="email">
            Enter Your Email ID
          </label>
          <input
            type="email"
            placeholder="Enter Your Email"
            id="email"
            required
          />
          <label
            htmlFor="password">
            Enter Your Password
          </label>
          <div>
            <input
              type={showPass ? "text" : "password"}
              placeholder="Enter Your Password"
              id="password"
              required
            />
          </div>
          <div className="mt-8 flex gap-6">
            <button type="submit" className="btn px-5">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
