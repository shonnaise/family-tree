import prisma from "../prisma";
import { Person } from "../types/person";
export const personRepository = {
  getPerson: async (personId: string, withMarriage: boolean = false): Promise<Person> => {
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

    if (!person) {
      throw new Error("Person not found");
    }

    return {
      personId: person.personId,
      fullName: person.fullName,
      englishName: person.englishName,
      birthDate: person.birthDate,
      deathDate: person,
    };
  },
};
