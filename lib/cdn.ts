export const CDN_BASE =
  process.env.NEXT_PUBLIC_CDN_BASE_URL || "";

export const isCdnEnabled = Boolean(CDN_BASE);
