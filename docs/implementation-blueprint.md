# Implementation Blueprint

## Required Components

### Priority 1 - Core Components (Foundation)
- [ ] **Layout Components**
  - [ ] `Header` - 4 variants (Minimal, Standard, Full Navigation, Sticky)
  - [ ] `Container` - Responsive container with max-width variants
  - [ ] `PageLayout` - Base page wrapper with header + main content
- [ ] **Button Components**
  - [ ] `Button` - Primary, Secondary, Icon, Destructive variants
  - [ ] `IconButton` - Settings, notifications, utility actions
- [ ] **Form Components**
  - [ ] `Input` - Text, email, password, search variants
  - [ ] `Label` - Form field labels with consistent styling
  - [ ] `Checkbox` - Small and large variants
  - [ ] `RadioGroup` - Radio button groups with custom styling
  - [ ] `Select` - Dropdown select component
- [ ] **Navigation Components**
  - [ ] `NavigationMenu` - Main site navigation
  - [ ] `UserAvatar` - User profile image component
  - [ ] `Logo` - Knight AI logo with SVG

### Priority 2 - Page-Specific Components
- [ ] **Authentication Components**
  - [ ] `LoginForm` - Email/password login form
  - [ ] `SignupForm` - Username/email/password registration
  - [ ] `ForgotPasswordForm` - Password recovery form
  - [ ] `AuthLayout` - Split layout with chess pattern background
- [ ] **Game Setup Components**
  - [ ] `PlayerCard` - Human/AI player configuration cards
  - [ ] `GameConfigForm` - Difficulty, AI model, options selection
  - [ ] `VSIndicator` - Visual separator between players
- [ ] **Data Display Components**
  - [ ] `DataTable` - Game history and tournament tables
  - [ ] `StatusBadge` - Win/Loss/Draw indicators
  - [ ] `SearchFilter` - Search input with filters
  - [ ] `Pagination` - Table navigation controls

### Priority 3 - Chess-Specific Components
- [ ] **Game Components**
  - [ ] `ChessBoard` - 8x8 interactive chess board
  - [ ] `ChessPiece` - Individual chess pieces with drag/drop
  - [ ] `GameSidebar` - Game info, timers, move history
  - [ ] `MoveHistory` - Scrollable chess notation list
  - [ ] `TurnIndicator` - Current player turn display
- [ ] **Game Analysis Components**
  - [ ] `GameReplay` - Move-by-move game review
  - [ ] `GameStats` - Performance metrics display

### Priority 4 - Advanced Components
- [ ] **Settings Components**
  - [ ] `SettingsCard` - Clickable settings navigation cards
  - [ ] `SettingsSection` - Grouped settings with headers
- [ ] **Utility Components**
  - [ ] `LoadingSpinner` - Loading states
  - [ ] `ErrorBoundary` - Error handling wrapper
  - [ ] `Toast` - Notification system

## Design System Setup

### Tailwind Configuration
```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#135bec',
        'background-light': '#f6f6f8',
        'background-dark': '#101622',
        'board-dark': '#769656',
        'board-light': '#eeeed2',
        accent: {
          DEFAULT: '#3b82f6',
          hover: '#2563eb',
        },
        win: '#22c55e',
        loss: '#ef4444',
        draw: '#f97316',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
```

### Global Styles
```css
/* globals.css */
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined');

body {
  font-family: 'Space Grotesk', sans-serif;
}

.material-symbols-outlined {
  font-variation-settings:
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24;
}

.chess-pattern {
  background-image: 
    linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%), 
    linear-gradient(-45deg, rgba(255,255,255,0.05) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.05) 75%),
    linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.05) 75%);
  background-size: 60px 60px;
  background-position: 0 0, 0 30px, 30px -30px, -30px 0px;
}

.white-piece {
  -webkit-text-stroke: 1px #101622;
  text-stroke: 1px #101622;
  paint-order: stroke fill;
}

.dark .white-piece {
  -webkit-text-stroke: 1px #fff;
  text-stroke: 1px #fff;
}
```

### Design System Constants
```typescript
// lib/design-system.ts
export const colors = {
  primary: '#135bec',
  backgroundLight: '#f6f6f8',
  backgroundDark: '#101622',
  boardDark: '#769656',
  boardLight: '#eeeed2',
  accent: '#3b82f6',
  accentHover: '#2563eb',
  win: '#22c55e',
  loss: '#ef4444',
  draw: '#f97316',
} as const;

export const typography = {
  fontFamily: 'Space Grotesk, sans-serif',
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  sizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
  },
} as const;

export const spacing = {
  containerPadding: 'px-4 sm:px-6 lg:px-8',
  sectionSpacing: 'py-8',
  cardPadding: 'p-6',
  buttonPadding: 'py-3 px-4',
} as const;

export const borderRadius = {
  default: '0.25rem',
  lg: '0.5rem',
  xl: '0.75rem',
  full: '9999px',
} as const;
```

## Forbidden - DO NOT CREATE

### ❌ Components NOT in Original Design
- Custom modal/dialog components (none found in original)
- Dropdown menus beyond basic select elements
- Accordion components (not present in design)
- Carousel/slider components
- Tab components (not used in original)
- Tooltip components
- Progress bars or loading bars
- Custom date pickers
- File upload components
- Rich text editors

### ❌ Additional Color Variations
- Do not add new color schemes beyond what's documented
- Do not create additional button color variants
- Do not add custom theme colors not found in original
- Stick to exact hex values from design system analysis

### ❌ Layout Modifications
- Do not change the responsive breakpoints
- Do not alter the grid systems (8x8 chess board must remain exact)
- Do not modify the header height or structure
- Do not change the sidebar width (w-80) for chess game

### ❌ Typography Changes
- Do not use fonts other than Space Grotesk
- Do not add additional font weights beyond 400, 500, 600, 700
- Do not modify the font size scale
- Do not change line heights from Tailwind defaults

### ❌ Interactive Behaviors NOT Present
- Do not add drag-and-drop beyond chess pieces
- Do not add keyboard shortcuts not implied in original
- Do not add animations beyond hover/focus transitions
- Do not add sound effects or audio
- Do not add real-time multiplayer features
- Do not add chat or messaging features

## Build Sequence

### Phase 1: Project Setup
1. **Initialize Next.js Project**
   ```bash
   npx create-next-app@latest knight-ai-chess --typescript --tailwind --eslint --app
   cd knight-ai-chess
   npm install @tailwindcss/forms
   ```

2. **Configure Tailwind CSS**
   - Update `tailwind.config.js` with custom colors and fonts
   - Add global styles to `app/globals.css`
   - Import Google Fonts and Material Symbols

3. **Setup Project Structure**
   ```
   app/
   ├── (auth)/
   │   ├── login/
   │   ├── signup/
