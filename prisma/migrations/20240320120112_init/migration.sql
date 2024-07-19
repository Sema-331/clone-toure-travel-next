/*
  Warnings:

  - You are about to alter the column `mark` on the `Table_Reviews` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Table_Reviews" ALTER COLUMN "mark" SET DATA TYPE INTEGER;
