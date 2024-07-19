/*
  Warnings:

  - You are about to drop the column `id_user` on the `subscribe_to_updates` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "subscribe_to_updates" DROP CONSTRAINT "subscribe_to_updates_id_user_fkey";

-- AlterTable
ALTER TABLE "subscribe_to_updates" DROP COLUMN "id_user";
