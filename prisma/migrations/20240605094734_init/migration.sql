/*
  Warnings:

  - Changed the type of `rating` on the `review_table_single_fly` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `price` on the `table_room_hotel` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "review_table_single_fly" DROP COLUMN "rating",
ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "table_room_hotel" DROP COLUMN "price",
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL;
