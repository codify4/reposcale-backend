/*
  Warnings:

  - You are about to drop the column `githubId` on the `GithubInstallation` table. All the data in the column will be lost.
  - Added the required column `userId` to the `GithubInstallation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "GithubInstallation" DROP CONSTRAINT "GithubInstallation_githubId_fkey";

-- AlterTable
ALTER TABLE "GithubInstallation" DROP COLUMN "githubId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "GithubInstallation" ADD CONSTRAINT "GithubInstallation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
