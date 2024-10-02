/*
  Warnings:

  - You are about to drop the column `neighborhood` on the `TB_Address` table. All the data in the column will be lost.
  - Added the required column `district` to the `TB_Address` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `number` on the `TB_Address` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "TB_Address" DROP COLUMN "neighborhood",
ADD COLUMN     "district" TEXT NOT NULL,
DROP COLUMN "number",
ADD COLUMN     "number" INTEGER NOT NULL;
