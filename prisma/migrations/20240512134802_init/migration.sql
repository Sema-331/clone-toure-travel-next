/*
  Warnings:

  - You are about to drop the column `place` on the `table_favourites_fly` table. All the data in the column will be lost.
  - You are about to drop the column `row` on the `table_favourites_fly` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "table_favourites_fly" DROP COLUMN "place",
DROP COLUMN "row";
