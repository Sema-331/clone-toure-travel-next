/*
  Warnings:

  - You are about to drop the column `Country_hotel` on the `Hotel` table. All the data in the column will be lost.
  - You are about to drop the column `name_hotel` on the `Hotel` table. All the data in the column will be lost.
  - Added the required column `info_Hotel` to the `Hotel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hotel" DROP COLUMN "Country_hotel",
DROP COLUMN "name_hotel",
ADD COLUMN     "info_Hotel" TEXT NOT NULL;
