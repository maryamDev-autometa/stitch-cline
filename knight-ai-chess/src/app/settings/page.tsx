'use client';

import Header from '@/components/layout/Header';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';

interface SettingsItem {
  icon: string;
  title: string;
  description: string;
  href: string;
  active?: boolean;
}

interface SettingsSection {
  category: string;
  items: SettingsItem[];
}

export default function SettingsPage() {
  const settingsItems: SettingsSection[] = [
    {
      category: 'Account',
      items: [
        {
          icon: 'person',
          title: 'Account Management',
          description: 'Manage your account details and security',
          href: '/settings/account'
        }
      ]
    },
    {
      category: 'Preferences', 
      items: [
        {
          icon: 'notifications',
          title: 'Notifications',
          description: 'Customize your notification settings',
          href: '/settings/notifications'
        }
      ]
    },
    {
      category: 'General',
      items: [
        {
          icon: 'tune',
          title: 'App Settings',
          description: 'Adjust general app settings and appearance',
          href: '/settings/app',
          active: true
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Container size="md" className="py-8">
          {/* Header */}
          <Header variant="minimal" />

          {/* Settings Content */}
          <div className="space-y-8">
            {settingsItems.map((section) => (
              <div key={section.category}>
                <h3 className="text-xl font-semibold mb-4 text-gray-300 border-b border-white/10 pb-3">
                  {section.category}
                </h3>
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className={`flex items-center p-4 rounded-lg transition-colors group ${
                        item.active
                          ? 'bg-accent/20 border border-accent/50 ring-1 ring-accent/30'
                          : 'bg-white/5 hover:bg-accent/20'
                      }`}
                    >
                      <div className="p-3 rounded-lg bg-accent/20 mr-4">
                        <span className="material-symbols-outlined text-accent">
                          {item.icon}
                        </span>
                      </div>
                      <div className="flex-grow">
                        <p className="font-medium text-white">{item.title}</p>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                      <span className={`material-symbols-outlined transition-colors ${
                        item.active ? 'text-accent' : 'text-gray-500 group-hover:text-accent'
                      }`}>
                        chevron_right
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}

            {/* Logout Button */}
            <div className="pt-6">
              <Button 
                variant="destructive" 
                fullWidth
                icon={<span className="material-symbols-outlined">logout</span>}
                onClick={() => window.location.href = '/'}
              >
                Log Out
              </Button>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
