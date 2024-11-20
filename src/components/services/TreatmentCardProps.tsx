import React from "react";

interface TreatmentCardProps {
  name: string;
  time: string;
  price: string;
  isSelected: boolean;
  onSelect: () => void;
}

const TreatmentCard: React.FC<TreatmentCardProps> = ({
  name,
  time,
  price,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      onClick={onSelect}
      className={`flex justify-between items-center p-4 border rounded-lg cursor-pointer ${
        isSelected
          ? "border-purple-500 bg-purple-50"
          : "border-gray-300 bg-white"
      }`}
    >
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{time}</p>
        <p className="text-lg font-medium mt-2">AED {price}</p>
      </div>
      <div
        className={`w-8 h-8 flex items-center justify-center rounded-full ${
          isSelected ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-500"
        }`}
      >
        {isSelected ? "✔" : "+"}
      </div>
    </div>
  );
};

export default TreatmentCard;
