'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SocialPlatform } from '@/lib/types/platform';
import { useState } from 'react';

interface PlatformAuthProps {
  platform: SocialPlatform;
  onComplete: (data: { accountId: string; accountName: string }) => void;
  onBack: () => void;
}

export function PlatformAuth({ platform, onComplete, onBack }: PlatformAuthProps) {
  const [accountName, setAccountName] = useState('');

  const handleAuth = () => {
    // Simulate OAuth flow
    setTimeout(() => {
      onComplete({
        accountId: `${platform}_${Date.now()}`,
        accountName: accountName || 'Business Account',
      });
    }, 1000);
  };

  return (
    <div className="space-y-4 py-4">
      <div className="space-y-2">
        <Label htmlFor="account-name">Account Name</Label>
        <Input
          id="account-name"
          placeholder="Enter account name"
          value={accountName}
          onChange={(e) => setAccountName(e.target.value)}
        />
      </div>
      
      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button onClick={handleAuth}>
          Connect Account
        </Button>
      </div>
    </div>
  );
}