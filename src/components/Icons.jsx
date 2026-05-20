import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const iconClass = "w-5 h-5";

export function PhoneIcon({ className = iconClass }) {
  return <FaPhone className={className} aria-hidden />;
}

export function MapPinIcon({ className = iconClass }) {
  return <FaMapMarkerAlt className={className} aria-hidden />;
}

export function MailIcon({ className = iconClass }) {
  return <FaEnvelope className={className} aria-hidden />;
}

export const SOCIAL_ICONS = {
  facebook: { Icon: FaFacebookF, label: "Facebook" },
  twitter: { Icon: FaXTwitter, label: "X" },
  linkedin: { Icon: FaLinkedinIn, label: "LinkedIn" },
  github: { Icon: FaGithub, label: "GitHub" },
  instagram: { Icon: FaInstagram, label: "Instagram" },
  youtube: { Icon: FaYoutube, label: "YouTube" },
  email: { Icon: FaEnvelope, label: "Email" },
};

export function SocialIcon({ platform, className = "w-4 h-4" }) {
  const entry = SOCIAL_ICONS[platform];
  if (!entry) return null;
  const { Icon } = entry;
  return <Icon className={className} aria-hidden />;
}

export function PhonePrefix() {
  return (
    <span className="inline-flex items-center gap-1.5 shrink-0">
      <span className="text-[10px] font-bold tracking-wide uppercase opacity-80">CM</span>
      <span>+237</span>
    </span>
  );
}
