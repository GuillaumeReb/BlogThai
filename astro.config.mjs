// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://orangered-kudu-477327.hostingersite.com/",
  integrations: [mdx(), sitemap()],
});


// @ts-check
// import { defineConfig } from "astro/config";
// import mdx from "@astrojs/mdx";
// import sitemap from "@astrojs/sitemap";

// https://astro.build/config
// export default defineConfig({
//   site: "https://example.com",
//   integrations: [mdx(), sitemap()],
// });
