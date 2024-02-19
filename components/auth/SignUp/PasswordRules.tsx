import React from "react";
import { IconX } from "@tabler/icons-react";

type Props = {};

const PasswordRules = (props: Props) => {
  return (
    <div>
      <div className="box w-1/2 bg-primary/5 dark:bg-bg3 lg:p-6 xl:p-8 border border-n30 dark:border-n500 rounded-3xl">
        <h3>Password must contain the following:</h3>
        <div className="flex items-center gap-x-2">
          <div className="flex-none">
            <IconX color="red"/>
          </div>
          <div className="flex-initial">
            <span id="letter" className="invalid">
              A <b>lowercase</b> letter
            </span>
          </div>
        </div>

        <div className="flex items-center gap-x-2">
          <div className="flex-none">
            <IconX color="red"/>
          </div>
          <div className="flex-initial">
            <p id="capital" className="invalid">
              A <b>capital (uppercase)</b> letter
            </p>
          </div>
        </div>

        <div className="flex items-center gap-x-2">
          <div className="flex-none">
            <IconX color="red"/>
          </div>
          <div className="flex-initial">
            <span id="letter" className="invalid">
              Minimum <b>8</b> characters
            </span>
          </div>
        </div>

        <div className="flex items-center gap-x-2">
          <div className="flex-none">
            <IconX color="red"/>
          </div>
          <div className="flex-initial">
            <p id="number" className="invalid">
              A <b>number</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordRules;
