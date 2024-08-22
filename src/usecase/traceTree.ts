import { treeRepository } from "../repository/treeRepository";
import prisma from "../prisma";
import { Person } from "../types/person";
type TraceTreeParams = {
  treeId: string;
  mainPersonId?: string;
  degreeOfKinship: number;
};

export const getFamilyTree = async ({ treeId, mainPersonId }: TraceTreeParams) => {
  const tree = await treeRepository.getTree(treeId);
  if (!tree) {
    throw new Error("Tree not found");
  }

  if (!mainPersonId) {
    mainPersonId = tree.mainPersonId;
  }

  const mainPerson = await treeRepository.getPerson(mainPersonId, true);

  if (!mainPerson) {
    throw new Error("Main person not found");
  }
};
