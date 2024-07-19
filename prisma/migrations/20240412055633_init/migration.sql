/*
  Warnings:

  - Added the required column `idHotel` to the `table_room_type` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "table_room_type" ADD COLUMN     "idHotel" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "table_room_type" ADD CONSTRAINT "table_room_type_idHotel_fkey" FOREIGN KEY ("idHotel") REFERENCES "table_room_hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
