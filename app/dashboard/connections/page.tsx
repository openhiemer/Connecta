'use client';

import { ConnectionsList } from '@/components/connections/connections-list';
import { ConnectionMetrics } from '@/components/connections/connection-metrics';
import { ConnectionWizard } from '@/components/connections/setup/connection-wizard';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { PlatformConnection } from '@/lib/types/platform';

export default function ConnectionsPage() {
  const [showWizard, setShowWizard] = useState(false);

  const handleConnectionComplete = (connection: PlatformConnection) => {
    // Here you would typically save the connection to your backend
    console.log('New connection:', connection);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Platform Connections</h1>
        <Button onClick={() => setShowWizard(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Add Connection
        </Button>
      </div>
      
      <ConnectionMetrics />
      <ConnectionsList />

      <ConnectionWizard
        open={showWizard}
        onOpenChange={setShowWizard}
        onComplete={handleConnectionComplete}
      />
    </div>
  );
}