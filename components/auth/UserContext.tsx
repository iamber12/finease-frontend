"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { setCookie, getCookie, deleteCookie } from "@/utils/useCookie";

export function useAuth() {
  return useContext(AuthContext);
}

export interface User {}

export interface ResponseInter {
  payload: {
    user?: {};
    jwt_token: string;
  };
}

interface AuthContext {
  currentUser: User | null;
  getUser: () => void;
  login: (user: User) => void;
  signOut: () => void;
  getToken: () => void;
}

const AuthContext = createContext<AuthContext | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { push } = useRouter();

  const [currentUser, setCurrentUser] = useState<User | null>(null);

  async function login(user: ResponseInter) {
    setCurrentUser({ ...user.payload.user });
    await setCookie("user", JSON.stringify(user.payload.user));
    await setToken(user.payload.jwt_token);
  }

  async function signOut() {
    setCurrentUser(null);
    await deleteCookie("user");
    await deleteCookie("token");
    push("/auth/sign-in");
  }

  async function setToken(token: string) {
    await setCookie("token", token);
  }

  async function getToken(): string | undefined {
    const token = await getCookie("token");
    return token?.value;
  }

  async function getUser() {
    const token = getToken();
    if (token) {
      const x = await getCookie("user");
      if (x?.value) {
        return JSON.parse(x.value);
      } else {
        if (currentUser) {
          return currentUser;
        } else {
          return undefined;
        }
      }
    } else {
      return undefined;
    }
  }

  useEffect(() => {
    async function asyncuser() {
      const user = await getUser();
      setCurrentUser({ ...user });
    }

    asyncuser();
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
