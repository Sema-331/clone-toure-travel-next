-- CreateTable
CREATE TABLE "table_type_class" (
    "id" SERIAL NOT NULL,
    "name_type" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "idClassType" INTEGER NOT NULL,

    CONSTRAINT "table_type_class_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "table_type_class" ADD CONSTRAINT "table_type_class_idClassType_fkey" FOREIGN KEY ("idClassType") REFERENCES "Table_ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
