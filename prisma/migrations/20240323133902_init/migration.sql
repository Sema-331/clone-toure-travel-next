/*
  Warnings:

  - Added the required column `price` to the `table_room_hotel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rate` to the `table_room_hotel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Table_route" ADD COLUMN     "rate" TEXT[],
ADD COLUMN     "trips" TEXT[];

-- AlterTable
ALTER TABLE "table_room_hotel" ADD COLUMN     "amenities_option" TEXT[],
ADD COLUMN     "freebies_options" TEXT[],
ADD COLUMN     "price" TEXT NOT NULL,
ADD COLUMN     "rate" TEXT NOT NULL,
ADD COLUMN     "variaty_hotel" TEXT[];
