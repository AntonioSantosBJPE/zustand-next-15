import { createContext, useContext, useState, ReactNode } from "react";
import { type StoreApi, useStore } from "zustand";
import {
  createVehicleStore,
  type VehicleStore,
} from "../store/createVehicleStore";

const VehicleStoreContext = createContext<StoreApi<VehicleStore> | null>(null);

interface VehicleStoreProviderProps {
  children: ReactNode;
  initialVehicles?: VehicleStore["vehicles"];
}

export function VehicleStoreProvider({
  children,
  initialVehicles,
}: VehicleStoreProviderProps) {
  const [store] = useState(() => createVehicleStore(initialVehicles));

  return (
    <VehicleStoreContext.Provider value={store}>
      {children}
    </VehicleStoreContext.Provider>
  );
}

export function useVehicleStore<T>(selector: (state: VehicleStore) => T): T {
  const store = useContext(VehicleStoreContext);

  if (!store) {
    throw new Error("Missing VehicleStoreProvider");
  }

  return useStore(store, selector);
}
