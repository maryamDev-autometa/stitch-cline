# Design System Analysis

## Colors

### Primary Colors
- **Primary Blue**: `#135bec` - Main brand color used for buttons, links, focus states
- **Primary Green**: `#0da50d` - Alternative primary color (used in settings)
- **Accent Blue**: `#3b82f6` - Secondary accent color
- **Accent Blue Hover**: `#2563eb` - Hover state for accent elements

### Background Colors
- **Background Light**: `#f6f6f8` - Light mode background
- **Background Dark**: `#101622` - Dark mode background (main)
- **Background Dark Alt**: `#121212` - Alternative dark background (settings)

### Chess Board Colors
- **Board Dark**: `#769656` - Dark squares on chessboard
- **Board Light**: `#eeeed2` - Light squares on chessboard

### Text Colors
- **Text Primary Light**: `#1f2937` (gray-800) - Primary text in light mode
- **Text Primary Dark**: `#e5e7eb` (gray-200) - Primary text in dark mode
- **Text Secondary Light**: `#6b7280` (gray-600) - Secondary text in light mode
- **Text Secondary Dark**: `#9ca3af` (gray-400) - Secondary text in dark mode
- **Text White**: `#ffffff` - White text for dark backgrounds
- **Text Muted**: `#6b7280` (gray-500) - Muted text color

### Border Colors
- **Border Light**: `#d1d5db` (gray-300) - Light mode borders
- **Border Dark**: `#374151` (gray-700) - Dark mode borders
- **Border Subtle**: `rgba(255,255,255,0.1)` - Subtle borders on dark backgrounds

### Status Colors
- **Red**: `#dc2626` (red-600) - Error states, logout button
- **Red Background**: `rgba(220, 38, 38, 0.2)` - Red background with opacity

## Typography

### Font Family
- **Primary Font**: `Space Grotesk` - Used throughout the application
- **Fallback**: `sans-serif`
- **Mono Font**: Default monospace for chess notation

### Font Weights
- **Regular**: `400` - Body text
- **Medium**: `500` - Emphasized text
- **Semibold**: `600` - Section headings
- **Bold**: `700` - Main headings, buttons

### Font Sizes
- **Text 4xl**: `2.25rem` (36px) - Main logo/brand text
- **Text 3xl**: `1.875rem` (30px) - Page titles
- **Text 2xl**: `1.5rem` (24px) - Section headings
- **Text xl**: `1.25rem` (20px) - Subsection headings
- **Text lg**: `1.125rem` (18px) - Large body text
- **Text base**: `1rem` (16px) - Default body text
- **Text sm**: `0.875rem` (14px) - Small text, captions
- **Text xs**: `0.75rem` (12px) - Very small text

### Line Heights
- Default line heights follow Tailwind CSS standards
- Headings use tighter line heights
- Body text uses comfortable reading line heights

## Layout & Spacing

### Container Widths
- **Max Width 2xl**: `42rem` (672px) - Settings page content
- **Max Width 4xl**: `56rem` (896px) - Game setup forms
- **Max Width md**: `28rem` (448px) - Login/signup forms

### Padding Patterns
- **Section Padding**: `py-8` (2rem vertical), `px-4 sm:px-6 lg:px-8` (responsive horizontal)
- **Card Padding**: `p-6` (1.5rem all sides)
- **Button Padding**: `py-3 px-4` (0.75rem vertical, 1rem horizontal)
- **Form Field Padding**: `py-2 px-3` (0.5rem vertical, 0.75rem horizontal)

### Margins
- **Section Margins**: `space-y-8` (2rem between sections)
- **Form Field Margins**: `space-y-6` (1.5rem between fields)
- **Component Margins**: `space-y-4` (1rem between components)

### Border Radius
- **Default**: `0.25rem` (4px)
- **Large**: `0.5rem` (8px)
- **Extra Large**: `0.75rem` (12px)
- **Full**: `9999px` (fully rounded)

### Shadows
- **Small**: `shadow-sm` - Subtle elevation
- **Medium**: `shadow-lg` - Card elevation
- **Large**: `shadow-xl` - Modal/prominent element elevation
- **Extra Large**: `shadow-2xl` - Maximum elevation

## Component Spacing

### Grid Systems
- **Chess Board**: `grid-cols-8 grid-rows-8` - 8x8 chess grid
- **Form Grids**: `grid-cols-2 sm:grid-cols-3` - Responsive form layouts
- **Layout Grids**: `grid-cols-1 md:grid-cols-[1fr_auto_1fr]` - Complex layouts

### Gap Values
- **Small Gap**: `gap-2` (0.5rem)
- **Medium Gap**: `gap-4` (1rem)
- **Large Gap**: `gap-6` (1.5rem)
- **Extra Large Gap**: `gap-8` (2rem)

### Consistent Spacing Units
- **Base Unit**: `0.25rem` (4px)
- **Common Multiples**: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- **Section Spacing**: Typically 32px (2rem) or 48px (3rem)

## Interactive States

### Hover Effects
- **Button Hover**: `hover:bg-primary/90` - 90% opacity of primary color
- **Link Hover**: `hover:text-primary/90` - Color change with opacity
- **Card Hover**: `hover:bg-gray-100 dark:hover:bg-gray-700` - Subtle background change

### Focus States
- **Focus Ring**: `focus:ring-2 focus:ring-offset-2 focus:ring-primary/50`
- **Focus Border**: `focus:border-primary`
- **Focus Outline**: `focus:outline-none` (custom focus styles used)

### Active/Selected States
- **Selected Radio**: `has-[:checked]:bg-primary has-[:checked]:text-white`
- **Selected Card**: `border-accent/50 ring-1 ring-accent/30`

## Special Patterns

### Chess Pattern Background
```css
.chess-pattern {
  background-image: 
    linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%), 
    linear-gradient(-45deg, rgba(255,255,255,0.05) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.05) 75%),
    linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.05) 75%);
  background-size: 60px 60px;
  background-position: 0 0, 0 30px, 30px -30px, -30px 0px;
}
```

### Chess Piece Styling
- **White Pieces**: `text-white white-piece` with stroke outline
- **Black Pieces**: `text-black` 
- **Piece Sizes**: `text-4xl md:text-5xl` (responsive sizing)

### Material Icons
- **Icon Font**: Material Symbols Outlined
- **Icon Settings**: `'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24`
- **Common Sizes**: `text-3xl` (24px), `text-4xl` (32px), `text-6xl` (48px)

## Dark Mode Implementation
- Uses `class` strategy: `darkMode: "class"`
- All components have both light and dark variants
- Consistent dark mode patterns across all screens
- Proper contrast ratios maintained in both modes
