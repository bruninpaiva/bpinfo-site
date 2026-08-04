import {
  LayoutDashboard,
  Store,
  Users,
  Percent,
  UserCheck,
  PauseCircle,
  XCircle,
  Tag,
  Barcode,
  BarChart3,
  ShieldCheck,
  KeyRound,
  Smartphone,
  SunMoon,
  type LucideIcon,
} from "lucide-react";
import type { OrbytFeature } from "@/lib/config/orbyt";

const iconMap: Record<OrbytFeature["icon"], LucideIcon> = {
  dashboard: LayoutDashboard,
  store: Store,
  users: Users,
  percent: Percent,
  "user-check": UserCheck,
  pause: PauseCircle,
  "no-sale": XCircle,
  tag: Tag,
  barcode: Barcode,
  report: BarChart3,
  permissions: ShieldCheck,
  password: KeyRound,
  devices: Smartphone,
  theme: SunMoon,
};

export function FeatureIcon({
  icon,
  className,
}: {
  icon: OrbytFeature["icon"];
  className?: string;
}) {
  const Icon = iconMap[icon];
  return <Icon className={className} strokeWidth={1.5} />;
}
