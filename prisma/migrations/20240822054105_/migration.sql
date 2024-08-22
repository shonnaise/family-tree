/*
  Warnings:

  - You are about to drop the `_person_marriages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_person_marriages" DROP CONSTRAINT "_person_marriages_A_fkey";

-- DropForeignKey
ALTER TABLE "_person_marriages" DROP CONSTRAINT "_person_marriages_B_fkey";

-- DropForeignKey
ALTER TABLE "person" DROP CONSTRAINT "person_person_id_fkey";

-- DropForeignKey
ALTER TABLE "tree" DROP CONSTRAINT "tree_person_id_fkey";

-- DropTable
DROP TABLE "_person_marriages";

-- AddForeignKey
ALTER TABLE "marriage" ADD CONSTRAINT "marriage_husband_id_fkey" FOREIGN KEY ("husband_id") REFERENCES "person"("person_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "marriage" ADD CONSTRAINT "marriage_wife_id_fkey" FOREIGN KEY ("wife_id") REFERENCES "person"("person_id") ON DELETE RESTRICT ON UPDATE CASCADE;
