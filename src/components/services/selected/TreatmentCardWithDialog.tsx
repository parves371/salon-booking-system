import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Option {
  id: number;
  name: string;
  time: string;
  price: number;
}

interface TreatmentCardProps {
  name: string;
  time: string;
  price: string;
  isSelected: boolean;
  onSelect: () => void;
  hasOptions: boolean;
  options?: Option[];
}

const TreatmentCardWithDialog: React.FC<TreatmentCardProps> = ({
  name,
  time,
  price,
  isSelected,
  onSelect,
  hasOptions,
  options = [],
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  return (
    <>
      <div
        onClick={onSelect}
        className={`flex justify-between items-center p-4 border rounded-lg cursor-pointer ${
          isSelected ? "border-purple-500 bg-purple-50" : "border-gray-300 bg-white"
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

      {hasOptions && (
        <Dialog>
          <DialogTrigger>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
              {isSelected ? "Update Option" : "Select Option"}
            </button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{isSelected ? "Update Option" : "Choose an Option"}</DialogTitle>
              <DialogDescription>
                {isSelected
                  ? "You can update or remove your selected option."
                  : "Choose an option to proceed."}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              {options.map((option) => (
                <div
                  key={option.id}
                  onClick={() => setSelectedOption(option.id)}
                  className={`flex justify-between items-center p-4 border rounded-lg cursor-pointer ${
                    selectedOption === option.id
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  <div>
                    <h3 className="text-lg font-semibold">{option.name}</h3>
                    <p className="text-sm text-gray-500">{option.time}</p>
                    <p className="text-lg font-medium mt-2">AED {option.price}</p>
                  </div>
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full ${
                      selectedOption === option.id ? "bg-purple-500 text-white" : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {selectedOption === option.id ? "✔" : "+"}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-end space-x-4">
              <button
                onClick={() => {
                  setSelectedOption(null);
                  onSelect();
                }}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Remove
              </button>
              <button
                onClick={onSelect}
                className="px-4 py-2 bg-green-500 text-white rounded"
              >
                Update
              </button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default TreatmentCardWithDialog;
