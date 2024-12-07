export type SocialPlatform = 'instagram' | 'whatsapp' | 'linkedin' | 'facebook';

export interface PlatformConnection {
  id: string;
  platform: SocialPlatform;
  accountId: string;
  accountName: string;
  connected: boolean;
  lastSync?: Date;
}

export interface ConnectionStats {
  totalMessages: number;
  activeChats: number;
  responseRate: number;
  avgResponseTime: number;
}

export interface PlatformMetrics {
  platform: SocialPlatform;
  stats: ConnectionStats;
}

export interface PlatformSettings {
  platform: SocialPlatform;
  autoReply: boolean;
  businessHours: {
    start: string;
    end: string;
  };
  welcomeMessage?: string;
  aiAssistant: boolean;
  language: string;
}