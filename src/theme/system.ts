import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        parchment: { value: "#F3EBDD" }, lightPaper: { value: "#FBF7ED" }, agedPaper: { value: "#E6DAC3" },
        forest: { value: "#244334" }, darkLeather: { value: "#172B22" }, greenHighlight: { value: "#45634D" },
        brass: { value: "#B3975F" }, lightBrass: { value: "#D7BF87" }, deepBrass: { value: "#796039" },
        walnut: { value: "#5A3A28" }, darkWalnut: { value: "#352319" },
        ink: { value: "#282820" }, secondaryInk: { value: "#625D51" }, warmEdge: { value: "#C7B99E" }, engravedEdge: { value: "#A39273" },
      },
      fonts: {
        heading: { value: "var(--font-editorial), Georgia, serif" },
        body: { value: "var(--font-interface), Arial, sans-serif" },
      },
      radii: {
        editorial: { value: "2px" },
      },
      shadows: {
        ambient: { value: "0 18px 44px rgba(53,35,25,.14), 0 3px 8px rgba(53,35,25,.09)" },
        raised: { value: "inset 0 1px rgba(255,255,255,.65), inset 0 -1px rgba(53,35,25,.22), 0 7px 14px rgba(53,35,25,.18)" },
        recessed: { value: "inset 0 2px 5px rgba(53,35,25,.18), inset 0 -1px rgba(255,255,255,.7)" },
        pressed: { value: "inset 0 3px 7px rgba(53,35,25,.28), 0 1px rgba(255,255,255,.35)" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
