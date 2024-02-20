"use client";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SignIn = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div>
      <form>
        <div>
          <h3>Welcome Back!</h3>
          <p>
            Sign in to your account and join us
          </p>
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
            <span
              onClick={() => setShowPass(!showPass)}>
              {showPass ? <IconEye /> : <IconEyeOff />}
            </span>
          </div>

          <Link href="#">
            Forgot Password
          </Link>
          <p>
            Don&apos;t have an account?{" "}
            <Link href="/auth/sign-up">
              Signup
            </Link>
          </p>
          <div>
            <button type="submit">
              Login
            </button>
          </div>
        </div>
      </form>
      <div>
        <Image src="/images/auth.png" alt="img" width={533} height={560} />
      </div>
    </div>
  );
};

export default SignIn;
