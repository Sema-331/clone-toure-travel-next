/*
  Warnings:

  - Added the required column `geo_airplane` to the `Table_route` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_plane` to the `Table_route` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Table_route" ADD COLUMN     "geo_airplane" TEXT NOT NULL,
ADD COLUMN     "image_plane" TEXT NOT NULL,
ADD COLUMN     "slider_image" TEXT[];
