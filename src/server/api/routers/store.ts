import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "~/server/api/trpc";

export const storeRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.store.findMany();
  }),
  create: protectedProcedure.input(z.object({
    name: z.string(),
    address: z.string().nullable(),
  })).mutation(({ ctx, input }) => {
    return ctx.prisma.store.create({
      data: {
        name: input.name,
        address: input.address,
      }
    })
  }),
  getOne: protectedProcedure.input(z.object({
    id: z.number(),
  })).query(async ({ ctx, input }) => {
    const store = await ctx.prisma.store.findUnique({
      where: {
        id: input.id,
      }
    });

    return store; // null if not found
  }),

});
