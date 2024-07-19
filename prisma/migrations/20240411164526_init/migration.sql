-- AlterTable
ALTER TABLE "table_room_hotel" ADD COLUMN     "images_slider" JSONB[],
ADD COLUMN     "main_image" JSONB[];

-- CreateTable
CREATE TABLE "table_room_type" (
    "id" SERIAL NOT NULL,
    "name_room_type" TEXT NOT NULL,
    "type_room" TEXT NOT NULL,

    CONSTRAINT "table_room_type_pkey" PRIMARY KEY ("id")
);
