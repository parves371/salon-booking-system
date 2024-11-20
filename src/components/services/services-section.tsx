"use client";

import { HairTreatmentButtons } from "@/components/services/HairTreatmentButtons";
import React, { useState } from "react";
import servicesData from "@/../data/frisha.json";

export const ServicesSection = () => {
  const [activeService, setActiveService] = useState<string>(
    servicesData?.data[0]?.name
  );

  return (
    <section className="container mx-auto">
      <div className="flex justify-between items-center w-full">
        <div className="w-[70%] overflow-hidden">
          <h2 className="text-2xl font-bold mb-4">Services</h2>
          <div className="overflow-x-auto whitespace-nowrap hide-scrollbar py-2">
            <HairTreatmentButtons
              data={servicesData.data} // Pass the options array
              onActiveChange={(active) => setActiveService(active)}
            />
          </div>
          <p className="mt-4 text-lg font-semibold">
            Active Service: {activeService}
          </p>
        </div>
        <div className="w-[30%]"></div>
      </div>
    </section>
  );
};
