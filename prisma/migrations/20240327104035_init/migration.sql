/*
  Warnings:

  - The primary key for the `VerificationToken` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[email]` on the table `subscribe_to_updates` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "VerificationToken" DROP CONSTRAINT "VerificationToken_pkey",
ALTER COLUMN "identifier" DROP DEFAULT,
ALTER COLUMN "identifier" SET DATA TYPE TEXT,
ADD CONSTRAINT "VerificationToken_pkey" PRIMARY KEY ("identifier");
DROP SEQUENCE "VerificationToken_identifier_seq";

-- CreateIndex
CREATE UNIQUE INDEX "subscribe_to_updates_email_key" ON "subscribe_to_updates"("email");
