/*
  Warnings:

  - You are about to drop the column `allowMembers` on the `ShareLink` table. All the data in the column will be lost.
  - You are about to drop the column `userAgent` on the `ShareView` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ShareLink" DROP COLUMN "allowMembers";

-- AlterTable
ALTER TABLE "ShareView" DROP COLUMN "userAgent";
