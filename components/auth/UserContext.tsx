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
    setCurrentUser({ ...user });
    setItem("user", JSON.stringify(user));
  }

  function signOut(): void {
    setCurrentUser(null);
    setItem("user", "");
    push("/auth/sign-in");
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
      login({ ...user });
    }
  }, []);

  const value = {
    currentUser,
    getUser,
    login,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
