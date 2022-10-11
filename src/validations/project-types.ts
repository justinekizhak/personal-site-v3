import { z } from "zod"

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
})

const projectListSchema = z.array(projectDetailsSchema)

export const validateProjectList = (data: unknown): IProjectDetails[] =>
  projectListSchema.parse(data)

export type IProjectDetails = z.infer<typeof projectDetailsSchema>
