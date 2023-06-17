import { createTRPCRouter, protectedProcedure } from "../trpc";
import { z } from "zod";


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
    create: protectedProcedure.input(z.object({ 
        name:z.string(),
        type:z.number(),
        brand:z.number(),
        model:z.number(),
        price:z.number(),
    })).mutation(({ctx,input})=>{
        return ctx.prisma.product.create({
            data:{
                name:input.name,
                productTypeId:input.type,
                productBrandId:input.brand,
                productModelId:input.model,
                price:input.price
            }
        })
    })

})