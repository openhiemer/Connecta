'use client';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { SocialPlatform } from '@/lib/types/platform';
import { useState } from 'react';

interface PlatformSettingsProps {
  platform: SocialPlatform;
  onComplete: () => void;
  onBack: () => void;
}

export function PlatformSettings({ platform, onComplete, onBack }: PlatformSettingsProps) {
  const [settings, setSettings] = useState({
    autoReply: true,
    aiAssistant: true,
    language: 'en',
    welcomeMessage: '',
  });

  return (
    <div className="space-y-4 py-4">
      <div className="flex items-center justify-between">
        <Label htmlFor="auto-reply">Auto-Reply</Label>
        <Switch
          id="auto-reply"
          checked={settings.autoReply}
          onCheckedChange={(checked) =>
            setSettings((prev) => ({ ...prev, autoReply: checked }))
          }
        />
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="ai-assistant">AI Assistant</Label>
        <Switch
          id="ai-assistant"
          checked={settings.aiAssistant}
          onCheckedChange={(checked) =>
            setSettings((prev) => ({ ...prev, aiAssistant: checked }))
          }
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="language">Primary Language</Label>
        <Select
          value={settings.language}
          onValueChange={(value) =>
            setSettings((prev) => ({ ...prev, language: value }))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="es">Spanish</SelectItem>
            <SelectItem value="fr">French</SelectItem>
            <SelectItem value="de">German</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="welcome-message">Welcome Message</Label>
        <Textarea
          id="welcome-message"
          placeholder="Enter welcome message"
          value={settings.welcomeMessage}
          onChange={(e) =>
            setSettings((prev) => ({ ...prev, welcomeMessage: e.target.value }))
          }
        />
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button onClick={onComplete}>
          Complete Setup
        </Button>
      </div>
    </div>
  );
}