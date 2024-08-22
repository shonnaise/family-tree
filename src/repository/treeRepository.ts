import { Children } from "react";
import prisma from "../prisma";
import { Person } from "../types/person";
import { Tree } from "../types/tree";
export const treeRepository = {
  getTree: async (treeId: string): Promise<Tree | null> => {
    const tree = await prisma.tree.findUnique({
      where: {
        treeId: treeId,
      },
    });

    return tree;
  },
};
