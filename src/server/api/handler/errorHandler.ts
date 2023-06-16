import { Prisma } from "@prisma/client";
import { type TRPCError } from "@trpc/server";
import { ZodError } from "zod";
import { type Errors } from "./errors";
import { prismaErrroHandler } from "./prismaErrors";
import { zodHandler } from "./zodHandler";

export const errorHandler = (error: TRPCError): Errors => {
  if (error.code === "BAD_REQUEST" && error.cause instanceof ZodError)
    return zodHandler(error.cause);

  if (
    error.code === "INTERNAL_SERVER_ERROR" &&
    error.cause instanceof Prisma.PrismaClientKnownRequestError
  ) {
    error.cause.code == "";
    return prismaErrroHandler(error.cause);
  }

  return {};
};
