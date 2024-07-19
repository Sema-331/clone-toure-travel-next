/*
  Warnings:

  - Added the required column `idClassTypeTicket` to the `table_type_class` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "table_type_class" ADD COLUMN     "idClassTypeTicket" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "table_type_class" ADD CONSTRAINT "table_type_class_idClassTypeTicket_fkey" FOREIGN KEY ("idClassTypeTicket") REFERENCES "Table_ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
