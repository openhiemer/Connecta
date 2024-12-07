'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { PlatformSelector } from './platform-selector';
import { PlatformAuth } from './platform-auth';
import { PlatformSettings } from './platform-settings';
import { PlatformConnection, SocialPlatform } from '@/lib/types/platform';
import { Check } from 'lucide-react';

interface ConnectionWizardProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onComplete: (connection: PlatformConnection) => void;
}

type WizardStep = 'platform' | 'auth' | 'settings' | 'complete';

export function ConnectionWizard({ open, onOpenChange, onComplete }: ConnectionWizardProps) {
  const [step, setStep] = useState<WizardStep>('platform');
  const [selectedPlatform, setSelectedPlatform] = useState<SocialPlatform | null>(null);
  const [authData, setAuthData] = useState<{ accountId: string; accountName: string } | null>(null);

  const handlePlatformSelect = (platform: SocialPlatform) => {
    setSelectedPlatform(platform);
    setStep('auth');
  };

  const handleAuthComplete = (data: { accountId: string; accountName: string }) => {
    setAuthData(data);
    setStep('settings');
  };

  const handleSettingsComplete = () => {
    if (selectedPlatform && authData) {
      const newConnection: PlatformConnection = {
        id: crypto.randomUUID(),
        platform: selectedPlatform,
        accountId: authData.accountId,
        accountName: authData.accountName,
        connected: true,
        lastSync: new Date(),
      };
      onComplete(newConnection);
      setStep('complete');
    }
  };

  const handleClose = () => {
    setStep('platform');
    setSelectedPlatform(null);
    setAuthData(null);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {step === 'platform' && 'Select Platform'}
            {step === 'auth' && 'Connect Account'}
            {step === 'settings' && 'Configure Settings'}
            {step === 'complete' && 'Setup Complete'}
          </DialogTitle>
        </DialogHeader>

        {step === 'platform' && (
          <PlatformSelector onSelect={handlePlatformSelect} />
        )}

        {step === 'auth' && selectedPlatform && (
          <PlatformAuth
            platform={selectedPlatform}
            onComplete={handleAuthComplete}
            onBack={() => setStep('platform')}
          />
        )}

        {step === 'settings' && selectedPlatform && (
          <PlatformSettings
            platform={selectedPlatform}
            onComplete={handleSettingsComplete}
            onBack={() => setStep('auth')}
          />
        )}

        {step === 'complete' && (
          <div className="space-y-4 py-4">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
                <Check className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="mt-4 text-lg font-medium">Setup Complete!</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Your {selectedPlatform} account has been successfully connected.
              </p>
            </div>
            <Button onClick={handleClose} className="w-full">
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}