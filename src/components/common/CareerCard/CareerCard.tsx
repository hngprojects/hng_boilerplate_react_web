import React from "react";

import { Button } from "~/components/ui/button";
import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";

interface CareerCardProperties {
  isLoading: boolean;
  jobTitle?: string;
  location?: string;
  description?: string;
  amount?: string;
  onViewDetails?: () => void;
}

const CareerCard: React.FC<CareerCardProperties> = ({
  isLoading,
  jobTitle,
  location,
  description,
  amount,
  onViewDetails,
}) => {
  return (
    <Card className="text-cardText hover:transtion-all max-w-[100%] hover:scale-[1.04] hover:duration-500">
      <CardContent className="pt-6">
        {isLoading ? (
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-[7px] md:w-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px] md:w-full" />
              <Skeleton className="h-4 w-[200px] md:w-full" />
            </div>
          </div>
        ) : (
          <>
            <h3 className="text-[24px] font-semibold">{jobTitle}</h3>
            <p className="text-[16px]">{location}</p>
            <p className="mt-[12px] line-clamp-2 text-[18px] text-sm">
              {description}
            </p>
          </>
        )}
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        {isLoading ? (
          <>
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-10 w-28" />
          </>
        ) : (
          <>
            <span className="text-[16px] font-semibold">
              {amount}
              <span className="font-normal">/month</span>
            </span>
            <Button
              onClick={onViewDetails}
              className="hover:bg-primary/700 bg-primary text-white"
            >
              View Details
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
};

export default CareerCard;
