import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import image from "@astrojs/image";
import { SITE } from "./src/config.mjs";

// https://astro.build/config
export default defineConfig({
  site: SITE.domain,
  integrations: [react(), tailwind(), image()],
});
