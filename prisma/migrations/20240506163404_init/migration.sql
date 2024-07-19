/*
  Warnings:

  - You are about to drop the column `type_class` on the `Table_ticket` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "table_type_class" DROP CONSTRAINT "table_type_class_idClassType_fkey";

-- AlterTable
ALTER TABLE "Table_ticket" DROP COLUMN "type_class";

-- AddForeignKey
ALTER TABLE "table_type_class" ADD CONSTRAINT "table_type_class_idClassType_fkey" FOREIGN KEY ("idClassType") REFERENCES "Table_route"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
