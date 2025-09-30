# Implementation Validation Checklist

## Design Validation

### Colors
- [ ] Primary color: `#135bec` matches original exactly
- [ ] Background light: `#f6f6f8` matches original exactly
- [ ] Background dark: `#101622` matches original exactly
- [ ] Board dark squares: `#769656` matches original exactly
- [ ] Board light squares: `#eeeed2` matches original exactly
- [ ] Accent color: `#3b82f6` matches original exactly
- [ ] Win status: `#22c55e` (green) matches original exactly
- [ ] Loss status: `#ef4444` (red) matches original exactly
- [ ] Draw status: `#f97316` (orange) matches original exactly
- [ ] All hover states use 90% opacity (`/90`) as in original
- [ ] Focus rings use primary color with 50% opacity (`/50`)

### Typography
- [ ] Font family: Space Grotesk loaded and applied correctly
- [ ] Font weights: 400, 500, 600, 700 available and used appropriately
- [ ] Heading sizes match original: h1 (text-4xl), h2 (text-3xl), h3 (text-2xl)
- [ ] Body text uses text-base (1rem) as default
- [ ] Small text uses text-sm (0.875rem) for captions and labels
- [ ] Chess notation uses monospace font (font-mono)
- [ ] Material Symbols Outlined icons loaded and configured correctly

### Layout & Spacing
- [ ] Container max-widths: max-w-md (448px), max-w-2xl (672px), max-w-4xl (896px), max-w-7xl (1280px)
- [ ] Section padding: py-8 (2rem vertical) matches original
- [ ] Responsive padding: px-4 sm:px-6 lg:px-8 matches original
- [ ] Card padding: p-6 (1.5rem) matches original
- [ ] Button padding: py-3 px-4 matches original
- [ ] Form field spacing: space-y-6 between fields matches original
- [ ] Component spacing: space-y-4 between related elements matches original

### Border Radius
- [ ] Default radius: 0.25rem (4px) applied consistently
- [ ] Large radius: 0.5rem (8px) for cards matches original
- [ ] Extra large radius: 0.75rem (12px) for prominent cards matches original
- [ ] Full radius: 9999px for avatars and pills matches original

## Component Validation

### Header Component
- [ ] **Minimal Header**: Logo + title only, used in settings
- [ ] **Standard Header**: Logo + title + user avatar + action button
- [ ] **Full Navigation Header**: Logo + nav menu + user controls
- [ ] **Sticky Header**: Fixed position with backdrop blur effect
- [ ] Logo SVG renders correctly with proper chess knight icon
- [ ] "Knight AI" text uses text-xl font-bold
- [ ] User avatar: h-10 w-10 rounded-full with background image
- [ ] Settings button: proper icon and hover states
- [ ] Navigation menu: hidden on mobile (hidden md:flex)
- [ ] Active navigation item highlighted with text-primary

### Button Components
