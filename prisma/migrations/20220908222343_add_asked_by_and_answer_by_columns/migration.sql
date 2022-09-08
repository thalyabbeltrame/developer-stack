/*
  Warnings:

  - Added the required column `answerBy` to the `answers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `askedBy` to the `questions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "answers" ADD COLUMN     "answerBy" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "questions" ADD COLUMN     "askedBy" TEXT NOT NULL;
