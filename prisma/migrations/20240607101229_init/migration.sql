/*
  Warnings:

  - Changed the type of `rating` on the `review_table_single_hotel` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "review_table_single_hotel" DROP COLUMN "rating",
ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL;
