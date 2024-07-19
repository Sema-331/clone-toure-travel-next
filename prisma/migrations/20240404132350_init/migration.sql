/*
  Warnings:

  - Added the required column `Country_hotel` to the `Hotel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hotel" ADD COLUMN     "Country_hotel" TEXT NOT NULL;
