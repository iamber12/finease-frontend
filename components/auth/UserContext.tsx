"use client";
import { useLocalStorage } from "@/utils/useLocalStorage";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { setCookie,getCookie } from "@/utils/useCookie";

export function useAuth() {
  return useContext(AuthContext);
}

export interface User {
  id: string | undefined;
  name: string | undefined;
  email: string | undefined;
  authToken?: string | undefined;
}

interface AuthContext {
  currentUser: User | null;
  getUser: () => void;
  login: (user: User) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContext | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { push } = useRouter();

  const [currentUser, setCurrentUser] = useState<User | null>(null);

  function login(user: User): void {
    console.log(user);
    setCurrentUser({ ...user.payload.user });
    setCookie("user", JSON.stringify(user.payload.user));
    setToken(user.payload.jwt_token);
  }

  function signOut(): void {
    setCurrentUser(null);
    setCookie("user", "");
    setCookie("token", "");
    push("/auth/sign-in");
  }

  function setToken(token: string): void {
    setCookie("token", token);
  }

  function getToken(): string | null {
    const token = getCookie("token");
    if (!token){
      push("/auth/sign-in");
    }
    return token;
  }

  function getUser() {
    const x = getCookie("user");
    if (x) {
      return JSON.parse(x);
    } else {
      return currentUser;
    }
  }

  useEffect(() => {
    const x = getCookie("user");
    if (x) {
      const user = JSON.parse(x);
      setCurrentUser({ ...user });
      setCookie("user", JSON.stringify(user));
    }
  }, []);

  const value = {
    currentUser,
    getToken,
    getUser,
    login,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
