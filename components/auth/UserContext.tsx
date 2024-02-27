"use client";
import { useLocalStorage } from "@/utils/useLocalStorage";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
  const { setItem, getItem } = useLocalStorage();
  const { push } = useRouter();

  const [currentUser, setCurrentUser] = useState<User | null>(null);

  function login(user: User): void {
    console.log(user);
    setCurrentUser({ ...user.payload.user });
    setItem("user", JSON.stringify(user.payload.user));
    setItem("token", user.payload.jwt_token);
  }

  function signOut(): void {
    setCurrentUser(null);
    setItem("user", "");
    setItem("token", "");
    push("/auth/sign-in");
  }

  function setToken(token: string): void {
    setItem("token", token);
  }

  function getToken(): string | null {
    const token = getItem("token");
    if (!token){
      push("/auth/sign-in");
    }
    return token;
  }

  function getUser() {
    const x = getItem("user");
    if (x) {
      return JSON.parse(x);
    } else {
      return currentUser;
    }
  }

  useEffect(() => {
    const x = getItem("user");
    if (x) {
      const user = JSON.parse(x);
      setCurrentUser({ ...user });
      setItem("user", JSON.stringify(user));
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
