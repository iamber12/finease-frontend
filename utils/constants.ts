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
export const PROPOSAL_GET_LINK = "http://18.226.186.2:8000/v1/loan/proposals/available";
export const PROPOSALWITHREQUEST = "http://18.226.186.2:8000/v1/loan/proposals/my";

export const REQUESTS_GET_LINK = "http://18.226.186.2:8000/v1/loan/requests/available";
export const REQUESTS_DELETE_LINK = "http://18.226.186.2:8000/v1/loan/requests/";
export const REQUESTS_POST_LINK = "http://18.226.186.2:8000/v1/loan/requests/";
export const REQUESTS_UNDER_PROPOSAL = "http://18.226.186.2:8000/v1/loan/requests/received";


export const REQUESTS_CONTROL = "http://18.226.186.2:8000/v1/loan/requests/request/";


export const USER_DATA = "http://18.226.186.2:8000/v1/user/";