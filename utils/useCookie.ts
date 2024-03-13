"use server";
import { cookies } from "next/headers";

interface GetCookie {
  name: string;
  value: string;
}

export async function setCookie(name: string, value: string) {
  cookies().set(name, value);
}

export const getCookie = (name: string): GetCookie | undefined => {
  return cookies().get(name);
};

export async function deleteCookie(name: string) {
  cookies().delete(name);
}
