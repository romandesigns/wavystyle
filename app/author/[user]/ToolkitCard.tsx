import React from "react";
import { cn } from "@/lib/utils";
import { IconType } from "react-icons";

const ToolkitCard = ({
  technology,
  Icon,
}: {
  Icon: IconType;
  technology: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-auto cursor-pointer overflow-hidden rounded-sm border p-4 py-2",
        // light styles
        "border-white/[.2] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-start items-center gap-4">
          <Icon />
          <figcaption className="text-sm font-medium dark:text-white">
            {technology}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export default ToolkitCard;
