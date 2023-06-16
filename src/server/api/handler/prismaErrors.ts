import { type Prisma } from "prisma/prisma-client";
import { type Errors } from "./errors";

export const prismaErrors: {
  [key: string]: (error: Prisma.PrismaClientKnownRequestError) => Errors;
} = {
  P2002: (error) => {
    const inputError = [
      {
        path: (error.meta?.target as [])?.join("."),
        message: "Ya existe",
      },
    ];

    return { inputError };
  },
  P2003: () => {
    // console.log(error)
    return { basicError: "Entidad en uso" };
  },
  P2025: () => {
    return { basicError: "No se encontro la entidad" };
  },
};

export const prismaErrroHandler = (
  error: Prisma.PrismaClientKnownRequestError
) => {
  // console.log(error)
  const handler = prismaErrors[error.code];

  if (!handler) return {};

  return handler(error);
};
