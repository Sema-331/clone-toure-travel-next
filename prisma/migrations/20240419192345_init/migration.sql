-- AlterTable
ALTER TABLE "Table_Reviews" ADD COLUMN     "image_review" TEXT;

-- CreateTable
CREATE TABLE "review_table_single_hotel" (
    "id" SERIAL NOT NULL,
    "rating" TEXT NOT NULL,
    "description_review" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "hotelId" INTEGER NOT NULL,

    CONSTRAINT "review_table_single_hotel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "review_table_single_hotel" ADD CONSTRAINT "review_table_single_hotel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review_table_single_hotel" ADD CONSTRAINT "review_table_single_hotel_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "table_room_hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
