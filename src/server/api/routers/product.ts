import { createTRPCRouter, protectedProcedure } from "../trpc";



export const productRouter = createTRPCRouter({

    getAll: protectedProcedure.query(({ ctx }) => {
        return ctx.prisma.product.findMany({
            include:{
                productBrand:true,
                productModel:true,
                productType:true,
            }
        });
      }),

})