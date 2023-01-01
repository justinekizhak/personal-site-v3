import { z } from "zod";

const projectDetailsSchema = z.object({
  content: z.object({
    title: z.string(),
    domain: z.string(),
    summary: z.string(),
    description: z.string(),
  }),
  full_slug: z.string(),
  slug: z.string(),
  name: z.string(),
});

export const projectListSchema = z.array(projectDetailsSchema);

export type TProjectDetails = z.infer<typeof projectDetailsSchema>;
export type TProjectDetailsList = z.infer<typeof projectListSchema>;
