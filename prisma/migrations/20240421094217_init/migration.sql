/*
  Warnings:

  - Added the required column `type_room_hotel_id` to the `history_table_hotel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "history_table_hotel" ADD COLUMN     "type_room_hotel_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "history_table_hotel" ADD CONSTRAINT "history_table_hotel_type_room_hotel_id_fkey" FOREIGN KEY ("type_room_hotel_id") REFERENCES "table_type_room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
