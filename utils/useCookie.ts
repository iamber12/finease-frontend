"use server";
import { cookies } from "next/headers";

interface GetCookie {
  name: string;
  value: string;
}

export async function setCookie(name: string, value: string) {
  cookies().set(name, value);
}

export async function getCookie(name: string) {
  const pair = cookies().get(name);
  return pair;
}

export async function deleteCookie(name: string) {
  cookies().delete(name);
}
