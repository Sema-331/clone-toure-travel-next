/*
  Warnings:

  - Added the required column `name_hotel` to the `Hotel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `geo_hotel` to the `table_room_hotel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_hotel` to the `table_room_hotel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hotel" ADD COLUMN     "name_hotel" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "table_room_hotel" ADD COLUMN     "geo_hotel" TEXT NOT NULL,
ADD COLUMN     "name_hotel" TEXT NOT NULL,
ADD COLUMN     "star_hotel" TEXT,
ALTER COLUMN "variaty_hotel" SET NOT NULL,
ALTER COLUMN "variaty_hotel" SET DATA TYPE TEXT;
