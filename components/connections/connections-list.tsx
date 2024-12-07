'use client';

import { ConnectionCard } from './connection-card';
import { PlatformConnection } from '@/lib/types/platform';
import { useState } from 'react';

const initialConnections: PlatformConnection[] = [
  {
    id: '1',
    platform: 'instagram',
    accountId: 'inst_123',
    accountName: 'Business Account',
    connected: true,
    lastSync: new Date('2024-03-20'),
  },
  {
    id: '2',
    platform: 'whatsapp',
    accountId: 'wa_456',
    accountName: 'Customer Support',
    connected: true,
    lastSync: new Date('2024-03-21'),
  },
  {
    id: '3',
    platform: 'linkedin',
    accountId: 'li_789',
    accountName: 'Company Page',
    connected: false,
  },
  {
    id: '4',
    platform: 'facebook',
    accountId: 'fb_012',
    accountName: 'Business Page',
    connected: true,
    lastSync: new Date('2024-03-19'),
  },
];

export function ConnectionsList() {
  const [connections, setConnections] = useState<PlatformConnection[]>(initialConnections);

  const handleConnectionToggle = (id: string, enabled: boolean) => {
    setConnections(prev =>
      prev.map(conn =>
        conn.id === id ? { ...conn, connected: enabled } : conn
      )
    );
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {connections.map((connection) => (
        <ConnectionCard
          key={connection.id}
          connection={connection}
          onToggle={handleConnectionToggle}
        />
      ))}
    </div>
  );
}