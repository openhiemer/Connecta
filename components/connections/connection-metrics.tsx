'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlatformMetrics } from '@/lib/types/platform';
import { MessageCircle, Clock, BarChart2, MessagesSquare } from 'lucide-react';

const metrics: PlatformMetrics[] = [
  {
    platform: 'instagram',
    stats: {
      totalMessages: 1234,
      activeChats: 89,
      responseRate: 95,
      avgResponseTime: 5,
    },
  },
  {
    platform: 'whatsapp',
    stats: {
      totalMessages: 2567,
      activeChats: 156,
      responseRate: 98,
      avgResponseTime: 3,
    },
  },
];

export function ConnectionMetrics() {
  const totalMessages = metrics.reduce((sum, m) => sum + m.stats.totalMessages, 0);
  const avgResponseRate = metrics.reduce((sum, m) => sum + m.stats.responseRate, 0) / metrics.length;
  const totalActiveChats = metrics.reduce((sum, m) => sum + m.stats.activeChats, 0);
  const avgResponseTime = metrics.reduce((sum, m) => sum + m.stats.avgResponseTime, 0) / metrics.length;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <MetricCard
        title="Total Messages"
        value={totalMessages.toLocaleString()}
        icon={MessagesSquare}
        description="Across all platforms"
      />
      <MetricCard
        title="Response Rate"
        value={`${avgResponseRate.toFixed(1)}%`}
        icon={BarChart2}
        description="Average across platforms"
      />
      <MetricCard
        title="Active Chats"
        value={totalActiveChats.toLocaleString()}
        icon={MessageCircle}
        description="Currently active conversations"
      />
      <MetricCard
        title="Avg. Response Time"
        value={`${avgResponseTime.toFixed(1)}min`}
        icon={Clock}
        description="Average response time"
      />
    </div>
  );
}

function MetricCard({
  title,
  value,
  icon: Icon,
  description,
}: {
  title: string;
  value: string;
  icon: React.ElementType;
  description: string;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}