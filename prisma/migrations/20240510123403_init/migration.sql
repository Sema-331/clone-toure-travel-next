/*
  Warnings:

  - You are about to drop the `_table_history_flyTotable_type_class` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `idHistoryTickert` to the `table_type_class` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_table_history_flyTotable_type_class" DROP CONSTRAINT "_table_history_flyTotable_type_class_A_fkey";

-- DropForeignKey
ALTER TABLE "_table_history_flyTotable_type_class" DROP CONSTRAINT "_table_history_flyTotable_type_class_B_fkey";

-- AlterTable
ALTER TABLE "table_type_class" ADD COLUMN     "idHistoryTickert" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_table_history_flyTotable_type_class";

-- AddForeignKey
ALTER TABLE "table_type_class" ADD CONSTRAINT "table_type_class_idHistoryTickert_fkey" FOREIGN KEY ("idHistoryTickert") REFERENCES "table_history_fly"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
