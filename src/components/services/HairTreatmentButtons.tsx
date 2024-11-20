import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface HairTreatmentButtonsProps {
  data: { id: number; name: string }[]; // Accept `data` as an array of objects with id and name
  onActiveChange: (active: string) => void; // Callback to pass the active value to the parent
}

export const HairTreatmentButtons: React.FC<HairTreatmentButtonsProps> = ({
  data,
  onActiveChange,
}) => {
  const [active, setActive] = useState<string>(""); // Default to an empty string

  const handleClick = (optionName: string) => {
    setActive(optionName);
    onActiveChange(optionName); // Notify parent of the active option
  };

  return (
    <div className="flex space-x-4 w-full">
      {data.map((option) => (
        <Button
          key={option.id}
          onClick={() => handleClick(option.name)}
          className={`px-4 py-2 text-sm font-semibold rounded-md outline-none  ${
            active === option.name
              ? "bg-gray-800 text-white"
              : "bg-white text-gray-900 border border-gray-300"
          }`}
        >
          {option.name}
        </Button>
      ))}
    </div>
  );
};
