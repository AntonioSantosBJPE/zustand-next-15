import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useVehiclesStore } from "@/stores/useVehicles";

interface VehicleCardProps {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
}

export function VehicleCard(props: VehicleCardProps) {
  const setEditingVehicle = useVehiclesStore(
    (state) => state.setEditingVehicle
  );
  const deleteVehicle = useVehiclesStore((state) => state.deleteVehicle);

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {props.brand} {props.model}
        </CardTitle>
        <CardDescription>Year: {props.year}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">${props.price.toLocaleString()}</p>
        <div className="flex gap-2 mt-4">
          <Button variant="outline" onClick={() => setEditingVehicle(props)}>
            Edit
          </Button>
          <Button variant="destructive" onClick={() => deleteVehicle(props.id)}>
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
