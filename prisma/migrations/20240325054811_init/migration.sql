/*
  Warnings:

  - You are about to alter the column `email` on the `subscribe_to_updates` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - A unique constraint covering the columns `[email]` on the table `subscribe_to_updates` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "subscribe_to_updates" ALTER COLUMN "email" SET DATA TYPE VARCHAR(255);

-- CreateIndex
CREATE UNIQUE INDEX "subscribe_to_updates_email_key" ON "subscribe_to_updates"("email");
