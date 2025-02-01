import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useVehiclesStore } from "@/stores/useVehicles";
import { vehicleFormSchema, type VehicleFormData } from "../schema";

export function VehicleForm() {
  const addVehicle = useVehiclesStore((state) => state.addVehicle);
  const updateVehicle = useVehiclesStore((state) => state.updateVehicle);
  const editingVehicle = useVehiclesStore((state) => state.editingVehicle);
  const setEditingVehicle = useVehiclesStore(
    (state) => state.setEditingVehicle
  );

  const form = useForm<VehicleFormData>({
    resolver: zodResolver(vehicleFormSchema),
    defaultValues: {
      brand: "",
      model: "",
      year: 2024,
      price: 0,
    },
  });

  useEffect(() => {
    if (editingVehicle) {
      form.reset({
        brand: editingVehicle.brand,
        model: editingVehicle.model,
        year: editingVehicle.year,
        price: editingVehicle.price,
      });
    }
  }, [editingVehicle, form]);

  const onSubmit = (data: VehicleFormData) => {
    if (editingVehicle) {
      updateVehicle(editingVehicle.id, data);
      setEditingVehicle(null);
    } else {
      addVehicle(data);
    }
    handleReset();
  };

  const handleReset = () => {
    form.reset({
      brand: "",
      model: "",
      year: 2024,
      price: 0,
    });
    setEditingVehicle(null);
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>
          {editingVehicle ? "Edit Vehicle" : "Add New Vehicle"}
        </CardTitle>
        <CardDescription>Enter the vehicle details below</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid w-full items-center gap-4">
              <FormField
                control={form.control}
                name="brand"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Brand</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="model"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Model</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="year"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Year</FormLabel>
                    <FormControl>
                      <Input type="number" min={1900} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.01" min={0} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-2">
              <Button type="submit">
                {editingVehicle ? "Update Vehicle" : "Add Vehicle"}
              </Button>
              <Button type="button" variant="outline" onClick={handleReset}>
                Clear Form
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
