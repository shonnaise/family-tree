import { treeRepository } from "../repository/treeRepository";
import prisma from "../prisma";
import { Person } from "../types/person";
import { marriageRepository } from "../repository/marriageRepository";
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

  getAllPerson: async (person: Person, seen: Set<Person> = new Set<Person>()) => {
    if (seen.has(person)) return [];
    seen.add(person);

    const result: Person[] = [person];

    const marriages = await marriageRepository.getAllMarriages(person.personId);
    for (const marriage of marriages) {
      if (marriage.asHusband.wife !== person) {
      }
    }
  };
};
