-- DropIndex
DROP INDEX "recommendation_data_id_key";

-- AlterTable
ALTER TABLE "recommendation_data" ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "recommendation_data_pkey" PRIMARY KEY ("id");
