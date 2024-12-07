import { Button } from '@/components/ui/button';
import { MessageCircle, Bot, BarChart3, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Next-Gen Messaging Automation
              <span className="text-primary block">Powered by AI</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Transform your customer engagement across Instagram, WhatsApp, LinkedIn, and Facebook with AI-driven personalization and advanced automation features.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="/dashboard">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<Bot className="h-8 w-8" />}
              title="AI-Powered Conversations"
              description="Context-aware replies with role-based personality settings for natural interactions."
            />
            <FeatureCard
              icon={<MessageCircle className="h-8 w-8" />}
              title="Multi-Platform Integration"
              description="Seamlessly connect and manage conversations across all major social platforms."
            />
            <FeatureCard
              icon={<BarChart3 className="h-8 w-8" />}
              title="Advanced Analytics"
              description="Real-time insights with AI-powered sentiment analysis and predictive metrics."
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8" />}
              title="Smart Automation"
              description="Create sophisticated workflows with multi-tier keyword triggers and dynamic content."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm">
      <div className="p-3 bg-primary/10 rounded-full text-primary">
        {icon}
      </div>
      <h3 className="mt-6 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </div>
  );
}