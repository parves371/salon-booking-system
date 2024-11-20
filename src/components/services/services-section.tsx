"use client";

import { HairTreatmentButtons } from "@/components/services/HairTreatmentButtons";
import React, { useState } from "react";
import TreatmentCard from "./TreatmentCardProps";

// Define the types for services, categories, and treatments
interface Option {
  id: number;
  name: string;
  time: string;
  price: number;
}

interface Treatment {
  id: number;
  name: string;
  time: string;
  price: number;
  option: boolean;
  options: Option[];
}

interface Category {
  id: number;
  name: string;
  items: Treatment[];
}

interface ServicesData {
  data: Category[];
}

// Define services data
const servicesData: ServicesData = {
  data: [
    {
      id: 1,
      name: "Category 1",
      items: [
        {
          id: 1,
          name: "item 1",
          time: "1hr",
          price: 800,
          option: true,
          options: [
            { id: 1, name: "Option 1", time: "1hr", price: 850 },
            { id: 2, name: "Option 2", time: "1hr", price: 50 },
            { id: 3, name: "Option 3", time: "1hr", price: 550 },
            { id: 4, name: "Option 4", time: "1hr", price: 850 },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Category 2",
      items: [
        {
          id: 2,
          name: "item 2",
          time: "1hr",
          price: 800,
          option: false,
          options: [],
        },
      ],
    },
    {
      id: 3,
      name: "Category 3",
      items: [
        {
          id: 3,
          name: "item 3",
          time: "1hr",
          price: 800,
          option: false,
          options: [],
        },
      ],
    },
    {
      id: 4,
      name: "Category 4",
      items: [
        {
          id: 4,
          name: "item 4",
          time: "1hr",
          price: 800,
          option: false,
          options: [],
        },
      ],
    },
  ],
};

export const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState<string>(
    servicesData?.data[0]?.name || ""
  ); // Default to the first category name
  const [selectedTreatment, setSelectedTreatment] = useState<number | null>(
    null
  ); // Track selected treatment

  // Find the active category based on the activeService
  const activeCategory = servicesData.data.find(
    (category) => category.name === activeService
  );

  return (
    <section className="container mx-auto">
      <div className="flex justify-between items-center w-full">
        {/* Left section */}
        <div className="w-[70%] overflow-hidden">
          <h2 className="text-2xl font-bold mb-4">Services</h2>
          <div className="overflow-x-auto whitespace-nowrap hide-scrollbar py-2">
            <HairTreatmentButtons
              data={servicesData.data} // Pass the categories
              onActiveChange={(active: string) => setActiveService(active)}
            />
          </div>

          <div className="space-y-4">
            {activeCategory?.items.map((treatment) => (
              <TreatmentCard
                key={treatment.id}
                name={treatment.name}
                time={treatment.time}
                price={treatment.price.toString()}
                isSelected={selectedTreatment === treatment.id}
                onSelect={() => setSelectedTreatment(treatment.id)}
              />
            ))}
          </div>

          <p className="mt-4 text-lg font-semibold">
            Active Service: {activeService}
          </p>
        </div>

        {/* Right section */}
        <div className="w-[30%]">
          {/* Additional details or content can be added here */}
        </div>
      </div>
    </section>
  );
};
