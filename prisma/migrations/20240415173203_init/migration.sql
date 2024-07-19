/*
  Warnings:

  - You are about to drop the column `idHotel` on the `table_type_room` table. All the data in the column will be lost.
  - Added the required column `description_type_room` to the `table_type_room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_hotel_tpye_room` to the `table_type_room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price_type_room_hotel` to the `table_type_room` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "table_type_room" DROP CONSTRAINT "table_type_room_idHotel_fkey";

-- AlterTable
ALTER TABLE "table_type_room" DROP COLUMN "idHotel",
ADD COLUMN     "description_type_room" TEXT NOT NULL,
ADD COLUMN     "id_hotel_tpye_room" INTEGER NOT NULL,
ADD COLUMN     "price_type_room_hotel" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "table_type_room" ADD CONSTRAINT "table_type_room_id_hotel_tpye_room_fkey" FOREIGN KEY ("id_hotel_tpye_room") REFERENCES "table_room_hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
