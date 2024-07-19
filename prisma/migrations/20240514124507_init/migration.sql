-- CreateTable
CREATE TABLE "review_table_single_fly" (
    "id" SERIAL NOT NULL,
    "rating" TEXT NOT NULL,
    "description_review" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "fly_route_id" INTEGER NOT NULL,

    CONSTRAINT "review_table_single_fly_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "review_table_single_fly" ADD CONSTRAINT "review_table_single_fly_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review_table_single_fly" ADD CONSTRAINT "review_table_single_fly_fly_route_id_fkey" FOREIGN KEY ("fly_route_id") REFERENCES "Table_route"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
