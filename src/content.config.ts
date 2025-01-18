import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const newsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/data/news" }),
  schema: z.object({
    date: z.date(),
    isDraft: z.boolean(),
  }),
});
const quotesCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/data/quotes" }),
  schema: z.object({}),
});

export const collections = {
  news: newsCollection,
  quotes: quotesCollection,
};
