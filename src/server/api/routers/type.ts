import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "~/server/api/trpc";

export const typeRouter = createTRPCRouter({
    getAll: protectedProcedure.query(({ctx})=>{
        return ctx.prisma.productType.findMany();
    })
})