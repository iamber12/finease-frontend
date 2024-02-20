import { useState } from "react";

const SignIn = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div>
      <form>
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
