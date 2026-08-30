import { CDN_BASE, isCdnEnabled } from "@/lib/cdn";

export const cdnLoader = ({ src }: { src: string }) => {
  if (isCdnEnabled && src.startsWith("/")) {
    return `${CDN_BASE}${src}`;
  }
  return src;
};
