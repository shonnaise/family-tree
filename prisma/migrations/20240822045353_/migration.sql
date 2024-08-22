/*
  Warnings:

  - A unique constraint covering the columns `[husband_id]` on the table `marriage` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[wife_id]` on the table `marriage` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `husband_id` to the `marriage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wife_id` to the `marriage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "marriage" ADD COLUMN     "husband_id" UUID NOT NULL,
ADD COLUMN     "wife_id" UUID NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "marriage_husband_id_key" ON "marriage"("husband_id");

-- CreateIndex
CREATE UNIQUE INDEX "marriage_wife_id_key" ON "marriage"("wife_id");

-- AddForeignKey
ALTER TABLE "marriage" ADD CONSTRAINT "marriage_husband_id_fkey" FOREIGN KEY ("husband_id") REFERENCES "person"("person_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "marriage" ADD CONSTRAINT "marriage_wife_id_fkey" FOREIGN KEY ("wife_id") REFERENCES "person"("person_id") ON DELETE RESTRICT ON UPDATE CASCADE;
