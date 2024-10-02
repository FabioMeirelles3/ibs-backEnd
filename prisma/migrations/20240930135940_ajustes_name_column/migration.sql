/*
  Warnings:

  - You are about to drop the column `maritalStatus` on the `TB_Customer` table. All the data in the column will be lost.
  - Added the required column `maritialStatus` to the `TB_Customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TB_Customer" DROP COLUMN "maritalStatus",
ADD COLUMN     "maritialStatus" TEXT NOT NULL;
