/*
  Warnings:

  - You are about to drop the column `userId` on the `table_room_hotel` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "table_room_hotel" DROP CONSTRAINT "table_room_hotel_userId_fkey";

-- AlterTable
ALTER TABLE "table_room_hotel" DROP COLUMN "userId";
