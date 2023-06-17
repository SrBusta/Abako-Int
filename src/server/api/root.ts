import { createTRPCRouter } from "~/server/api/trpc";
import { storeRouter } from "~/server/api/routers/store";
import { productRouter } from "./routers/product";
import { brandRouter } from "./routers/brand";
import { typeRouter } from "./routers/type";
import { modelRouter } from "./routers/model";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  store: storeRouter,
  product:productRouter,
  brand:brandRouter,
  type:typeRouter,
  model:modelRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
