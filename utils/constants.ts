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

export const SIGNUP_POST_LINK = "http://18.226.186.2:8000/v1/auth/register";
export const SIGNIN_POST_LINK = "http://18.226.186.2:8000/v1/auth/login";
export const PROPOSAL_POST_LINK = "http://18.226.186.2:8000/v1/loan/proposals/";
export const PROPOSAL_GET_LINK = "http://18.226.186.2:8000/v1/loan/proposals/";
export const REQUESTS_GET_LINK = "http://18.226.186.2:8000/v1/loan/request/";
export const REQUESTS_DELETE_LINK = "http://18.226.186.2:8000/v1/loan/request/";
