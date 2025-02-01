"use client";

import { VehicleContainer } from "@/templates/vehicle-context-zustand/VehicleContainer";
import { VehicleStoreProvider } from "@/templates/vehicle-context-zustand/context/VehicleContext";

export default function VehicleContextZustandPage() {
  return (
    <VehicleStoreProvider>
      <VehicleContainer />
    </VehicleStoreProvider>
  );
}
