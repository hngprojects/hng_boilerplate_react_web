/* eslint-disable prettier/prettier */
"use client";

import React, { useEffect, useState } from "react";

import ProductDetailsCard from "./ProductDetailsCard";
 
import { useToast } from "~/components/ui/use-toast";

const ProductDetailsParent: React.FC = () => {
  const [isCardVisible, setIsCardVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const { toast } = useToast(); // Initialize Radix UI Toast

  const handleClose = () => {
    setIsFadingOut(true);
  };

  const handleEdit = (productID: string) => {
    console.log(`Edit button clicked for product ID: ${productID}`);
    toast({
      title: "Edit Action",
      description: `You clicked edit for product ID: ${productID}`,
    });
  };

  const handleDelete = (productID: string) => {
    console.log(`Delete button clicked for product ID: ${productID}`);
    toast({
      title: "Delete Action",
      description: `You clicked delete for product ID: ${productID}`,
    });
  };

  useEffect(() => {
    if (isFadingOut) {
      const timer = setTimeout(() => setIsCardVisible(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isFadingOut]);

  return (
    <div>
      
      {isCardVisible && (
        <div
          className={`transition-all duration-500 ${
            isFadingOut
              ? "translate-y-5 opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >
          <ProductDetailsCard
            productName="Product 2"
            productImageSrc="/images/product_image.jpg"
            productID="P002"
            category="Appetizers"
            dateAdded="2024-06-06, 12:34:56"
            stock="10pcs"
            price="$29.00"
            description="A fusion of ripe bananas, pure honey, and succulent raspberries with our bread. Crafted to perfection."
            onClose={handleClose}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      )}
    </div>
  );
};

export default ProductDetailsParent;
