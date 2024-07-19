// pages/index.tsx
"use client";

import React, { useEffect, useState } from "react";

import CareerCard from "./CareerCard";

//The View details button function
const handleViewDetails = () => {
  console.log("View career details!");
};

const CareerCardParent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mx-auto flex items-center justify-center px-5">
      <CareerCard
        isLoading={isLoading}
        jobTitle="Frontend Developer"
        location="San Francisco, CA"
        description="We are seeking a talented Frontend Developer to join our dynamic team. The ideal candidate will have strong skills in React, TypeScript, and modern CSS frameworks."
        amount="$120,000"
        onViewDetails={handleViewDetails}
      />
    </div>
  );
};

export default CareerCardParent;
