# Knight AI Chess - Component Library

## Overview

This component library implements all components specified in `docs/component-library.md`. Components are organized by category and priority.

## Component Organization

```
src/components/
├── ui/                         # UI Components
│   ├── Button.tsx             ✅ Existing (Primary, Secondary, Icon, Destructive variants)
│   ├── Card.tsx               ✅ New (Player, Settings, Default variants)
│   ├── Badge.tsx              ✅ New (Win, Loss, Draw, Default variants)
│   ├── Logo.tsx               ✅ Existing (Brand logo component)
│   ├── Modal.tsx              ✅ Existing (Dialog/Modal component)
│   ├── UserAvatar.tsx         ✅ Existing (User profile avatar)
│   └── Dropdown.tsx           ✅ Existing (Dropdown menu)
│
├── forms/                      # Form Components
│   ├── Input.tsx              ✅ Existing (Text, Email, Password inputs)
│   ├── RadioGroup.tsx         ✅ New (Radio button groups with variants)
│   └── Checkbox.tsx           ✅ New (Small and Large variants)
│
├── layout/                     # Layout Components
│   ├── Header.tsx             ✅ Existing (Minimal, Standard, Full, Sticky variants)
│   └── Container.tsx          ✅ Existing (Responsive containers)
│
└── chess/                      # Chess-Specific Components
    ├── ChessBoard.tsx         ✅ Existing (Interactive chess board)
    └── GameResultSummary.tsx  ✅ Existing (Game result display)
```

## Component Reference

### UI Components

#### Button Component
**File**: `src/components/ui/Button.tsx`

**Variants**:
- `primary` - Main CTAs (blue background, white text)
- `secondary` - Secondary actions (outlined or muted style)
- `icon` - Icon-only buttons (rounded, minimal)
- `destructive` - Delete/Logout actions (red tinted)

**Usage**:
```tsx
import Button from '@/components/ui/Button';

<Button variant="primary" fullWidth>Login</Button>
<Button variant="secondary" onClick={handleClick}>Cancel</Button>
<Button variant="destructive">
  <span className="material-symbols-outlined">logout</span>
  Log Out
</Button>
```

**Props**:
- `variant`: 'primary' | 'secondary' | 'icon' | 'destructive'
- `fullWidth`: boolean
- `onClick`: () => void
- `disabled`: boolean
- `type`: 'button' | 'submit' | 'reset'

---

#### Card Component
**File**: `src/components/ui/Card.tsx`

**Variants**:
- `default` - Standard card with padding and shadow
- `player` - Game setup player cards (centered, flex column)
- `settings` - Settings navigation cards (with hover effect)

**Usage**:
```tsx
import Card from '@/components/ui/Card';

<Card variant="player">
  <span className="material-symbols-outlined text-6xl">person</span>
  <h3>Human Player</h3>
  <Input placeholder="Your Name" />
</Card>

<Card variant="settings" hover onClick={() => navigate('/settings')}>
  <div>Settings Content</div>
</Card>
```

**Props**:
- `variant`: 'default' | 'player' | 'settings'
- `hover`: boolean (enables hover effect)
- `onClick`: () => void
- `className`: string

---

#### Badge Component
**File**: `src/components/ui/Badge.tsx`

**Variants**:
- `win` - Game win status (green tinted)
- `loss` - Game loss status (red tinted)
- `draw` - Game draw status (yellow tinted)
- `default` - Neutral badge (gray)

**Usage**:
```tsx
import Badge from '@/components/ui/Badge';

<Badge variant="win">Victory</Badge>
<Badge variant="loss">Defeat</Badge>
<Badge variant="draw">Draw</Badge>
```

**Props**:
- `variant`: 'win' | 'loss' | 'draw' | 'default'
- `className`: string

---

#### Logo Component
**File**: `src/components/ui/Logo.tsx`

**Usage**:
```tsx
import Logo from '@/components/ui/Logo';

<Logo 
  showText={true} 
  textClassName="text-4xl font-bold"
  className="h-10 w-10"
/>
```

**Props**:
- `showText`: boolean (show "Knight AI" text)
- `textClassName`: string (custom text styling)
- `className`: string (logo icon styling)

---

#### Modal Component
**File**: `src/components/ui/Modal.tsx`

**Usage**:
```tsx
import Modal from '@/components/ui/Modal';

<Modal
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  title="Confirm Action"
  actions={
    <>
      <Button variant="secondary" onClick={onCancel}>Cancel</Button>
      <Button variant="primary" onClick={onConfirm}>Confirm</Button>
    </>
  }
>
  <p>Modal content here</p>
</Modal>
```

**Props**:
- `isOpen`: boolean
- `onClose`: () => void
- `title`: string
- `actions`: React.ReactNode
- `children`: React.ReactNode

---

#### UserAvatar Component
**File**: `src/components/ui/UserAvatar.tsx`

**Usage**:
```tsx
import UserAvatar from '@/components/ui/UserAvatar';

<UserAvatar 
  src="/avatar.jpg"
  alt="User Name"
  size="medium"
/>
```

**Props**:
- `src`: string (image URL)
- `alt`: string
- `size`: 'small' | 'medium' | 'large'

---

### Form Components

#### Input Component
**File**: `src/components/forms/Input.tsx`

**Types**: text, email, password, search

**Usage**:
```tsx
import Input from '@/components/forms/Input';

<Input
  label="Email address"
  type="email"
  name="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
  autoComplete="email"
/>
```

**Props**:
- `label`: string
- `type`: 'text' | 'email' | 'password' | 'search'
- `name`: string
- `value`: string
- `onChange`: (e: ChangeEvent) => void
- `required`: boolean
- `autoComplete`: string
- `placeholder`: string

---

#### RadioGroup Component
**File**: `src/components/forms/RadioGroup.tsx`

**Layout**: grid or flex

**Usage**:
```tsx
import RadioGroup from '@/components/forms/RadioGroup';

<RadioGroup
  name="difficulty"
  label="Difficulty Level"
  options={[
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' }
  ]}
  value={difficulty}
  onChange={setDifficulty}
  layout="grid"
  columns={3}
/>
```

**Props**:
- `name`: string
- `label`: string (optional)
- `options`: Array<{value: string, label: string}>
- `value`: string
- `onChange`: (value: string) => void
- `layout`: 'grid' | 'flex'
- `columns`: number (for grid layout)

---

#### Checkbox Component
**File**: `src/components/forms/Checkbox.tsx`

**Sizes**: small, large

**Usage**:
```tsx
import Checkbox from '@/components/forms/Checkbox';

<Checkbox
  id="remember-me"
  name="rememberMe"
  label="Remember me"
  checked={rememberMe}
  onChange={setRememberMe}
  size="small"
/>
```

**Props**:
- `id`: string
- `name`: string
- `label`: string
- `checked`: boolean
- `onChange`: (checked: boolean) => void
- `size`: 'small' | 'large'

---

### Layout Components

#### Header Component
**File**: `src/components/layout/Header.tsx`

**Variants**:
- `minimal` - Logo + title only (settings pages)
- `standard` - Logo + title + user controls (game pages)
- `full` - Complete navigation menu (main pages)
- `sticky` - Full navigation with backdrop blur (scrollable pages)

**Usage**:
```tsx
import Header from '@/components/layout/Header';

<Header variant="full" />
<Header variant="standard" />
<Header variant="minimal" />
```

**Props**:
- `variant`: 'minimal' | 'standard' | 'full' | 'sticky'
- `className`: string

---

#### Container Component
**File**: `src/components/layout/Container.tsx`

**Sizes**: sm, md, lg, xl

**Usage**:
```tsx
import Container from '@/components/layout/Container';

<Container size="lg">
  <h1>Page Content</h1>
</Container>
```

**Props**:
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `className`: string
- `children`: React.ReactNode

---

### Chess-Specific Components

#### ChessBoard Component
**File**: `src/components/chess/ChessBoard.tsx`

**Features**:
- Interactive piece movement
- Valid move highlighting
- Drag and drop support
- Move validation
- Captured pieces tracking
- Move history

**Usage**:
```tsx
import ChessBoard from '@/components/chess/ChessBoard';

<ChessBoard
  interactive={true}
  isBattle={false}
  onCapturedPiecesChange={handleCapturedPieces}
  onMoveHistoryChange={handleMoveHistory}
  onCurrentPlayerChange={handleCurrentPlayer}
/>
```

**Props**:
- `interactive`: boolean
- `isBattle`: boolean (enables battle mode with health popups)
- `onCapturedPiecesChange`: (pieces) => void
- `onMoveHistoryChange`: (history) => void
- `onCurrentPlayerChange`: (player) => void

---

## Component Priorities

### ✅ Priority 1 - Core Components (Complete)
- [x] Header variants (4 types) - `layout/Header.tsx`
- [x] Primary/Secondary/Icon/Destructive buttons - `ui/Button.tsx`
- [x] Form inputs and labels - `forms/Input.tsx`
- [x] Basic cards - `ui/Card.tsx`
- [x] Logo - `ui/Logo.tsx`
- [x] Container - `layout/Container.tsx`

### ✅ Priority 2 - Interactive Components (Complete)
- [x] Radio button groups - `forms/RadioGroup.tsx`
- [x] Checkboxes - `forms/Checkbox.tsx`
- [x] Status badges - `ui/Badge.tsx`
- [x] Modal dialogs - `ui/Modal.tsx`
- [x] User avatar - `ui/UserAvatar.tsx`
- [x] Dropdown - `ui/Dropdown.tsx`

### ✅ Priority 3 - Chess-Specific Components (Complete)
- [x] Chess board - `chess/ChessBoard.tsx`
- [x] Game result summary - `chess/GameResultSummary.tsx`

### 📋 Priority 4 - Advanced Components (To be created as needed)
- [ ] Data tables (can be created when needed)
- [ ] Pagination (can be created when needed)
- [ ] Search input with icon (can extend Input component)
- [ ] Select dropdown (can extend Dropdown component)

## Usage Guidelines

### Importing Components

```tsx
// UI Components
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Logo from '@/components/ui/Logo';
import Modal from '@/components/ui/Modal';
import UserAvatar from '@/components/ui/UserAvatar';

// Form Components
import Input from '@/components/forms/Input';
import RadioGroup from '@/components/forms/RadioGroup';
import Checkbox from '@/components/forms/Checkbox';

// Layout Components
import Header from '@/components/layout/Header';
import Container from '@/components/layout/Container';

// Chess Components
import ChessBoard from '@/components/chess/ChessBoard';
```

### Styling Conventions

All components follow these conventions:
- **Dark mode support**: All components work in light and dark modes
- **Responsive**: Mobile-first responsive design
- **Accessible**: Proper ARIA labels and keyboard navigation
- **Consistent spacing**: Using Tailwind's spacing scale
- **Type-safe**: Full TypeScript support with proper interfaces

### Color System

Components use the design system colors:
- `primary`: #3b82f6 (Blue)
- `background-light`: Light backgrounds
- `background-dark`: Dark backgrounds
- `win`: Green tint (#10b981)
- `loss`: Red tint (#ef4444)
- `draw`: Yellow tint (#f59e0b)

## Best Practices

### 1. Component Composition
```tsx
// Good: Compose components
<Card variant="player">
  <Logo />
  <Input label="Name" />
  <Button variant="primary">Submit</Button>
</Card>

// Avoid: Inline complex styling
<div className="bg-white p-6 rounded-xl shadow-lg">...</div>
```

### 2. Prop Naming
- Use semantic names: `variant`, `size`, `disabled`
- Boolean props: `isOpen`, `isActive`, `isDisabled`
- Handlers: `onChange`, `onClick`, `onSubmit`

### 3. Variants Over Props
```tsx
// Good: Use variants
<Button variant="primary" />
<Button variant="destructive" />

// Avoid: Conditional class strings
<Button className={isDestructive ? 'bg-red' : 'bg-blue'} />
```

### 4. Accessibility
- Always provide labels for form inputs
- Use semantic HTML elements
- Include ARIA attributes where needed
- Support keyboard navigation

## Component Examples

See the following pages for real-world component usage:
- **Authentication**: `/authentication/login`, `/authentication/signup`
- **Game Setup**: `/game-setup/human-vs-ai`, `/game-setup/ai-vs-ai`
- **Active Game**: `/active-game/play`
- **Game History**: `/game-history/summary`
- **Settings**: `/settings`

## Conclusion

This component library provides all the building blocks needed for the Knight AI Chess
