-- CreateEnum
CREATE TYPE "DeliveryType" AS ENUM ('BYCOURIER', 'PICKUP');

-- CreateEnum
CREATE TYPE "PaymentType" AS ENUM ('CASH', 'BYCARD');

-- CreateEnum
CREATE TYPE "ProductType" AS ENUM ('PIZZA', 'ROLS', 'SUSHI', 'WOK', 'SETS', 'BEVERAGES');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PROCESSING', 'GETTINGREADY', 'DELIVERED', 'ISSUED');

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" "ProductType" NOT NULL,
    "price" INTEGER NOT NULL,
    "details" JSONB NOT NULL,
    "compound" TEXT[],
    "image" TEXT NOT NULL,
    "popularity" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "phone" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "payment" "PaymentType" NOT NULL,
    "comments" TEXT,
    "delivery" "DeliveryType" NOT NULL,
    "street" TEXT NOT NULL,
    "house" INTEGER NOT NULL,
    "is_private_house" BOOLEAN,
    "apartment" INTEGER,
    "entrance" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "OrderStatus" NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderCart" (
    "productId" TEXT NOT NULL,
    "orderId" INTEGER NOT NULL,

    CONSTRAINT "OrderCart_pkey" PRIMARY KEY ("productId","orderId")
);

-- AddForeignKey
ALTER TABLE "OrderCart" ADD CONSTRAINT "OrderCart_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderCart" ADD CONSTRAINT "OrderCart_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
