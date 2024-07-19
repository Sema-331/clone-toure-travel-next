/*
  Warnings:

  - Added the required column `id_table_room_hostory` to the `table_room_hotel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "table_room_hotel" ADD COLUMN     "id_table_room_hostory" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "history_table_hotel" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "history_table_hotel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "table_room_hotel" ADD CONSTRAINT "table_room_hotel_id_table_room_hostory_fkey" FOREIGN KEY ("id_table_room_hostory") REFERENCES "history_table_hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
