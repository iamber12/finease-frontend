import React from "react";
import { IconX, IconCheck } from "@tabler/icons-react";

type Props = {
  password: string;
};

const PasswordRules = (props: Props) => {
  const { password } = props;

  const isLower = (text: string): Array<string> | null => {
    let lowerCaseLetters = /[a-z]/g;
    return text.match(lowerCaseLetters);
  };

  const isUpper = (text: string): Array<string> | null => {
    let upperCaseLetters = /[A-Z]/g;
    return text.match(upperCaseLetters);
  };

  const isNumeric = (text: string): Array<string> | null => {
    let numbers = /[0-9]/g;
    return text.match(numbers);
  };

  const isLength = (text: string): boolean => {
    return text.length >= 8;
  };

  const isSpecial = (text: string):  Array<string> | null => {
    let special = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return text.match(special);

  };

  return (
    <div>
      <div className="box w-1/2 bg-primary/5 dark:bg-bg3 lg:p-6 xl:p-8 border border-n30 dark:border-n500 rounded-3xl">
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
            {isNumeric(password) ? (
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
            {isLength(password) ? (
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
      </div>
    </div>
  );
};

export default PasswordRules;
