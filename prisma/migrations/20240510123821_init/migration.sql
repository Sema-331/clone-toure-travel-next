/*
  Warnings:

  - You are about to drop the column `idHistoryTickert` on the `table_type_class` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "table_type_class" DROP CONSTRAINT "table_type_class_idHistoryTickert_fkey";

-- AlterTable
ALTER TABLE "table_type_class" DROP COLUMN "idHistoryTickert";

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
ALTER TABLE "_table_history_flyTotable_type_class" ADD CONSTRAINT "_table_history_flyTotable_type_class_A_fkey" FOREIGN KEY ("A") REFERENCES "table_history_fly"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_table_history_flyTotable_type_class" ADD CONSTRAINT "_table_history_flyTotable_type_class_B_fkey" FOREIGN KEY ("B") REFERENCES "table_type_class"("id") ON DELETE CASCADE ON UPDATE CASCADE;
