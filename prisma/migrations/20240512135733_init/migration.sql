/*
  Warnings:

  - You are about to drop the column `typeClass` on the `table_favourites_fly` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "table_favourites_fly" DROP CONSTRAINT "table_favourites_fly_typeClass_fkey";

-- AlterTable
ALTER TABLE "table_favourites_fly" DROP COLUMN "typeClass";
