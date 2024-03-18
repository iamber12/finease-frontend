"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { setCookie, getCookie, deleteCookie } from "@/utils/useCookie";

export function useAuth(): AuthContext | null {
  return useContext(AuthContext);
}

export interface User {
  uuid: string;
  name: string;
  date_of_birth: Date;
  address: string;
  primary_role: string;
  email: string;
  password: string;
}

interface AuthContext {
  currentUser: User | null;
  getUser: () => Promise<void>;
  login: (user: User, token: string) => Promise<void>;
  signOut: () => Promise<void>;
  getToken: () => Promise<string | undefined>;
}

const AuthContext = createContext<AuthContext | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { push } = useRouter();

  const [currentUser, setCurrentUser] = useState<User | null>(null);

  async function login(user: User, token: string) {
    setCurrentUser({ ...user });
    await setCookie("user", JSON.stringify(user));
    await setToken(token);
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

  async function getToken() {
    const token = await getCookie("token");
    return token?.value;
  }

  async function getUser() {
    const token = await getToken();
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
