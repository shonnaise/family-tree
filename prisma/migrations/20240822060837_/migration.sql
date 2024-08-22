/*
  Warnings:

  - Added the required column `gender_identity` to the `person` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "person" ADD COLUMN     "gender_identity" "Gender" NOT NULL;

-- AddForeignKey
ALTER TABLE "person" ADD CONSTRAINT "person_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "marriage"("marriage_id") ON DELETE RESTRICT ON UPDATE CASCADE;
