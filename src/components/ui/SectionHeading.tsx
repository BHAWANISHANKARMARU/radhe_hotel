import { Box, Text } from "@chakra-ui/react";

export function SectionHeading({ eyebrow, title, intro, align = "left" }: { eyebrow: string; title: string; intro?: string; align?: "left" | "center" }) {
  return <Box className={`sectionHeading ${align === "center" ? "center" : ""}`}>
    <Text className="eyebrow">{eyebrow}</Text>
    <h2>{title}</h2>
    {intro && <p>{intro}</p>}
  </Box>;
}
