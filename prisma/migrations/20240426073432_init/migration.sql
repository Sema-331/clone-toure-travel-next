/*
  Warnings:

  - Added the required column `mark` to the `Table_Reviews` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Table_Reviews" ADD COLUMN     "mark" TEXT NOT NULL;
