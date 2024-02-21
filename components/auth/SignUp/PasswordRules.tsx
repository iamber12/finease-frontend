import React from "react";
import { IconX, IconCheck } from "@tabler/icons-react";
import {
  isLength,
  isLower,
  isNumeric,
  isSpecial,
  isUpper,
  isEqual,
} from "@/utils/utils";

type Props = {
  password: string;
  vpassword: string;
};

const PasswordRules = (props: Props) => {
  const { password, vpassword } = props;

  return (
    <div className="box w-1/2 bg-primary/5 mt-4 dark:bg-bg3 lg:p-6 xl:p-8 border border-n30 dark:border-n500 rounded-3xl">
      <h3>Password must contain the following:</h3>
      <div className="flex items-center gap-x-2">
        <div className="flex-none">
          {isLower(password) ? (
            <IconCheck color="green" />
          ) : (
            <IconX color="red" />
          )}
        </div>
        <div className="flex-initial">
          <span id="letter" className="invalid">
            A <b>lowercase</b> letter
          </span>
        </div>
      </div>

      <div className="flex items-center gap-x-2">
        <div className="flex-none">
          {isUpper(password) ? (
            <IconCheck color="green" />
          ) : (
            <IconX color="red" />
          )}
        </div>
        <div className="flex-initial">
          <p id="capital" className="invalid">
            A <b>capital (uppercase)</b> letter
          </p>
        </div>
      </div>

      <div className="flex items-center gap-x-2">
        <div className="flex-none">
          {isLength(password) ? (
            <IconCheck color="green" />
          ) : (
            <IconX color="red" />
          )}
        </div>
        <div className="flex-initial">
          <span id="letter" className="invalid">
            Minimum <b>8</b> characters
          </span>
        </div>
      </div>

      <div className="flex items-center gap-x-2">
        <div className="flex-none">
          {isNumeric(password) ? (
            <IconCheck color="green" />
          ) : (
            <IconX color="red" />
          )}
        </div>
        <div className="flex-initial">
          <p id="number" className="invalid">
            A <b>number</b>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-x-2">
        <div className="flex-none">
          {isSpecial(password) ? (
            <IconCheck color="green" />
          ) : (
            <IconX color="red" />
          )}
        </div>
        <div className="flex-initial">
          <p id="number" className="invalid">
            A <b>special</b> character
          </p>
        </div>
      </div>

      <div className="flex items-center gap-x-2">
        <div className="flex-none">
          {isEqual(password, vpassword) ? (
            <IconCheck color="green" />
          ) : (
            <IconX color="red" />
          )}
        </div>
        <div className="flex-initial">
          <p id="number" className="invalid">
            Password should match <b>Verify</b> password
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordRules;
