import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const quotes = await getCollection("quotes");
  return rss({
    title: "qdb :: latest quotes",
    description: "quotes distilled from basement dwellers all over the world.",
    site: context.site,
    items: quotes
      .map((q) => ({
        title: q.id,
        description: `Quote ${q.id} has been added to the site.`,
        link: `/quotes/${q.id}`,
      }))
      .sort((a, b) => b.title - a.title),
  });
}
