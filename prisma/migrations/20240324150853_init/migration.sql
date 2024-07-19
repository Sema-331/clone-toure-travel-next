-- CreateTable
CREATE TABLE "subscribe_to_updates" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,

    CONSTRAINT "subscribe_to_updates_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "subscribe_to_updates" ADD CONSTRAINT "subscribe_to_updates_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
