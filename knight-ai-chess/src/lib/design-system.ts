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

export const chessPieces = {
  'r': '♜', // Black Rook
  'n': '♞', // Black Knight
  'b': '♝', // Black Bishop
  'q': '♛', // Black Queen
  'k': '♚', // Black King
  'p': '♟', // Black Pawn
  'R': '♜', // Black Rook
  'N': '♞', // Black Knight
  'B': '♝', // Black Bishop
  'Q': '♛', // Black Queen
  'K': '♚', // Black King
  'P': '♟︎' // Black Pawn

} as const;

export const initialChessBoard = [
  ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
] as const;
