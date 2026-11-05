import type { IconBaseProps } from "react-icons";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import type { SocialNetwork } from "../../config/types";

const icons = {
  facebook: FaFacebook,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  youtube: FaYoutube,
  tiktok: FaTiktok,
  x: FaXTwitter,
  whatsapp: FaWhatsapp,
} as const;

export default function SocialIcon({
  network,
  ...props
}: { network: SocialNetwork | "whatsapp" } & IconBaseProps) {
  const Icon = icons[network];
  return <Icon aria-hidden {...props} />;
}

/** Link wa.me a partire da un numero in formato E.164. */
export function whatsappUrl(e164: string): string {
  return `https://wa.me/${e164.replace(/\D/g, "")}`;
}
