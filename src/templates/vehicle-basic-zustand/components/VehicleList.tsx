import { useVehiclesStore } from "@/stores/useVehicles";
import { VehicleCard } from "./VehicleCard";

export function VehicleList() {
  const vehicles = useVehiclesStore((state) => state.vehicles);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} {...vehicle} />
      ))}
    </div>
  );
}
