import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        ivory: { value: "#F7F4EC" },
        sandstone: { value: "#EAE2D4" },
        charcoal: { value: "#242720" },
        forest: { value: "#243E32" },
        brass: { value: "#B49A68" },
        warmBorder: { value: "#DAD5CA" },
      },
      fonts: {
        heading: { value: "var(--font-editorial), Georgia, serif" },
        body: { value: "var(--font-interface), Arial, sans-serif" },
      },
      radii: {
        editorial: { value: "2px" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
