/*
  Warnings:

  - You are about to drop the column `time` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "time",
ADD COLUMN     "timePublished" TEXT NOT NULL DEFAULT 'June 13, 2024';
