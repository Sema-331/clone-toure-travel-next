/*
  Warnings:

  - The `mark` column on the `Table_Reviews` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Table_Reviews" DROP COLUMN "mark",
ADD COLUMN     "mark" TEXT[];
