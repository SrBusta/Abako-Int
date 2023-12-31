import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "~/server/api/trpc";

export const modelRouter = createTRPCRouter({
    getAll: protectedProcedure.query(({ctx})=>{
        return ctx.prisma.productModel.findMany();
    })
})