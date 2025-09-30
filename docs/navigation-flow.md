# Navigation Flow

## Site Map
```
Knight AI Chess Application
├── Authentication
│   ├── Login (knight_ai_login_screen.html)
│   ├── Signup (knight_ai_signup_screen.html)
│   └── Forgot Password (knight_ai_foeget_password.html)
├── Game Setup
│   ├── Human vs AI (human_vs_ai_setup.html)
│   ├── Human vs Human (human_vs_human_setup.html)
│   └── AI vs AI (ai_vs_ai_setup.html)
├── Active Game
│   └── Chessboard (knight_ai_chessboard.html)
├── Game History
│   ├── Game Results Summary (game_result_summary.html)
│   ├── View Game Summary (view_summary_game.html)
│   └── Past Tournaments (past_tournaments_view.html)
└── Settings
    └── Settings Page (knight_ai_settings_page.html)
```

## User Flows

### Authentication Flow
1. **Landing** → Login Screen
   - User arrives at login page
   - Options: Login or "Create new account"
2. **Login** → Dashboard/Game Setup
   - Enter email + password
   - Click "Login" button
   - Success: Redirect to main application
3. **Signup Flow**
   - Click "Create new account" from login
   - Enter username + email + password
   - Click "Sign Up" button
   - Success: Account created, redirect to main app
4. **Password Recovery**
   - Click "Forgot your password?" from login
   - Enter email for recovery
   - Submit recovery request

### Game Setup Flow
1. **Main Navigation** → Game Setup
   - Click "Play" from main navigation
   - Choose game type:
     - Human vs AI
     - Human vs Human  
     - AI vs AI
2. **Human vs AI Setup**
   - Enter human player name
   - Select AI model (Gemini 2.5 Flash, Gemini 1.5 Flash, Opus 4, Opus 4.1, Qwen)
   - Choose difficulty (Beginner, Intermediate, Advanced)
   - Optional: Enable opening book, endgame tablebase
   - Click "Start Game"
3. **Human vs Human Setup**
   - Enter both player names
   - Configure local game settings
   - Click "Start Game"
4. **AI vs AI Setup**
   - Select AI models for both players
   - Configure match settings
   - Click "Start Match"

### Active Game Flow
1. **Game Setup** → Active Game
   - After clicking "Start Game" from any setup screen
   - Load chessboard interface
2. **Game Interface**
   - Make moves by clicking pieces and squares
   - View game info in sidebar (turn, timers, moves)
   - Access "New Game" button in header
3. **Game Completion**
   - Game ends (checkmate, draw, resignation)
   - Results saved to game history
   - Option to start new game

### Game History Flow
1. **Main Navigation** → Game History
   - Click "Game History" from navigation menu
   - View table of past games
2. **Game History Features**
   - Search games by opponent name
   - Filter by outcome (All, Wins, Losses, Draws)
   - Sort by date or duration
   - Paginate through results
3. **View Individual Game**
   - Click "View Game" link from history table
   - Navigate to detailed game analysis
   - Review move-by-move breakdown

### Tournament Flow
1. **Main Navigation** → Past Tournaments
   - Click "Past Tournaments" from navigation
   - View tournament results table
2. **Tournament Features**
   - Browse completed tournaments
   - View tournament details (name, date, winner, summary)
   - Click rows for detailed tournament view

### Settings Flow
1. **Header** → Settings
   - Click settings icon from any page header
   - Navigate to settings page
2. **Settings Navigation**
   - Account Management
   - Notifications
   - App Settings (currently active)
3. **Logout**
   - Click "Log Out" button
   - Return to login screen

## Interactive Elements Map

| Element | Location | Action | Destination |
|---------|----------|--------|-------------|
| **Authentication** |
| "Login" Button | Login Screen | Form Submit | Main Application |
| "Create new account" Link | Login Screen | Navigate | Signup Screen |
| "Forgot password" Link | Login Screen | Navigate | Password Recovery |
| "Sign Up" Button | Signup Screen | Form Submit | Main Application |
| "Login to existing account" Link | Signup Screen | Navigate | Login Screen |
| **Navigation** |
| "Play" Menu Item | Main Navigation | Navigate | Game Setup Options |
| "Learn" Menu Item | Main Navigation | Navigate | Learning Section |
| "Community" Menu Item | Main Navigation | Navigate | Community Features |
| "Game History" Menu Item | Main Navigation | Navigate | Game Results Summary |
| "Past Tournaments" Menu Item | Main Navigation | Navigate | Tournament History |
| Settings Icon | Header | Navigate | Settings Page |
| User Avatar | Header | Navigate | Profile/Account |
| Notifications Icon | Header | Toggle | Notifications Panel |
| **Game Setup** |
| "Start Game" Button | Human vs AI Setup | Navigate | Active Chessboard |
| "Start Game" Button | Human vs Human Setup | Navigate | Active Chessboard |
| "Start Match" Button | AI vs AI Setup | Navigate | Active Chessboard |
| AI Model Radio Buttons | Game Setup | Select | Update Configuration |
| Difficulty Radio Buttons | Game Setup | Select | Update Configuration |
| Game Options Checkboxes | Game Setup | Toggle | Update Settings |
| **Active Game** |
| "New Game" Button | Chessboard Header | Navigate | Game Setup |
| Chess Pieces | Chessboard | Drag/Click | Make Move |
| Board Squares | Chessboard | Click | Move Destination |
| **Game History** |
| Search Input | Game History | Filter | Update Table |
| Outcome Filter | Game History | Filter | Update Table |
| Sort Dropdown | Game History | Sort | Reorder Table |
| "View Game" Links | Game History Table | Navigate | Game Analysis |
| Pagination Buttons | Game History | Navigate | Next/Previous Page |
| **Settings** |
| Account Management Card | Settings | Navigate | Account Settings |
| Notifications Card | Settings | Navigate | Notification Settings |
| App Settings Card | Settings | Navigate | App Preferences |
| "Log Out" Button | Settings | Action | Return to Login |

## Data Flow

### User Session Management
- **Login State**: Persisted across page navigation
- **User Profile**: Avatar, username, preferences stored
- **Authentication**: JWT tokens or session cookies
- **Logout**: Clear session data, redirect to login

### Game State Management
- **Active Game**: Board state, move history, timers
- **Game Configuration**: Player names, AI settings, difficulty
- **Move Validation**: Client-side and server-side validation
- **Game Persistence**: Save game state for resumption

### Game History Data
- **Game Records**: Opponent, date, outcome, duration, moves
- **Search/Filter State**: Current search terms, active filters
- **Pagination State**: Current page, items per page
- **Sort Preferences**: User's preferred sorting method

### Settings Data
- **User Preferences**: Notification settings, app preferences
- **Account Information**: Profile data, security settings
- **Game Preferences**: Default difficulty, board themes

## Navigation Patterns

### Header Navigation Consistency
1. **Minimal Header** (Settings): Logo + title only
2. **Standard Header** (Game pages): Logo + title + user controls
3. **Full Navigation** (Main pages): Complete navigation menu
4. **Sticky Header** (Long content): Fixed position with blur

### Breadcrumb Patterns
- **Implicit Breadcrumbs**: Page titles indicate current location
- **Navigation State**: Active menu items highlighted
- **Back Navigation**: Browser back button supported

### Mobile Navigation
- **Responsive Menus**: Navigation collapses on mobile
- **Touch Targets**: Appropriately sized for mobile interaction
- **Swipe Gestures**: Supported for game board interaction

## Error Handling & Edge Cases

### Authentication Errors
- **Invalid Credentials**: Show error message, remain on login
- **Network Errors**: Retry mechanism, offline indication
- **Session Expiry**: Redirect to login with message

### Game Flow Errors
- **Invalid Moves**: Visual feedback, move rejection
- **Connection Loss**: Game state preservation, reconnection
- **Opponent Disconnect**: Pause game, wait for reconnection

### Navigation Errors
- **404 Pages**: Redirect to appropriate fallback page
- **Unauthorized Access**: Redirect to login
- **Deep Links**: Handle direct URL access appropriately

## Performance Considerations

### Page Load Optimization
- **Critical Path**: Prioritize above-the-fold content
- **Code Splitting**: Load game engine only when needed
- **Image Optimization**: Lazy load user avatars and images

### Navigation Performance
- **Prefetching**: Preload likely next pages
- **Caching**: Cache game history and user data
- **Progressive Enhancement**: Core functionality works without JS

## Accessibility Navigation

### Keyboard Navigation
- **Tab Order**: Logical tab sequence through interactive elements
- **Focus Management**: Clear focus indicators
- **Skip Links**: Jump to main content

### Screen Reader Support
- **ARIA Labels**: Descriptive labels for interactive elements
- **Landmark Roles**: Proper semantic structure
- **Live Regions**: Announce game state changes

### Visual Accessibility
- **High Contrast**: Sufficient color contrast ratios
- **Focus Indicators**: Visible focus states
- **Text Scaling**: Support for text size adjustments

## Security Considerations

### Authentication Security
- **HTTPS Only**: All authentication over secure connections
- **CSRF Protection**: Cross-site request forgery prevention
- **Rate Limiting**: Prevent brute force attacks

### Navigation Security
- **Authorization Checks**: Verify user permissions for each page
- **Input Validation**: Sanitize all user inputs
- **XSS Prevention**: Escape user-generated content

This navigation flow ensures users can efficiently move through the chess application while maintaining security and accessibility standards.
