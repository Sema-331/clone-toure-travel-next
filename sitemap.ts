import { Metadata, MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  //   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  //   const res2 = await res.json();

  //   const articleEntries = res2.map(({ id }: {id: number}) => ({
  //     url: `http:localhost:3000/fundamentals/${id}`,
  //     // lastModified: res2.updatedAt
  //     priority: 0.6,
  //   }));

  return [
    {
      url: "http:localhost:3000",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "http:localhost:3000/FindFly",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "http:localhost:3000/FindHotel",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // ...articleEntries,
  ];
}
