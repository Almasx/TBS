import { authRouter } from "./router/auth";
import { visitRouter } from "./router/visit";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  visit: visitRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
