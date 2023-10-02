import { classNames } from "../../helpers/classNames";
import { forwardRef } from "react";

const Form = forwardRef(
  (
    { isError = "", submit, buttonName, buttonWidth = "w-full mt-3", children },
    ref = null
  ) => {
    return (
      <form
        ref={ref}
        className="space-y-6 relative"
        method="POST"
        onSubmit={submit}
        autoComplete="off"
      >
        <div className="text-red-500 absolute -top-9 left-0"> {isError}</div>

        {children}

        <div className="flex  justify-end ">
          <button
            type="submit"
            className={classNames(
              buttonWidth,
              "rounded-sm  bg-sky-500 px-3 py-2 text-sm font-semibold leading-6 text-zinc-100 shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            )}
          >
            {buttonName}
          </button>
        </div>
      </form>
    );
  }
);

export default Form;
