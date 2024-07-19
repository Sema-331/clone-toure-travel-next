/*
  Warnings:

  - Added the required column `type_class` to the `Table_ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Table_ticket" ADD COLUMN     "type_class" TEXT NOT NULL;
