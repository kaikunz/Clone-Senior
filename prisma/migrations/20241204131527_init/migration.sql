/*
  Warnings:

  - The `type` column on the `videos` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "videos" DROP COLUMN "type",
ADD COLUMN     "type" INTEGER;
