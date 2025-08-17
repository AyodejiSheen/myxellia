import React from "react";
import { Iconify } from "./icon";
import { cn } from "@/utils/helper";

interface Props {
  title: string;
  value: string;
  percentage: string;
  isUp?: boolean;
  titleClass: string;
}

const StatsCard = ({
  title,
  isUp = false,
  value,
  percentage,
  titleClass,
}: Props) => {
  return (
    <div className="h-max border border-gray p-3 rounded-xl space-y-2">
      <h1 className={cn("font-semibold text-lg", titleClass)}>{value}</h1>
      <div className="flex items-center gap-2 text-[10px]">
        <p className="text-[#3D3D3D] font-medium whitespace-nowrap">{title}</p>
        <div
          className={cn(
            "flex items-center gap-1",
            isUp ? "text-green" : "text-danger"
          )}
        >
          <Iconify icon="emojione-monotone:up-arrow" />
          <p>{percentage}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
