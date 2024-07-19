-- CreateTable
CREATE TABLE "table_favourites_fly" (
    "id" SERIAL NOT NULL,
    "idUser" TEXT NOT NULL,
    "idTableRoute" INTEGER NOT NULL,
    "place" TEXT NOT NULL,
    "row" TEXT NOT NULL,
    "typeClass" INTEGER NOT NULL,

    CONSTRAINT "table_favourites_fly_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "table_favourites_fly" ADD CONSTRAINT "table_favourites_fly_idTableRoute_fkey" FOREIGN KEY ("idTableRoute") REFERENCES "Table_route"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "table_favourites_fly" ADD CONSTRAINT "table_favourites_fly_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "table_favourites_fly" ADD CONSTRAINT "table_favourites_fly_typeClass_fkey" FOREIGN KEY ("typeClass") REFERENCES "table_type_class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
