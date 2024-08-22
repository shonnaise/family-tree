import prisma from "../prisma";

export const treeRepository = {
  getTree: async (treeId: string) => {
    const tree = await prisma.tree.findUnique({
      where: {
        treeId: treeId,
      },
    });

    return tree;
  },
  getPerson: async (personId: string, withMarriage: boolean) => {
    const person = await prisma.person.findUnique({
      where: {
        personId,
      },
      include: {
        asHusband: true,
        asWife: true,
      },
    });

    return person;
  },
  getParents: async (personId: string) => {
    const person = await prisma.person.findUnique({
      where: {
        personId,
      },
      include: {
        asChild: {
          include: {
            husband: true,
            wife: true,
          },
        },
      },
    });
  },
  getChildren: async (personId: string) => {
    const person = await prisma.person.findUnique({
      where: {
        personId,
      },
      include: {},
    });
  },
};
