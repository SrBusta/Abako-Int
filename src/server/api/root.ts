import { createTRPCRouter } from "~/server/api/trpc";
import { storeRouter } from "~/server/api/routers/store";
import { productRouter } from "./routers/product";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  store: storeRouter,
  product:productRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
