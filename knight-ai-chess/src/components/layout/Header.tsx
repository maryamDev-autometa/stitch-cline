'use client';

import Logo from '../ui/Logo';
import Button from '../ui/Button';
import UserAvatar from '../ui/UserAvatar';
import Dropdown from '../ui/Dropdown';

interface HeaderProps {
  variant?: 'minimal' | 'standard' | 'full' | 'sticky';
  className?: string;
}

interface NavigationMenuProps {
  activeItem?: string;
}

function NavigationMenu({ activeItem }: NavigationMenuProps) {
  const menuItems = [
    { label: 'Play', href: '/play' },
    // { label: 'Learn', href: '/learn' },
    // { label: 'Community', href: '/community' },
    // { label: 'Game History', href: '/history' },
    { label: 'Past Tournaments', href: '/history' }
  ];

  return (
    <nav className="hidden md:flex items-center gap-6">
      {menuItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={`text-sm font-medium transition-colors ${
            activeItem === item.label
              ? 'text-primary'
              : 'hover:text-primary'
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export default function Header({ variant = 'standard', className = '' }: HeaderProps) {
  if (variant === 'minimal') {
    return (
      <div className={`flex items-center gap-3 mb-8 ${className}`}>
        <Logo 
          className="h-10 w-10" 
          showText={true} 
          textClassName="text-3xl font-bold text-gray-900 dark:text-white" 
        />
      </div>
    );
  }

  if (variant === 'standard') {
    const gameTypeOptions = [
      { label: 'Human vs Human', href: '/setup/human-vs-human', icon: 'people' },
      { label: 'Human vs AI', href: '/setup/human-vs-ai', icon: 'smart_toy' },
      { label: 'AI vs AI', href: '/setup/ai-vs-ai', icon: 'psychology' }
    ];

    return (
      <header className={`flex items-center justify-between border-b border-gray-200/10 dark:border-gray-700/50 px-6 py-3 ${className}`}>
        <Logo 
          className="h-6 w-6" 
          showText={true} 
          textClassName="text-xl font-bold text-gray-900 dark:text-white" 
        />
        <div className="flex items-center gap-4">
          <Dropdown
            trigger={
              <Button variant="secondary" size="sm" className="flex items-center gap-2">
                New Game
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </Button>
            }
            options={gameTypeOptions}
          />
          <UserAvatar />
        </div>
      </header>
    );
  }

  if (variant === 'full') {
    return (
      <header className={`border-b border-gray-200/10 dark:border-gray-700/50 ${className}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Logo 
            className="h-8 w-8" 
            showText={true} 
            textClassName="text-xl font-bold text-gray-900 dark:text-white" 
          />
          <div className="flex items-center gap-6">
            <NavigationMenu />
            <div className="flex items-center gap-4">
              {/* <Button variant="icon">
                <span className="material-symbols-outlined">settings</span>
              </Button> */}
              <UserAvatar />
            </div>
          </div>
        </div>
      </header>
    );
  }

  if (variant === 'sticky') {
    return (
      <header className={`sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-background-light/80 px-10 py-3 backdrop-blur-sm dark:bg-background-dark/80 ${className}`}>
        <Logo 
          className="h-6 w-6" 
          showText={true} 
          textClassName="text-xl font-bold text-black dark:text-white" 
        />
        <div className="flex items-center gap-8">
          <NavigationMenu />
          <div className="flex items-center gap-4">
            <Button variant="icon">
              <span className="material-symbols-outlined">notifications</span>
            </Button>
            <UserAvatar />
          </div>
        </div>
      </header>
    );
  }

  return null;
}
