-- CreateTable
CREATE TABLE "Hotel" (
    "id" SERIAL NOT NULL,
    "name_hotel" TEXT NOT NULL,

    CONSTRAINT "Hotel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Favourites_hotel" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "hotelId" INTEGER NOT NULL,

    CONSTRAINT "Favourites_hotel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Favourites_fly_ticket" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "tableTicketId" INTEGER NOT NULL,

    CONSTRAINT "Favourites_fly_ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Table_Airport" (
    "id" SERIAL NOT NULL,
    "name_airport" TEXT NOT NULL,

    CONSTRAINT "Table_Airport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Table_route" (
    "id" SERIAL NOT NULL,
    "from_airport_id" INTEGER NOT NULL,
    "to_airport_fly" INTEGER NOT NULL,
    "price" TEXT NOT NULL,
    "time_fly_from" TIMESTAMP(3) NOT NULL,
    "time_fly_to" TIMESTAMP(3) NOT NULL,
    "count_places" TEXT NOT NULL,
    "idTableComp" INTEGER NOT NULL,

    CONSTRAINT "Table_route_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Table_ticket" (
    "id" SERIAL NOT NULL,
    "idTableRoute" INTEGER NOT NULL,
    "place" TEXT NOT NULL,
    "row" TEXT NOT NULL,

    CONSTRAINT "Table_ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Table_Reviews" (
    "id" SERIAL NOT NULL,
    "idUser" TEXT NOT NULL,
    "header_txt" TEXT NOT NULL,
    "description_txt" TEXT NOT NULL,
    "mark" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Table_Reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "table_room_hotel" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "check_in_date" TIMESTAMP(3) NOT NULL,
    "check_out_date" TIMESTAMP(3) NOT NULL,
    "room_number" INTEGER NOT NULL,
    "idHotel" INTEGER NOT NULL,

    CONSTRAINT "table_room_hotel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "table_company" (
    "id" SERIAL NOT NULL,
    "name_company" TEXT NOT NULL,

    CONSTRAINT "table_company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "table_type_room" (
    "id" SERIAL NOT NULL,
    "idHotel" INTEGER NOT NULL,

    CONSTRAINT "table_type_room_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Favourites_hotel" ADD CONSTRAINT "Favourites_hotel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favourites_hotel" ADD CONSTRAINT "Favourites_hotel_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favourites_fly_ticket" ADD CONSTRAINT "Favourites_fly_ticket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favourites_fly_ticket" ADD CONSTRAINT "Favourites_fly_ticket_tableTicketId_fkey" FOREIGN KEY ("tableTicketId") REFERENCES "Table_ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Table_route" ADD CONSTRAINT "Table_route_to_airport_fly_fkey" FOREIGN KEY ("to_airport_fly") REFERENCES "Table_Airport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Table_route" ADD CONSTRAINT "Table_route_idTableComp_fkey" FOREIGN KEY ("idTableComp") REFERENCES "table_company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Table_ticket" ADD CONSTRAINT "Table_ticket_idTableRoute_fkey" FOREIGN KEY ("idTableRoute") REFERENCES "Table_route"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Table_Reviews" ADD CONSTRAINT "Table_Reviews_idUser_fkey" FOREIGN KEY ("idUser") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "table_room_hotel" ADD CONSTRAINT "table_room_hotel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "table_room_hotel" ADD CONSTRAINT "table_room_hotel_idHotel_fkey" FOREIGN KEY ("idHotel") REFERENCES "Hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "table_type_room" ADD CONSTRAINT "table_type_room_idHotel_fkey" FOREIGN KEY ("idHotel") REFERENCES "Hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
