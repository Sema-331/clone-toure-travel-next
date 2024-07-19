/*
  Warnings:

  - You are about to drop the column `idTabletype` on the `Table_ticket` table. All the data in the column will be lost.
  - You are about to drop the column `idTabletype` on the `table_history_fly` table. All the data in the column will be lost.
  - Added the required column `idClassTypeTicket` to the `table_type_class` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Table_ticket" DROP CONSTRAINT "Table_ticket_idTabletype_fkey";

-- DropForeignKey
ALTER TABLE "table_history_fly" DROP CONSTRAINT "table_history_fly_idTabletype_fkey";

-- AlterTable
ALTER TABLE "Table_ticket" DROP COLUMN "idTabletype";

-- AlterTable
ALTER TABLE "table_history_fly" DROP COLUMN "idTabletype";

-- AlterTable
ALTER TABLE "table_type_class" ADD COLUMN     "idClassTypeTicket" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "_table_history_flyTotable_type_class" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_table_history_flyTotable_type_class_AB_unique" ON "_table_history_flyTotable_type_class"("A", "B");

-- CreateIndex
CREATE INDEX "_table_history_flyTotable_type_class_B_index" ON "_table_history_flyTotable_type_class"("B");

-- AddForeignKey
ALTER TABLE "table_type_class" ADD CONSTRAINT "table_type_class_idClassTypeTicket_fkey" FOREIGN KEY ("idClassTypeTicket") REFERENCES "Table_ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_table_history_flyTotable_type_class" ADD CONSTRAINT "_table_history_flyTotable_type_class_A_fkey" FOREIGN KEY ("A") REFERENCES "table_history_fly"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_table_history_flyTotable_type_class" ADD CONSTRAINT "_table_history_flyTotable_type_class_B_fkey" FOREIGN KEY ("B") REFERENCES "table_type_class"("id") ON DELETE CASCADE ON UPDATE CASCADE;
