-- CreateTable
CREATE TABLE "Account" (
    "user_id" UUID NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("user_id")
);

-- AddForeignKey
ALTER TABLE "tree" ADD CONSTRAINT "tree_tree_id_fkey" FOREIGN KEY ("tree_id") REFERENCES "Account"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
