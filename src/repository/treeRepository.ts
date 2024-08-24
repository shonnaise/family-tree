import prisma from "../prisma";
import { Tree } from "../types/tree";
export const treeRepository = {
  getTree: async (treeId: string): Promise<Tree> => {
    const tree = await prisma.tree.findUnique({
      where: {
        treeId: treeId,
      },
    });
    if (!tree) {
      throw new Error("Tree not found");
    }
    return {
      treeId: tree.treeId,
      treeName: tree.treeName,
      mainPersonId: tree.mainPersonId,
    };
  },
  getTrees: async (userId: string): Promise<Tree[]> => {
    const account = await prisma.account.findUnique({
      where: {
        userId,
      },
      include: {
        trees: true,
      },
    });
    if (!account) {
      throw new Error("Account not found");
    }

    return account.trees.map((tree) => {
      return {
        treeId: tree.treeId,
        treeName: tree.treeName,
        mainPersonId: tree.mainPersonId,
      };
    });
  },
};
