import z from "zod";

export const validateNewPoolServiceEntry = z.object({
  alkalinity: z.number().min(0).max(400).describe("0-400"),
  chlorine: z.number().min(0).max(10).describe("0-10"),
  ph: z.number().min(7).max(8).describe("7-8"),
  calcium: z.number().min(0).max(1000).optional().describe("0-1000"),
  cya: z.number().min(0).max(100).optional().describe("0-100"),
  salt: z.number().min(0).max(10000).optional().describe("0-10000"),
});

export const validateProfileInputs = z.object({
  firstName: z.string().min(1).max(25),
  lastName: z.string().min(1).max(25),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z
    .number()
    .min(10)
    .max(10)
    .refine((val) => !isNaN(Number(val)), {
      message: "Please enter a valid phone number",
    }),
});

export const OrgOptions = ["Pool Technician", "HouseMeister", "Route Delivery"];
export const validateOrganizationInputs = z.object({
  orgName: z.string().min(1).max(50),
  orgType: z.string().refine((val) => OrgOptions.includes(val), {
    message: "Org Type should be one of the pre-defined options",
  }),
  teamSize: z
    .number()
    .min(1, { message: "Value must be greater than 0" })
    .max(9999, { message: "Value must be less than 10,000" }),
});
