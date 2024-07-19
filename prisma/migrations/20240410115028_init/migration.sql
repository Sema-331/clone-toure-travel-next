-- DropForeignKey
ALTER TABLE "Favourites_hotel" DROP CONSTRAINT "Favourites_hotel_hotelId_fkey";

-- AddForeignKey
ALTER TABLE "Favourites_hotel" ADD CONSTRAINT "Favourites_hotel_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "table_room_hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
