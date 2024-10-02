/*
  Warnings:

  - You are about to drop the `TB_User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "TB_User";

-- CreateTable
CREATE TABLE "TB_Users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "TB_Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TB_Users_email_key" ON "TB_Users"("email");
