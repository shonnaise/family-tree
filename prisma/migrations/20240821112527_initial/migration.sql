-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female');

-- CreateTable
CREATE TABLE "tree" (
    "tree_id" UUID NOT NULL,
    "tree_name" VARCHAR(255) NOT NULL,
    "person_id" UUID NOT NULL,

    CONSTRAINT "tree_pkey" PRIMARY KEY ("tree_id")
);

-- CreateTable
CREATE TABLE "person" (
    "person_id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "gender" "Gender" NOT NULL,
    "aliving" BOOLEAN NOT NULL,
    "birth_date" TIMESTAMPTZ(3),
    "dead_date" TIMESTAMPTZ(3),

    CONSTRAINT "person_pkey" PRIMARY KEY ("person_id")
);

-- CreateTable
CREATE TABLE "marriage" (
    "marriage_id" UUID NOT NULL,
    "divorced" BOOLEAN NOT NULL,
    "marriage_date" TIMESTAMPTZ(3),
    "divorce_date" TIMESTAMPTZ(3),

    CONSTRAINT "marriage_pkey" PRIMARY KEY ("marriage_id")
);

-- CreateTable
CREATE TABLE "_person_marriages" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "tree_person_id_key" ON "tree"("person_id");

-- CreateIndex
CREATE UNIQUE INDEX "_person_marriages_AB_unique" ON "_person_marriages"("A", "B");

-- CreateIndex
CREATE INDEX "_person_marriages_B_index" ON "_person_marriages"("B");

-- AddForeignKey
ALTER TABLE "tree" ADD CONSTRAINT "tree_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "person"("person_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "person" ADD CONSTRAINT "person_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "marriage"("marriage_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_person_marriages" ADD CONSTRAINT "_person_marriages_A_fkey" FOREIGN KEY ("A") REFERENCES "marriage"("marriage_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_person_marriages" ADD CONSTRAINT "_person_marriages_B_fkey" FOREIGN KEY ("B") REFERENCES "person"("person_id") ON DELETE CASCADE ON UPDATE CASCADE;
