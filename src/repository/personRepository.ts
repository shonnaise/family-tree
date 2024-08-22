import prisma from "../prisma";
import { Person } from "../types/person";
export const personRepository = {
  getPerson: async (personId: string, withMarriage: boolean = false) => {
    const person = await prisma.person.findUnique({
      where: {
        personId,
      },
      include: {
        asHusband: withMarriage,
        asWife: withMarriage,
        asChild: withMarriage,
      },
    });

    return person;
  },
};
