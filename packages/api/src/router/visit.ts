import { createTRPCRouter, protectedProcedure } from "../trpc";

export const visitRouter = createTRPCRouter({
  create: protectedProcedure.mutation(async ({ ctx }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    console.log(today);

    const visit = await ctx.prisma.visit.findFirst({
      where: {
        createdAt: {
          gte: today,
        },
      },
    });

    if (visit) {
      return ctx.prisma.visit.update({
        where: { id: visit.id },
        data: { exitedAt: new Date() },
      });
    } else {
      return ctx.prisma.visit.create({ data: { userId: ctx.auth.userId } });
    }
  }),
});
