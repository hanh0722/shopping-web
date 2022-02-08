import { ErrorResponse } from "../types/Error";

export const errorMessage = (objectError: ErrorResponse) => {
  const { message, code } = objectError;

  return {
      message,
      code
  }
};

export const convertStringToCapitalize = (value: string) => {
  const lowercaseString = value.toLowerCase();

  return lowercaseString.charAt(0).toUpperCase() + lowercaseString.substring(1);
}