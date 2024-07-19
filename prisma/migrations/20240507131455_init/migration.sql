/*
  Warnings:

  - You are about to drop the column `idClassTypeTicket` on the `table_type_class` table. All the data in the column will be lost.
  - Added the required column `idClassTypeTicket` to the `Table_ticket` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "table_type_class" DROP CONSTRAINT "table_type_class_idClassTypeTicket_fkey";

-- AlterTable
ALTER TABLE "Table_ticket" ADD COLUMN     "idClassTypeTicket" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "table_type_class" DROP COLUMN "idClassTypeTicket";

-- AddForeignKey
ALTER TABLE "Table_ticket" ADD CONSTRAINT "Table_ticket_idClassTypeTicket_fkey" FOREIGN KEY ("idClassTypeTicket") REFERENCES "table_type_class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
