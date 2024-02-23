"use client";
import React, { useState, useRef, createRef } from "react";
import PasswordRules from "@/components/auth/SignUp/PasswordRules";
import {
  isLength,
  isLower,
  isNumeric,
  isSpecial,
  isUpper,
  isEqual,
  getYear,
  getMonth,
} from "@/utils/utils";
import Dropdown from "@/components/shared/Dropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import { SIGNUP_POST_LINK, months, years } from "@/utils/constants";
import { IconAlertCircle } from "@tabler/icons-react";
import axios from "axios";

type Props = {};

const SignUp = (props: Props) => {
  const payForlist = ["Borrower", "Lender"];
  const [password, setPassword] = useState("");
  const [vpassword, setVPassword] = useState("");
  const [validate, setValidate] = useState({ type: "", message: "" });
  const [type, setType] = useState(payForlist[0]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const emailRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const addRef = useRef(null);
  const changePasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValidate({ type: "", message: "" });
    setPassword(e.currentTarget.value);
  };

  const changeVPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValidate({ type: "", message: "" });
    setVPassword(e.currentTarget.value);
  };

  const onClickHandler = (e: React.MouseEvent<HTMLElement>): void => {
    if (!isLower(password)) {
      return setValidate({
        type: "",
        message: "Password doesn't match the criteria",
      });
    }

    if (!isUpper(password)) {
      return setValidate({
        type: "",
        message: "Password doesn't match the criteria",
      });
    }

    if (!isLength(password)) {
      return setValidate({
        type: "",
        message: "Password doesn't match the criteria",
      });
    }

    if (!isLower(password)) {
      return setValidate({
        type: "",
        message: "Password doesn't match the criteria",
      });
    }

    if (!isNumeric(password)) {
      return setValidate({
        type: "",
        message: "Password doesn't match the criteria",
      });
    }

    if (!isSpecial(password)) {
      return setValidate({
        type: "",
        message: "Password doesn't match the criteria",
      });
    }

    if (!isEqual(password, vpassword)) {
      return setValidate({
        type: "",
        message: "Password doesn't match the criteria",
      });
    }

    axios
      .post(SIGNUP_POST_LINK, {
        email: emailRef.current.value,
        password: password,
        name: `${firstNameRef.current.value} ${lastNameRef.current.value}`,
        address: addRef.current.value,
        date_of_birth: startDate,
        primary_role: type,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        return setValidate({
          type: "Network error",
          message: error,
        });
        console.log(error);
      });
  };

  return (
    <div className="box xl:p-6 grid grid-cols-12 gap-4 xxxl:gap-6 items-center shadow-[0px_6px_30px_0px_rgba(0,0,0,0.04)]">
      <div className="col-span-12 lg:col-span-7 ">
        <div className="box bg-primary/5 dark:bg-bg3 lg:p-6 xl:p-8 border border-n30 rounded-3xl dark:border-n500 ">
          <h3 className="h3 mb-4">Let&apos;s Get Started!</h3>
          <p className="md:mb-6 pb-4 mb-4 md:pb-6 bb-dashed text-sm md:text-base">
            Please Enter your details to Start your FinEase Application
          </p>
          <div className="grid grid-cols-2 gap-x-4 xxxl:gap-x-6">
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="name"
                className="md:text-lg font-medium block mb-3"
              >
                First Name
              </label>
              <input
                type="name"
                className="w-full text-sm bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 mb-5"
                placeholder="First name"
                id="name"
                required
                ref={firstNameRef}
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="lname"
                className="md:text-lg font-medium block mb-3"
              >
                Last Name
              </label>
              <input
                type="lname"
                className="w-full text-sm bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 mb-5"
                placeholder="Second name"
                id="lname"
                required
                ref={lastNameRef}
              />
            </div>
          </div>
          <label htmlFor="email" className="md:text-lg font-medium block mb-4">
            Enter Your Email ID
          </label>
          <input
            type="email"
            className="w-full text-sm bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 mb-5"
            placeholder="Enter Your Email"
            id="email"
            pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
            required
            ref={emailRef}
          />

          <label
            htmlFor="address"
            className="md:text-lg font-medium block mb-4"
          >
            Enter Your Address
          </label>
          <input
            type="text"
            className="w-full text-sm bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 mb-5"
            placeholder="Enter Your Address"
            id="address"
            required
            ref={addRef}
          />

          <div className="grid grid-cols-2 gap-x-4 xxxl:gap-x-6">
            <div className="col-span-2 md:col-span-1">
              <div className="col-span-2 md:col-span-1">
                <label
                  htmlFor="payfor"
                  className="mb-4 md:text-lg font-medium block"
                >
                  Select your account type
                </label>
                <Dropdown
                  items={payForlist}
                  setSelected={setType}
                  selected={type}
                  btnClass="bg-secondary1/5 rounded-[32px] py-2.5 w-full md:py-3 md:px-5 dark:bg-bg3 mb-4"
                  contentClass="w-full"
                />
              </div>
            </div>

            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="date"
                className="md:text-lg font-medium block mb-4"
              >
                Date of Birth
              </label>
              <div className="relative bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl">
                <DatePicker
                  placeholderText="Select Date"
                  selected={startDate}
                  popperClassName="max-w-[240px] dark:bg-bg4"
                  onFocus={() => setIsDatePickerOpen(true)}
                  renderCustomHeader={({
                    date,
                    changeYear,
                    changeMonth,
                    decreaseMonth,
                    increaseMonth,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled,
                  }) => (
                    <div
                      style={{
                        margin: 10,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <button
                        onClick={decreaseMonth}
                        disabled={prevMonthButtonDisabled}
                      >
                        {"<"}
                      </button>
                      <select
                        value={getYear(date)}
                        onChange={({ target: { value } }) => changeYear(value)}
                      >
                        {years.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>

                      <select
                        value={months[getMonth(date)]}
                        onChange={({ target: { value } }) =>
                          changeMonth(months.indexOf(value))
                        }
                      >
                        {months.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>

                      <button
                        onClick={increaseMonth}
                        disabled={nextMonthButtonDisabled}
                      >
                        {">"}
                      </button>
                    </div>
                  )}
                  open={isDatePickerOpen}
                  wrapperClassName="dark:bg-bg3 rounded-[32px]"
                  onClickOutside={() => setIsDatePickerOpen(false)}
                  className="w-full py-2 md:py-3 px-3 lg:px-6 text-sm rounded-[32px] bg-transparent dark:bg-transparent"
                  onChange={(date) => setStartDate(date)}
                  onSelect={() => setIsDatePickerOpen(false)}
                  calendarClassName="dark:bg-bg4 dark:text-n30 dark:border-n500"
                  dayClassName={(date) => "dark:text-n0"}
                />
                <i onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}></i>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-4 xxxl:gap-x-6">
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="password"
                className="md:text-lg font-medium block mb-4"
              >
                Enter Your Password
              </label>
              <input
                type="password"
                className={`w-full text-sm bg-n0 dark:bg-bg4 border border-n30 dark:border-n500  rounded-3xl px-3 md:px-6 py-2 md:py-3 mb-5`}
                id="password"
                value={password}
                onChange={changePasswordHandler}
                required
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <label
                htmlFor="v-password"
                className="md:text-lg font-medium block mb-4"
              >
                Verify Your Password
              </label>
              <input
                type="password"
                className="w-full text-sm bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-3 md:px-6 py-2 md:py-3 mb-5"
                id="v-password"
                onChange={changeVPasswordHandler}
                value={vpassword}
                required
              />
            </div>
          </div>

          {validate.message && (
            <div className="flex p-2 gap-2 items-center flex-initial border border-n30 dark:border-n500 dark:border-red-400 rounded-2xl">
              <IconAlertCircle color="red" />
              <p className="pt-2 pb-2 text-red-500 md:text-base">
                {validate.message}
              </p>
            </div>
          )}

          <PasswordRules password={password} vpassword={vpassword} />

          <div className="mt-8">
            <button onClick={onClickHandler} className="btn px-5">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-5 flex justify-center items-center">
        <Image src="/images/auth.png" alt="img" width={533} height={560} />
      </div>
    </div>
  );
};

export default SignUp;
