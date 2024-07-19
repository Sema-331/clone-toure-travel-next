/*
  Warnings:

  - Added the required column `name_plane` to the `Table_route` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Table_route" ADD COLUMN     "name_plane" TEXT NOT NULL;
