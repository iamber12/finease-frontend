import { getCookie } from "./useCookie";

export const isLower = (text: string): Array<string> | null => {
  let lowerCaseLetters = /[a-z]/g;
  return text.match(lowerCaseLetters);
};

export const isUpper = (text: string): Array<string> | null => {
  let upperCaseLetters = /[A-Z]/g;
  return text.match(upperCaseLetters);
};

export const isNumeric = (text: string): Array<string> | null => {
  let numbers = /[0-9]/g;
  return text.match(numbers);
};

export const isLength = (text: string): boolean => {
  return text.length >= 8;
};

export const isSpecial = (text: string): Array<string> | null => {
  let special = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return text.match(special);
};

export const isEqual = (text: string, text1: string): boolean => {
  return text === text1;
};

export const getYear = (date: Date) => {
  return date.getFullYear();
};
export const getMonth = (date: Date) => {
  return date.getMonth();
};

export const range = (
  start: number,
  stop: number,
  step: number
): Array<number> =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

export const dateTimeFormat = (startDate: Date): string => {
  const yyyy = startDate.getFullYear();
  let mm = startDate.getMonth() + 1; // Months start at 0!
  let dd = startDate.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = dd + "/" + mm + "/" + yyyy;
  return formattedToday;
};

export const getRandomInt = (min: number, max: number): number => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
};

export async function fetchHandler(
  url: string,
  type: string,
  data: any | undefined,
  headers: any = {}
) {
  const res = await fetch(url, {
    method: type,
    headers: { ...headers },
    body: data ? JSON.stringify(data) : "",
  });

  if (!res.ok) {
    return res.json().then((res) => {
      throw new Error(res.meta.message);
    });
  }

  const ret = await res.json();
  return ret;
}
