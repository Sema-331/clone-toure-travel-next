/*
  Warnings:

  - You are about to drop the column `idClassTypeTicket` on the `Table_ticket` table. All the data in the column will be lost.
  - Added the required column `idClassTypeTicket` to the `table_type_class` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Table_ticket" DROP CONSTRAINT "Table_ticket_idClassTypeTicket_fkey";

-- AlterTable
ALTER TABLE "Table_ticket" DROP COLUMN "idClassTypeTicket";

-- AlterTable
ALTER TABLE "table_type_class" ADD COLUMN     "idClassTypeTicket" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "table_type_class" ADD CONSTRAINT "table_type_class_idClassTypeTicket_fkey" FOREIGN KEY ("idClassTypeTicket") REFERENCES "Table_ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
