/*
  Warnings:

  - You are about to drop the column `maxViews` on the `ShareLink` table. All the data in the column will be lost.
  - You are about to drop the column `viewCount` on the `ShareLink` table. All the data in the column will be lost.
  - You are about to drop the `ShareView` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ShareView" DROP CONSTRAINT "ShareView_shareLinkId_fkey";

-- AlterTable
ALTER TABLE "ShareLink" DROP COLUMN "maxViews",
DROP COLUMN "viewCount",
ADD COLUMN     "maxMembers" INTEGER,
ADD COLUMN     "memberCount" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "ShareView";

-- CreateTable
CREATE TABLE "ShareMember" (
    "id" TEXT NOT NULL,
    "shareLinkId" TEXT NOT NULL,
    "ipAddress" TEXT,
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ShareMember_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ShareMember" ADD CONSTRAINT "ShareMember_shareLinkId_fkey" FOREIGN KEY ("shareLinkId") REFERENCES "ShareLink"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
