"use client";

import { VehicleForm } from "./components/VehicleForm";
import { VehicleList } from "./components/VehicleList";

export function VehicleContainer() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Vehicle Basic Zustand</h1>
      <VehicleForm />
      <VehicleList />
    </div>
  );
}
