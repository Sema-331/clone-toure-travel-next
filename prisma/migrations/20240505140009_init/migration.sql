/*
  Warnings:

  - You are about to drop the column `from_airport_id` on the `Table_route` table. All the data in the column will be lost.
  - Added the required column `from_airport_fly` to the `Table_route` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idUser` to the `Table_ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_company` to the `table_company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Table_route" DROP COLUMN "from_airport_id",
ADD COLUMN     "from_airport_fly" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Table_ticket" ADD COLUMN     "idUser" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "table_company" ADD COLUMN     "image_company" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Table_route" ADD CONSTRAINT "Table_route_from_airport_fly_fkey" FOREIGN KEY ("from_airport_fly") REFERENCES "Table_Airport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Table_ticket" ADD CONSTRAINT "Table_ticket_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
