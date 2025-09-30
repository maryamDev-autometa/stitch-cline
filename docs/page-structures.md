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
- **Settings Button**: Header navigation
- **User Avatar**: Profile access

## game_result_summary.html
### Purpose
- Type: Game history and results dashboard
- User Goal: Review past games and performance

### Sections
1. **Header**: Full navigation with logo, nav menu, settings, user avatar
2. **Page Header**: Title with search and filter controls
3. **Data Table**: Game history with sortable columns
4. **Pagination**: Navigation controls for large datasets

### Interactive Elements
- **Navigation Menu**: Play, Learn, Community, Game History links
- **Search Input**: Game search functionality
- **Filter Dropdowns**: Outcome filter, sort options
- **Table Rows**: Clickable game entries with hover effects
- **View Game Links**: Navigation to detailed game view
- **Pagination Buttons**: Previous/Next navigation
- **Status Badges**: Win/Loss/Draw indicators with color coding

## past_tournaments_view.html
### Purpose
- Type: Tournament history browser
- User Goal: Browse completed tournament results

### Sections
1. **Header**: Sticky navigation with backdrop blur effect
2. **Page Header**: Title and description
3. **Tournament Table**: Results in tabular format
4. **Table Content**: Tournament name, date, winner, summary

### Interactive Elements
- **Navigation Menu**: Play, Learn, Community, Past Tournaments
- **Notification Button**: Bell icon in header
- **User Avatar**: Profile access
- **Table Rows**: Clickable tournament entries with hover effects
- **Sticky Header**: Remains visible on scroll

## ai_vs_ai_setup.html
### Purpose
- Type: AI vs AI game configuration
- User Goal: Set up automated AI vs AI match

### Sections
1. **Header**: Standard navigation
2. **AI Configuration**: Two AI player setup cards
3. **Game Settings**: Match configuration options
4. **Start Match**: Launch automated game

### Interactive Elements
- **AI Model Selection**: Radio buttons for each AI
- **Configuration Options**: Various game settings
- **Start Button**: Launch AI vs AI match

## human_vs_human_setup.html
### Purpose
- Type: Local multiplayer setup
- User Goal: Configure local two-player game

### Sections
1. **Header**: Standard navigation
2. **Player Setup**: Two human player cards
3. **Game Configuration**: Local game settings
4. **Start Game**: Launch local multiplayer

### Interactive Elements
- **Player Name Inputs**: Both player names
- **Game Settings**: Local multiplayer options
- **Start Button**: Launch local game

## knight_ai_foeget_password.html
### Purpose
- Type: Password recovery page
- User Goal: Reset forgotten password

### Sections
1. **Split Layout**: Similar to login/signup
2. **Recovery Form**: Email input for password reset
3. **Instructions**: Clear guidance for password reset process

### Interactive Elements
- **Email Input**: Password recovery email
- **Submit Button**: Send recovery email
- **Back to Login**: Navigation link

## view_summary_game.html
### Purpose
- Type: Detailed game analysis
- User Goal: Review specific game with detailed analysis

### Sections
1. **Header**: Standard navigation
2. **Game Board**: Replay interface
3. **Move Analysis**: Detailed move-by-move breakdown
4. **Game Statistics**: Performance metrics and analysis

### Interactive Elements
- **Board Navigation**: Move forward/backward controls
- **Move List**: Clickable move navigation
- **Analysis Tools**: Game evaluation features
- **Export Options**: Save or share game data

## Common Patterns Across Pages

### Header Variations
1. **Minimal Header**: Logo + title only (settings)
2. **Standard Header**: Logo + title + user avatar + settings
3. **Full Navigation**: Logo + nav menu + user avatar + settings + notifications
4. **Sticky Header**: Fixed position with backdrop blur

### Layout Patterns
1. **Split Screen**: Two-column with decorative left panel (auth pages)
2. **Centered Content**: Single column with max-width container
3. **Full Width**: Header + main content spanning full viewport
4. **Sidebar Layout**: Main content + information sidebar (chessboard)

### Interactive Element Patterns
1. **Primary Buttons**: Full-width, primary color, bold text
2. **Form Fields**: Consistent styling with focus states
3. **Cards**: Hover effects, rounded corners, subtle shadows
4. **Tables**: Hover rows, sortable headers, pagination
5. **Navigation**: Consistent link styling and active states

### Responsive Behavior
- **Mobile First**: All layouts adapt from mobile up
- **Breakpoints**: sm (640px), md (768px), lg (1024px)
- **Navigation**: Collapses to hamburger on mobile (implied)
- **Grid Layouts**: Stack vertically on smaller screens
- **Typography**: Responsive text sizing across breakpoints
