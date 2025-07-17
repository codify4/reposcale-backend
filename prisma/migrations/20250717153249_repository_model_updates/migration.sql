/*
  Warnings:

  - You are about to drop the column `fullName` on the `Repository` table. All the data in the column will be lost.
  - You are about to drop the column `private` on the `Repository` table. All the data in the column will be lost.
  - You are about to drop the column `topics` on the `Repository` table. All the data in the column will be lost.
  - Added the required column `forks` to the `Repository` table without a default value. This is not possible if the table is not empty.
  - Added the required column `members` to the `Repository` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stars` to the `Repository` table without a default value. This is not possible if the table is not empty.
  - Added the required column `watchers` to the `Repository` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Repository" DROP COLUMN "fullName",
DROP COLUMN "private",
DROP COLUMN "topics",
ADD COLUMN     "forks" INTEGER NOT NULL,
ADD COLUMN     "members" INTEGER NOT NULL,
ADD COLUMN     "stars" INTEGER NOT NULL,
ADD COLUMN     "watchers" INTEGER NOT NULL;
