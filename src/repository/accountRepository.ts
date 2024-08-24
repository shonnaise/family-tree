import prisma from "../prisma";
import { Account } from "../types/account";

export const accountRepository = {
  getAccount: async (userId: string): Promise<Account> => {
    const account = await prisma.account.findUnique({
      where: {
        userId,
      },
    });
    if (!account) {
      throw new Error("Account not found");
    }
    return {
      userId: account.userId,
      userName: account.userName,
      email: account.email,
      fullName: account.fullName,
    };
  },
};
