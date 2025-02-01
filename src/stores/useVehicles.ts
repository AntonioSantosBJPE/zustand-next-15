import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
}

interface VehicleStore {
  vehicles: Vehicle[];
  addVehicle: (vehicle: Omit<Vehicle, "id">) => void;
  updateVehicle: (id: string, vehicle: Partial<Vehicle>) => void;
  deleteVehicle: (id: string) => void;
}

export const useVehiclesStore = create<VehicleStore>((set) => ({
  vehicles: [],
  addVehicle: (vehicle) =>
    set((state) => ({
      vehicles: [...state.vehicles, { ...vehicle, id: uuidv4() }],
    })),
  updateVehicle: (id, updatedVehicle) =>
    set((state) => ({
      vehicles: state.vehicles.map((vehicle) =>
        vehicle.id === id ? { ...vehicle, ...updatedVehicle } : vehicle
      ),
    })),
  deleteVehicle: (id) =>
    set((state) => ({
      vehicles: state.vehicles.filter((vehicle) => vehicle.id !== id),
    })),
}));
