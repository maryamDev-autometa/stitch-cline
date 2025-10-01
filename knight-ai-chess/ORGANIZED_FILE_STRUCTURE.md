# Knight AI Chess - Organized File Structure

## Overview

This document describes the organized file structure following the navigation flow outlined in `docs/navigation-flow.md`. The structure groups related features into logical directories for better organization and maintainability.

## Complete Directory Structure

```
knight-ai-chess/src/app/
├── page.tsx                                    → / (Root redirect to login)
├── layout.tsx                                  → Root layout with providers
├── globals.css                                 → Global styles
├── favicon.ico                                 → App icon
│
├── authentication/                             ✨ Authentication Features
│   ├── login/
│   │   └── page.tsx                           → /authentication/login (Login Screen)
│   ├── signup/
│   │   └── page.tsx                           → /authentication/signup (User Registration)
│   └── forgot-password/
│       └── page.tsx                           → /authentication/forgot-password (Password Recovery)
│
├── game-setup/                                 ✨ Game Configuration Features
│   ├── human-vs-ai/
│   │   └── page.tsx                           → /game-setup/human-vs-ai (Human vs AI Setup)
│   ├── human-vs-human/
│   │   └── page.tsx                           → /game-setup/human-vs-human (Local Multiplayer Setup)
│   └── ai-vs-ai/
│       └── page.tsx                           → /game-setup/ai-vs-ai (AI Battle Arena Setup)
│
├── active-game/                                ✨ Live Game Features
│   └── play/
│       └── page.tsx                           → /active-game/play (Live Chessboard Interface)
│
├── game-history/                               ✨ Game History & Analysis Features
│   ├── summary/
│   │   └── page.tsx                           → /game-history/summary (Game Results List)
│   ├── game-detail/
│   │   └── page.tsx                           → /game-history/game-detail (Interactive Game Replay)
│   └── tournaments/
│       └── page.tsx                           → /game-history/tournaments (Past Tournaments View)
│
├── settings/
│   └── page.tsx                               → /settings (User Settings & Preferences)
│
└── [Legacy Structure - To be removed]
    ├── signup/ (old)
    ├── forgot-password/ (old)
    ├── setup/ (old)
    ├── play/ (old)
    ├── history/ (old)
    ├── game-result/ (old)
    ├── tournaments/ (old)
    └── game/[id]/ (old)
```

## Feature Organization

### 1. Authentication Features (`/authentication`)

Grouped authentication-related pages for user account management.

| Route | Page | Purpose |
|-------|------|---------|
| `/authentication/login` | Login Screen | User authentication |
| `/authentication/signup` | Signup Screen | New user registration |
| `/authentication/forgot-password` | Password Recovery | Password reset flow |

**Navigation Flow:**
```
/ (Root) → /authentication/login (Landing)
         ↓
         → /authentication/signup (Create account)
         → /authentication/forgot-password (Reset password)
```

### 2. Game Setup Features (`/game-setup`)

Grouped game configuration pages for different game modes.

| Route | Page | Purpose |
|-------|------|---------|
| `/game-setup/human-vs-ai` | Human vs AI Setup | Configure game against AI |
| `/game-setup/human-vs-human` | Local Multiplayer Setup | Configure 2-player local game |
| `/game-setup/ai-vs-ai` | AI Battle Arena Setup | Configure AI vs AI battle |

**Navigation Flow:**
```
Main Navigation → "Play" Menu
                 ↓
                 → /game-setup/human-vs-ai → /active-game/play?mode=human-vs-ai
                 → /game-setup/human-vs-human → /active-game/play?mode=human-vs-human
                 → /game-setup/ai-vs-ai → /active-game/play?mode=ai-vs-ai&autoStart=true
```

### 3. Active Game Features (`/active-game`)

Live gameplay interface with real-time interaction.

| Route | Page | Purpose |
|-------|------|---------|
| `/active-game/play` | Live Chessboard | Active game with move tracking |

**URL Parameters:**
```typescript
/active-game/play?mode=human-vs-ai&whitePlayer=You&blackPlayer=AI&autoStart=true
/active-game/play?mode=human-vs-human&whitePlayer=Alice&blackPlayer=Bob
/active-game/play?mode=ai-vs-ai&whitePlayer=Gemini&blackPlayer=Opus&autoStart=true
```

### 4. Game History Features (`/game-history`)

Grouped game history, analysis, and tournament pages.

| Route | Page | Purpose |
|-------|------|---------|
| `/game-history/summary` | Game Results List | Browse past games with search/filter |
| `/game-history/game-detail` | Interactive Game Replay | Move-by-move analysis with playback |
| `/game-history/tournaments` | Past Tournaments | Tournament history and results |

**Navigation Flow:**
```
Main Navigation → "Game History"
                 ↓
                 → /game-history/summary (List of games)
                    ↓
                    → /game-history/game-detail (Replay specific game)
                 → /game-history/tournaments (Tournament history)
```

### 5. Settings Feature (`/settings`)

User preferences and account management.

| Route | Page | Purpose |
|-------|------|---------|
| `/settings` | Settings Page | User preferences, account settings, logout |

## Benefits of Organized Structure

### 1. **Logical Grouping** ✅
- Related features grouped together
- Easy to find and navigate codebase
- Clear feature boundaries

### 2. **Scalability** ✅
- Easy to add new pages within feature groups
- Can split large features into sub-features
- Supports feature-based development

### 3. **Maintainability** ✅
- Changes to a feature are localized
- Easier to refactor feature groups
- Better code organization

### 4. **Developer Experience** ✅
- Intuitive file structure
- Matches mental model of application features
- Easier onboarding for new developers

### 5. **Clear Ownership** ✅
- Teams can own specific feature directories
- Parallel development of different features
- Reduced merge conflicts

## URL Mapping Comparison

### Before (Flat Structure)
```
/                           → Login
/signup                     → Signup
/forgot-password            → Password Recovery
/setup/human-vs-ai          → Human vs AI Setup
/setup/human-vs-human       → Local Multiplayer
/setup/ai-vs-ai             → AI Battle
/play                       → Live Game
/history                    → Game History
/game-result                → Game Replay
/tournaments                → Tournaments
/settings                   → Settings
```

### After (Organized Structure)
```
/authentication/login               → Login
/authentication/signup              → Signup
/authentication/forgot-password     → Password Recovery
/game-setup/human-vs-ai            → Human vs AI Setup
/game-setup/human-vs-human         → Local Multiplayer
/game-setup/ai-vs-ai               → AI Battle
/active-game/play                  → Live Game
/game-history/summary              → Game History
/game-history/game-detail          → Game Replay
/game-history/tournaments          → Tournaments
/settings                          → Settings
```

## Migration Path

### Phase 1: ✅ Create New Structure
- [x] Create authentication directory and pages
- [x] Create game-setup directory and pages
- [x] Create active-game directory and pages
- [x] Create game-history directory and pages
- [x] Update navigation links

### Phase 2: 🔄 Update References
- [ ] Update all internal navigation links
- [ ] Update Header component navigation
- [ ] Update redirect logic
- [ ] Test all navigation flows

### Phase 3: 🗑️ Remove Legacy
- [ ] Remove old authentication pages
- [ ] Remove old setup directory
- [ ] Remove old game pages
- [ ] Clean up unused routes

### Phase 4: ✅ Documentation
- [x] Create this documentation
- [ ] Update README.md
- [ ] Update API documentation
- [ ] Update team documentation

## Next Steps

1. **Update Navigation Links**: Update all components that reference old routes
2. **Test Navigation Flows**: Verify all user flows work with new structure
3. **Remove Legacy Files**: Clean up old file structure
4. **Update Documentation**: Ensure all documentation reflects new structure
5. **Team Communication**: Inform team of new structure and migration plan

## File Structure Best Practices

### DO ✅
- Group related features together
- Use descriptive directory names
- Keep nesting reasonable (2-3 levels max)
- Use consistent naming conventions
- Document the structure

### DON'T ❌
- Mix unrelated features in same directory
- Create too many nested levels
- Use abbreviations in directory names
- Duplicate code across feature groups
- Leave legacy files without cleanup plan

## Conclusion

This organized file structure provides a clear, scalable foundation for the Knight AI Chess application. It follows Next.js best practices while adding logical feature grouping that improves developer experience and long-term maintainability.

The structure directly maps to the navigation flows outlined in `docs/navigation-flow.md`, making it easy to understand how the application is organized and how users navigate through different features.
