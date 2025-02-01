import { createStore } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { mockVehicles } from "../mocks/vehicles";

export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
}

export interface VehicleStore {
  vehicles: Vehicle[];
  editingVehicle: Vehicle | null;
  setEditingVehicle: (vehicle: Vehicle | null) => void;
  addVehicle: (vehicle: Omit<Vehicle, "id">) => void;
  updateVehicle: (id: string, vehicle: Partial<Vehicle>) => void;
  deleteVehicle: (id: string) => void;
}

export const createVehicleStore = (initialVehicles = mockVehicles) =>
  createStore<VehicleStore>((set) => ({
    vehicles: initialVehicles,
    editingVehicle: null,
    setEditingVehicle: (vehicle) => set({ editingVehicle: vehicle }),
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
