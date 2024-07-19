/*
  Warnings:

  - The primary key for the `history_table_hotel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `history_table_hotel` table. All the data in the column will be lost.
  - You are about to drop the column `id_table_room_hostory` on the `table_room_hotel` table. All the data in the column will be lost.
  - Added the required column `hotelId` to the `history_table_hotel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `history_table_hotel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "table_room_hotel" DROP CONSTRAINT "table_room_hotel_id_table_room_hostory_fkey";

-- AlterTable
ALTER TABLE "history_table_hotel" DROP CONSTRAINT "history_table_hotel_pkey",
DROP COLUMN "id",
ADD COLUMN     "hotelId" INTEGER NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ADD CONSTRAINT "history_table_hotel_pkey" PRIMARY KEY ("userId", "hotelId");

-- AlterTable
ALTER TABLE "table_room_hotel" DROP COLUMN "id_table_room_hostory";

-- AddForeignKey
ALTER TABLE "history_table_hotel" ADD CONSTRAINT "history_table_hotel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "history_table_hotel" ADD CONSTRAINT "history_table_hotel_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "table_room_hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
