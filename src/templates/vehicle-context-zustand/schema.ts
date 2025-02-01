import { z } from "zod";

export const vehicleFormSchema = z.object({
  brand: z.string().min(1, "Brand is required"),
  model: z.string().min(1, "Model is required"),
  year: z.coerce.number().min(1900, "Year must be after 1900"),
  price: z.coerce.number().min(0, "Price must be positive"),
});

export type VehicleFormData = z.infer<typeof vehicleFormSchema>;
