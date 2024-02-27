import { range } from "./utils";

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const years = range(1900, new Date().getFullYear() + 1, 1);

export const SIGNUP_POST_LINK = "http://54.204.68.167:8000/v1/auth/register";
export const SIGNIN_POST_LINK = "http://54.204.68.167:8000/v1/auth/login";
export const PROPOSAL_POST_LINK = "http://54.204.68.167:8000/v1/loan/proposals";
