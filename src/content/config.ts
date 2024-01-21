import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    featured: z.boolean(),
    title: z.string().min(1).max(80),
    description: z.string().min(1).max(200),
    date: z.date(),
    status: z.enum(["Archiviert", "in Entwicklung", "in Planung"]),
    technologies: z.array(z.string()),
    github: z.string().url(),
    link: z.string().url().optional(),
  }),
});

export const collections = {
  projects: projectCollection,
};
