# Page Structure Analysis

## knight_ai_login_screen.html
### Purpose
- Type: Authentication page
- User Goal: Login to existing account or navigate to signup

### Sections
1. **Split Layout**: Two-column design (hidden on mobile)
   - Left: Chess pattern background (decorative, lg:w-1/2)
   - Right: Login form container (w-full lg:w-1/2)
2. **Brand Header**: Logo + "Knight AI" title with chess knight SVG
3. **Form Section**: 
   - Email and password inputs
   - Remember me checkbox
   - Forgot password link
4. **Call-to-Action**: Primary login button
5. **Navigation Link**: Link to signup page

### Interactive Elements
- **Form Fields**: Email (required), Password (required)
- **Checkbox**: Remember me option
- **Links**: "Forgot password", "Create new account"
- **Button**: Primary login button (full width)
- **Hidden Signup Form**: Complete signup form (display:none)

## knight_ai_signup_screen.html
### Purpose
- Type: User registration page
- User Goal: Create new account

### Sections
1. **Split Layout**: Same as login (two-column)
2. **Brand Header**: Identical to login
3. **Form Section**:
   - Username input (additional field)
   - Email input
   - Password input
4. **Call-to-Action**: Primary signup button
5. **Navigation Link**: Link to login page

### Interactive Elements
- **Form Fields**: Username (required), Email (required), Password (required)
- **Button**: Primary signup button (full width)
- **Links**: "Login to existing account"

## knight_ai_chessboard.html
### Purpose
- Type: Active game interface
- User Goal: Play chess game with real-time interaction

### Sections
1. **Header**: Navigation bar with logo, title, "New Game" button, user avatar
2. **Main Game Area**: Two-column layout
   - Left: Chess board (8x8 grid, square aspect ratio)
   - Right: Game information sidebar
3. **Chess Board**: 8x8 grid with pieces, alternating square colors
4. **Game Sidebar**: 
   - Game info section (turn indicator, timers)
   - Moves history section (scrollable list)

### Interactive Elements
- **Chess Pieces**: Clickable pieces with hover states
- **Board Squares**: Interactive squares for moves
- **New Game Button**: Header action button
- **User Avatar**: Profile access
- **Move History**: Scrollable notation list

## knight_ai_settings_page.html
### Purpose
- Type: User preferences and configuration
- User Goal: Manage account and app settings

### Sections
1. **Header**: Logo and title only (simplified)
2. **Settings Container**: Centered content (max-w-2xl)
3. **Settings Groups**:
   - Account section
   - Preferences section  
   - General section
4. **Logout Section**: Destructive action at bottom

### Interactive Elements
- **Settings Cards**: Clickable cards with hover effects
- **Icons**: Material symbols for each setting category
- **Logout Button**: Red-themed destructive button
- **Navigation**: Chevron indicators for expandable sections

## human_vs_ai_setup.html
### Purpose
- Type: Game configuration page
- User Goal: Set up new game against AI

### Sections
1. **Header**: Full navigation with logo, title, settings, user avatar
2. **Page Title**: "Prepare for Battle" with subtitle
3. **Player Setup**: Three-column grid
   - Human player card (left)
   - VS indicator (center)
   - AI player card (right)
4. **Game Configuration**:
   - AI model selection (radio buttons)
   - Difficulty selection (radio buttons)
   - Game settings (checkboxes)
5. **Start Game**: Primary action button

### Interactive Elements
- **Text Input**: Human player name
- **Radio Groups**: AI model selection, difficulty levels
- **Checkboxes**: Opening book, endgame tablebase options
- **Start Button**: Primary game launch button
