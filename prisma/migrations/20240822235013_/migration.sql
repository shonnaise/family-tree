/*
  Warnings:

  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `gurigana` to the `person` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "tree" DROP CONSTRAINT "tree_tree_id_fkey";

-- AlterTable
ALTER TABLE "person" ADD COLUMN     "english_name" VARCHAR(255),
ADD COLUMN     "gurigana" VARCHAR(255) NOT NULL;

-- DropTable
DROP TABLE "Account";

-- CreateTable
CREATE TABLE "account" (
    "user_id" UUID NOT NULL,
    "user_name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "salt" VARCHAR(32) NOT NULL,
    "full_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "account_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "account_user_name_key" ON "account"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "account_email_key" ON "account"("email");

-- AddForeignKey
ALTER TABLE "tree" ADD CONSTRAINT "tree_tree_id_fkey" FOREIGN KEY ("tree_id") REFERENCES "account"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
