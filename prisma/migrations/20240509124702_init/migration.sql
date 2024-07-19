-- CreateTable
CREATE TABLE "table_history_fly" (
    "id" SERIAL NOT NULL,
    "idUser" TEXT NOT NULL,
    "idTableRoute" INTEGER NOT NULL,
    "place" TEXT NOT NULL,
    "row" TEXT NOT NULL,

    CONSTRAINT "table_history_fly_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_table_history_flyTotable_type_class" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_table_history_flyTotable_type_class_AB_unique" ON "_table_history_flyTotable_type_class"("A", "B");

-- CreateIndex
CREATE INDEX "_table_history_flyTotable_type_class_B_index" ON "_table_history_flyTotable_type_class"("B");

-- AddForeignKey
ALTER TABLE "table_history_fly" ADD CONSTRAINT "table_history_fly_idTableRoute_fkey" FOREIGN KEY ("idTableRoute") REFERENCES "Table_route"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "table_history_fly" ADD CONSTRAINT "table_history_fly_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_table_history_flyTotable_type_class" ADD CONSTRAINT "_table_history_flyTotable_type_class_A_fkey" FOREIGN KEY ("A") REFERENCES "table_history_fly"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_table_history_flyTotable_type_class" ADD CONSTRAINT "_table_history_flyTotable_type_class_B_fkey" FOREIGN KEY ("B") REFERENCES "table_type_class"("id") ON DELETE CASCADE ON UPDATE CASCADE;
