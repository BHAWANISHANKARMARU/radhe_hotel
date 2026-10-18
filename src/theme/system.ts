import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: { value: "#123B32" },
        brandHover: { value: "#0C2E27" },
        canvas: { value: "#FAF9F5" },
        surface: { value: "#FFFFFF" },
        ink: { value: "#1E2723" },
        muted: { value: "#65716B" },
        line: { value: "#E6E5DF" },
        sage: { value: "#DDE5E0" },
        warm: { value: "#B98558" },
        danger: { value: "#9B3D35" },
      },
      fonts: {
        heading: { value: "var(--font-manrope), Arial, sans-serif" },
        body: { value: "var(--font-inter), Arial, sans-serif" },
      },
      radii: { control: { value: "8px" }, media: { value: "12px" } },
      shadows: { lift: { value: "0 18px 50px rgba(18, 59, 50, 0.10)" } },
    },
  },
});

export const system = createSystem(defaultConfig, config);
