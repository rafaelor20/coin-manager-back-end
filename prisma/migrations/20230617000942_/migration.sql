/*
  Warnings:

  - You are about to drop the column `paidDate` on the `UserDebt` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserDebt" DROP COLUMN "paidDate",
ADD COLUMN     "payDate" TIMESTAMP(3);
