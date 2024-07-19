-- CreateTable
CREATE TABLE "credit_card_users" (
    "id" SERIAL NOT NULL,
    "cardholderName" TEXT NOT NULL,
    "cvc" TEXT NOT NULL,
    "expMonth" TEXT NOT NULL,
    "expYear" TEXT NOT NULL,
    "card_number" TEXT NOT NULL,
    "country_of_region" TEXT,
    "idUser" TEXT NOT NULL,

    CONSTRAINT "credit_card_users_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "credit_card_users" ADD CONSTRAINT "credit_card_users_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
