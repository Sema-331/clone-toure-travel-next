/*
  Warnings:

  - Added the required column `name_hotel` to the `table_room_hotel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "table_room_hotel" ADD COLUMN     "name_hotel" TEXT NOT NULL;
