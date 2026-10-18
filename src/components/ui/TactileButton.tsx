import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "brass" | "leather" | "engraved";
type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; href?: string; loading?: boolean; children: ReactNode };

export function TactileButton({ variant = "brass", href, loading = false, disabled = false, className = "", children, ...props }: Props) {
  const classes = `tactileButton tactile-${variant} ${className}`.trim();
  if (href && !disabled && !loading) return <Link className={classes} href={href}>{children}</Link>;
  return <button {...props} className={classes} disabled={disabled || loading} aria-busy={loading || undefined}>{loading ? <><span className="buttonSpinner" aria-hidden="true"/> Please wait</> : children}</button>;
}
