/*
  Warnings:

  - You are about to drop the `table_room_type` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "table_room_type" DROP CONSTRAINT "table_room_type_idHotel_fkey";

-- DropTable
DROP TABLE "table_room_type";
