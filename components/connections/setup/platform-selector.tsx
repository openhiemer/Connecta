'use client';

import { Button } from '@/components/ui/button';
import { SocialPlatform } from '@/lib/types/platform';
import { Instagram, MessageCircle, Linkedin, Facebook } from 'lucide-react';

const platforms: Array<{
  id: SocialPlatform;
  name: string;
  icon: React.ElementType;
  description: string;
}> = [
  {
    id: 'instagram',
    name: 'Instagram',
    icon: Instagram,
    description: 'Connect your Instagram Business account',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    icon: MessageCircle,
    description: 'Connect your WhatsApp Business account',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: Linkedin,
    description: 'Connect your LinkedIn Company Page',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    icon: Facebook,
    description: 'Connect your Facebook Business Page',
  },
];

interface PlatformSelectorProps {
  onSelect: (platform: SocialPlatform) => void;
}

export function PlatformSelector({ onSelect }: PlatformSelectorProps) {
  return (
    <div className="grid gap-4 py-4">
      {platforms.map((platform) => (
        <Button
          key={platform.id}
          variant="outline"
          className="flex items-center justify-start space-x-4 h-auto p-4"
          onClick={() => onSelect(platform.id)}
        >
          <platform.icon className="h-5 w-5" />
          <div className="text-left">
            <div className="font-medium">{platform.name}</div>
            <div className="text-sm text-muted-foreground">
              {platform.description}
            </div>
          </div>
        </Button>
      ))}
    </div>
  );
}