import type { ElementType, ReactNode } from "react";

type Material = "paper" | "leather" | "sandstone" | "walnut";

export function MaterialSurface({ material, as: Tag = "div", className = "", children }: { material: Material; as?: ElementType; asChild?: boolean; className?: string; children: ReactNode }) {
  return <Tag className={`material material-${material} ${className}`.trim()}>{children}</Tag>;
}
