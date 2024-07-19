/*
  Warnings:

  - The primary key for the `Favourites_hotel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Favourites_hotel` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Favourites_hotel" DROP CONSTRAINT "Favourites_hotel_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Favourites_hotel_pkey" PRIMARY KEY ("userId", "hotelId");
