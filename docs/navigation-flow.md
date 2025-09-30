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
