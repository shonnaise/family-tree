import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({
  // 警告・エラーログを出力する
  log: ["warn", "error"],
});
export default prisma;
