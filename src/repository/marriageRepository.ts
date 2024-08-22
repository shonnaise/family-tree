import prisma from "../prisma";

export const marriageRepository = {
  getAllMarriages: async (personId: string) => {
    const person = await prisma.person.findUnique({
      where: {
        personId,
      },
      include: {
        asHusband: {
          include: {
            wife: true,
            children: true,
          },
        },
        asWife: {
          include: {
            husband: true,
            children: true,
          },
        },
        asChild: {
          include: {
            husband: true,
            wife: true,
            children: true,
          },
        },
      },
    });
  },
};
