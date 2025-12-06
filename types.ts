import { LucideIcon } from 'lucide-react';

export interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: LucideIcon;
  highlight?: boolean;
}
