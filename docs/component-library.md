# Component Library

## Headers

### Minimal Header
- **Structure**: Logo + brand title only
- **Classes**: `flex items-center gap-3 mb-8`
- **Usage**: Settings page, standalone forms
- **Found in**: knight_ai_settings_page.html
- **Elements**:
  - Chess knight icon (Material Symbols or SVG)
  - "Knight AI" text with `text-3xl font-bold`

### Standard Header
- **Structure**: Logo + title + user avatar + settings button
- **Classes**: `flex items-center justify-between border-b border-gray-200/10 dark:border-gray-700/50 px-6 py-3`
- **Usage**: Game pages, simple navigation
- **Found in**: knight_ai_chessboard.html, human_vs_ai_setup.html
- **Elements**:
  - Left: Logo + "Knight AI" title
  - Right: Action button + user avatar (rounded-full, size-10)

### Full Navigation Header
- **Structure**: Logo + navigation menu + user controls
- **Classes**: `mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8`
- **Usage**: Main application pages
- **Found in**: game_result_summary.html, past_tournaments_view.html
- **Elements**:
  - Left: Logo + brand title
  - Center: Navigation menu (Play, Learn, Community, etc.)
  - Right: Settings button + notifications + user avatar

### Sticky Header
- **Structure**: Full navigation with backdrop blur
- **Classes**: `sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-background-light/80 px-10 py-3 backdrop-blur-sm dark:bg-background-dark/80`
- **Usage**: Scrollable content pages
- **Found in**: past_tournaments_view.html
- **Special Features**: Backdrop blur effect, sticky positioning

## Buttons

### Primary Button
- **Classes**: `w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-bold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 dark:focus:ring-offset-background-dark`
- **Usage**: Main CTAs, form submissions
- **Found in**: All form pages (login, signup, game setup)
- **States**: Default, Hover (90% opacity), Focus (ring effect)
- **Variants**: Full width, inline width

### Secondary Button
- **Classes**: `flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-primary/90`
- **Usage**: Secondary actions, header buttons
- **Found in**: knight_ai_chessboard.html ("New Game")
- **States**: Default, Hover

### Icon Button
- **Classes**: `p-2 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors`
- **Usage**: Settings, notifications, utility actions
- **Found in**: Multiple headers
- **Variants**: 
  - Settings: `rounded-lg bg-gray-200/50 dark:bg-gray-700/50 p-2`
  - Notifications: `flex h-10 w-10 items-center justify-center rounded-full bg-white/10`

### Destructive Button
- **Classes**: `w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-red-600/20 text-red-400 border border-red-600/50 font-bold text-base hover:bg-red-600/30 transition-colors`
- **Usage**: Logout, delete actions
- **Found in**: knight_ai_settings_page.html
- **Icon**: Material symbol included

### Pagination Buttons
- **Classes**: `rounded-lg border border-gray-200/10 dark:border-gray-700/50 bg-gray-200/30 dark:bg-gray-800/30 px-4 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors hover:bg-gray-200/40 dark:hover:bg-gray-800/40 disabled:opacity-50`
- **Usage**: Table navigation
- **Found in**: game_result_summary.html
- **States**: Default, Hover, Disabled

## Form Components

### Text Input
- **Classes**: `block w-full bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm placeholder-gray-400 dark:placeholder-gray-500`
- **Usage**: All form inputs
- **Found in**: Login, signup, game setup pages
- **Types**: email, password, text
- **States**: Default, Focus, Error

### Form Label
- **Classes**: `block text-sm font-medium text-gray-700 dark:text-gray-300`
- **Usage**: Input field labels
- **Found in**: All forms
- **Pattern**: Consistent spacing with `mt-1` for input wrapper

### Checkbox
- **Classes**: `h-4 w-4 text-primary focus:ring-primary border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800` (small)
- **Classes**: `h-5 w-5 rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-primary focus:ring-primary/50 form-checkbox` (large)
- **Usage**: Settings, preferences
- **Found in**: Login (remember me), game setup (options)

### Radio Button Groups
- **Structure**: Fieldset with legend + radio options
- **Classes**: `relative flex items-center justify-center px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 has-[:checked]:ring-primary has-[:checked]:bg-primary/10`
- **Usage**: AI model selection, difficulty levels
- **Found in**: human_vs_ai_setup.html
- **States**: Default, Hover, Selected (with ring and background)

### Search Input
- **Classes**: `w-full rounded-lg border border-gray-200/10 dark:border-gray-700/50 bg-gray-200/30 dark:bg-gray-800/30 py-2 pl-10 pr-4 text-sm focus:border-primary focus:ring-primary`
- **Usage**: Table filtering, content search
- **Found in**: game_result_summary.html
- **Icon**: Search icon positioned absolutely

### Select Dropdown
- **Classes**: `rounded-lg border border-gray-200/10 dark:border-gray-700/50 bg-gray-200/30 dark:bg-gray-800/30 py-2 px-3 text-sm focus:border-primary focus:ring-primary`
- **Usage**: Filtering, sorting options
- **Found in**: game_result_summary.html

## Cards

### Player Card
- **Classes**: `bg-background-light dark:bg-background-dark p-6 rounded-xl shadow-lg dark:shadow-2xl flex flex-col items-center space-y-4`
- **Usage**: Game setup screens
- **Found in**: human_vs_ai_setup.html
- **Structure**: Icon + title + form elements
- **Variants**: Human player, AI player

### Settings Card
- **Classes**: `flex items-center p-4 rounded-lg bg-white/5 hover:bg-accent/20 transition-colors group`
- **Usage**: Settings navigation
- **Found in**: knight_ai_settings_page.html
- **Structure**: Icon container + content + chevron
- **States**: Default, Hover, Active (with accent colors)

### Game History Row
- **Classes**: `hover:bg-gray-200/40 dark:hover:bg-gray-800/40 transition-colors`
- **Usage**: Table rows with interaction
- **Found in**: game_result_summary.html, past_tournaments_view.html
- **Structure**: Avatar + name + metadata + actions

## Tables

### Data Table
- **Classes**: `min-w-full divide-y divide-gray-200/10 dark:divide-gray-700/50`
- **Usage**: Game history, tournament results
- **Found in**: game_result_summary.html, past_tournaments_view.html
- **Structure**: thead + tbody with consistent styling

### Table Header
- **Classes**: `bg-gray-200/30 dark:bg-gray-800/30`
- **Cell Classes**: `px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400`
- **Usage**: Column headers
- **Pattern**: Uppercase, small text, muted colors

### Table Body
- **Classes**: `divide-y divide-gray-200/10 dark:divide-gray-700/50 bg-gray-200/20 dark:bg-gray-800/20`
- **Cell Classes**: `whitespace-nowrap px-6 py-4 text-sm`
- **Usage**: Data rows
- **Hover**: Row-level hover effects

## Status Components

### Status Badge
- **Classes**: `inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium leading-5`
- **Usage**: Game outcomes, status indicators
- **Found in**: game_result_summary.html
- **Variants**:
  - Win: `bg-win/10 text-win`
  - Loss: `bg-loss/10 text-loss`
  - Draw: `bg-draw/10 text-draw`

### Turn Indicator
- **Classes**: `flex items-center gap-2`
- **Usage**: Game state display
- **Found in**: knight_ai_chessboard.html
- **Structure**: Color dot + text label

## Chess-Specific Components

### Chess Board
- **Classes**: `grid grid-cols-8 grid-rows-8 w-full h-full rounded-lg overflow-hidden shadow-2xl`
- **Usage**: Game interface
- **Found in**: knight_ai_chessboard.html
- **Square Classes**: `flex items-center justify-center` + `bg-board-light` or `bg-board-dark`
- **Piece Classes**: `text-4xl md:text-5xl cursor-pointer` + color variants

### Chess Piece
- **Classes**: `text-4xl md:text-5xl cursor-pointer`
- **Usage**: Board pieces
- **Variants**:
  - White pieces: `text-white white-piece` (with stroke outline)
  - Black pieces: `text-black`
- **Special Styling**: CSS stroke for white pieces

### Game Sidebar
- **Classes**: `w-80 flex-shrink-0 ml-8 bg-background-dark/50 dark:bg-background-dark/80 rounded-lg shadow-xl flex flex-col`
- **Usage**: Game information display
- **Found in**: knight_ai_chessboard.html
- **Sections**: Game info, timers, move history

### Move History
- **Classes**: `flex-1 bg-background-dark/70 rounded-lg p-2 overflow-y-auto`
- **Usage**: Chess notation display
- **Found in**: knight_ai_chessboard.html
- **List Classes**: `text-gray-300 font-mono text-sm space-y-1`

## Layout Components

### Split Layout
- **Classes**: `flex min-h-screen`
- **Usage**: Authentication pages
- **Found in**: Login, signup pages
- **Structure**: Decorative panel (lg:w-1/2) + content panel (w-full lg:w-1/2)

### Chess Pattern Background
- **Classes**: `chess-pattern` (custom CSS)
- **Usage**: Decorative backgrounds
- **Found in**: Authentication pages
- **CSS**: Complex gradient pattern creating chess-like texture

### Centered Container
- **Classes**: `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8` (large)
- **Classes**: `max-w-2xl mx-auto` (medium)
- **Classes**: `w-full max-w-md` (small)
- **Usage**: Content centering with responsive padding
- **Variants**: Different max-widths for different content types

### Page Header
- **Classes**: `mb-8 flex items-center justify-between`
- **Usage**: Page titles with actions
- **Found in**: game_result_summary.html
- **Structure**: Title + controls (search, filters)

## Navigation Components

### Navigation Menu
- **Classes**: `hidden md:flex items-center gap-6`
- **Usage**: Main site navigation
- **Found in**: Headers with full navigation
- **Link Classes**: `text-sm font-medium hover:text-primary transition-colors`
- **Active State**: `text-primary`

### User Avatar
- **Classes**: `h-10 w-10 rounded-full bg-cover bg-center` or `size-10 rounded-full`
- **Usage**: User identification
- **Found in**: All headers with user context
- **Implementation**: Background image or img element

## Utility Components

### Material Icons
- **Classes**: `material-symbols-outlined`
- **Usage**: Throughout interface
- **Settings**: `'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24`
- **Sizes**: `text-3xl`, `text-4xl`, `text-6xl`

### Loading States
- **Pattern**: Disabled states with opacity
- **Classes**: `disabled:opacity-50`
- **Usage**: Buttons, form elements

### Responsive Utilities
- **Breakpoints**: `sm:`, `md:`, `lg:`
- **Common Patterns**: 
  - `hidden lg:flex` (desktop-only navigation)
  - `w-full lg:w-1/2` (responsive widths)
  - `px-4 sm:px-6 lg:px-8` (responsive padding)

## Component Priorities

### Priority 1 - Core Components (Required)
- [ ] Header variants (4 types)
- [ ] Primary/Secondary buttons
- [ ] Form inputs and labels
- [ ] Basic cards
- [ ] Navigation menu

### Priority 2 - Interactive Components
- [ ] Radio button groups
- [ ] Checkboxes
- [ ] Status badges
- [ ] Data tables
- [ ] Search/filter controls

### Priority 3 - Chess-Specific Components
- [ ] Chess board
- [ ] Chess pieces
- [ ] Game sidebar
- [ ] Move history
- [ ] Turn indicators

### Priority 4 - Advanced Components
- [ ] Pagination
- [ ] Settings cards
- [ ] Split layouts
- [ ] Chess pattern background
