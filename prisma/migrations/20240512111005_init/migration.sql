/*
  Warnings:

  - You are about to drop the `_table_history_flyTotable_type_class` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `idTabletype` to the `table_history_fly` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_table_history_flyTotable_type_class" DROP CONSTRAINT "_table_history_flyTotable_type_class_A_fkey";

-- DropForeignKey
ALTER TABLE "_table_history_flyTotable_type_class" DROP CONSTRAINT "_table_history_flyTotable_type_class_B_fkey";

-- AlterTable
ALTER TABLE "table_history_fly" ADD COLUMN     "idTabletype" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_table_history_flyTotable_type_class";

-- AddForeignKey
ALTER TABLE "table_history_fly" ADD CONSTRAINT "table_history_fly_idTabletype_fkey" FOREIGN KEY ("idTabletype") REFERENCES "table_type_class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
