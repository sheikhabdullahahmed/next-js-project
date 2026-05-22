import { LucideIcon } from "lucide-react";

export interface NavItem {
  name: string;
  icon: LucideIcon;
  href: string;
}
export interface SidebarProps {
  items: {
    title: string;
    href: string;
  }[];
}
