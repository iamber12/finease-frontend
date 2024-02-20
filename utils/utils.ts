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
