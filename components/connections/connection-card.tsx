'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { PlatformConnection } from '@/lib/types/platform';
import { Instagram, MessageCircle, Linkedin, Facebook } from 'lucide-react';
import { useState } from 'react';

const platformIcons = {
  instagram: Instagram,
  whatsapp: MessageCircle,
  linkedin: Linkedin,
  facebook: Facebook,
};

interface ConnectionCardProps {
  connection: PlatformConnection;
  onToggle: (id: string, enabled: boolean) => void;
}

export function ConnectionCard({ connection, onToggle }: ConnectionCardProps) {
  const [isEnabled, setIsEnabled] = useState(connection.connected);
  const Icon = platformIcons[connection.platform];

  const handleToggle = (enabled: boolean) => {
    setIsEnabled(enabled);
    onToggle(connection.id, enabled);
  };

  return (
    <Card className="hover:shadow-md transition-shadow duration-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-2">
          <Icon className="h-5 w-5 text-muted-foreground" />
          <h3 className="font-semibold capitalize">{connection.platform}</h3>
        </div>
        <Switch checked={isEnabled} onCheckedChange={handleToggle} />
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          <p className="text-sm font-medium">{connection.accountName}</p>
          <p className="text-xs text-muted-foreground">
            Last synced: {connection.lastSync ? new Date(connection.lastSync).toLocaleDateString() : 'Never'}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}