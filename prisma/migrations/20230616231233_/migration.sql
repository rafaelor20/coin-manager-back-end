/*
  Warnings:

  - You are about to drop the column `paidAt` on the `UserCredit` table. All the data in the column will be lost.
  - You are about to drop the column `paidAt` on the `UserDebt` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserCredit" DROP COLUMN "paidAt",
ADD COLUMN     "payDate" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "UserDebt" DROP COLUMN "paidAt",
ADD COLUMN     "paidDate" TIMESTAMP(3);
