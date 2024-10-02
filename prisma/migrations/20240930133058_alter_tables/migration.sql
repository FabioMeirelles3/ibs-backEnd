-- CreateTable
CREATE TABLE "TB_User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "TB_User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TB_Customer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "maritalStatus" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "TB_Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TB_Address" (
    "id" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complement" TEXT,
    "neighborhood" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "customerId" TEXT,

    CONSTRAINT "TB_Address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TB_User_email_key" ON "TB_User"("email");

-- AddForeignKey
ALTER TABLE "TB_Address" ADD CONSTRAINT "TB_Address_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "TB_Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
