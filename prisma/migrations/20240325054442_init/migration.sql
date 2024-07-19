/*
  Warnings:

  - The primary key for the `subscribe_to_updates` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "subscribe_to_updates" DROP CONSTRAINT "subscribe_to_updates_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "subscribe_to_updates_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "subscribe_to_updates_id_seq";
