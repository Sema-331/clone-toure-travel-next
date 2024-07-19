-- CreateTable
CREATE TABLE "FeedBackUser" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "userName" TEXT NOT NULL,
    "places" TEXT NOT NULL,
    "image" TEXT,

    CONSTRAINT "FeedBackUser_pkey" PRIMARY KEY ("id")
);
