import {
    AuthErrorCodes,
  } from "firebase/auth";

    export const findError = (error) => {
        const findError = Object.values(AuthErrorCodes).find((code) => code === error.code);
        const err = findError || error.message;
        const errMessage = err.replace(/[-()._]/g, " ").split('/').pop();
        return errMessage;
    }


    
