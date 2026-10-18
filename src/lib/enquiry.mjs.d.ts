export type EnquiryType = "stay" | "dining" | "celebration";
export type EnquiryDetails = { start: string; end: string; guests: string; name?: string };
export function validateEnquiry(type: EnquiryType, details: EnquiryDetails): Partial<Record<"start" | "end" | "guests", string>>;
export function buildWhatsAppEnquiry(type: EnquiryType, details: EnquiryDetails): string;
