import { type ZodError } from "zod";

export const zodHandler = (error: ZodError) => {
  const inputError = error.errors.map((e) => ({
    path: e.path.join("."),
    message: e.message,
  }));

  return { inputError };
};
