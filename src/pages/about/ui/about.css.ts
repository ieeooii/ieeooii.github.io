import { keyframes, style } from '@vanilla-extract/css'
import { vars } from '../../../shared/styles/tokens.css'

export { container } from '../../../shared/styles/layout.css'

export const page = style({
  minHeight: '100vh',
  paddingTop: vars.layout.navbarHeight,
  position: 'relative',
})

// ── Portrait (coin flip on first render) ──────────────────────────────────────

export const portraitWrap = style({
  position: 'absolute',
  top: '50%',
  right: 0,
  transform: 'translateY(-50%)',
  width: 'min(320px, 60vw)',
  aspectRatio: '1',
  perspective: '1200px',
  '@media': {
    '(max-width: 768px)': {
      position: 'relative',
      top: 'auto',
      right: 'auto',
      transform: 'none',
      margin: `${vars.space[8]} auto 0`,
    },
  },
})

// 5 full turns with a strong ease-out: fast at first, slowing down to settle on the front face.
// Applied once the intro flip has finished; gates the hover turntable and pointer cursor.
export const portraitWrapReady = style({
  '@media': {
    '(hover: hover)': {
      cursor: 'pointer',
    },
  },
})

const flip = keyframes({
  from: { transform: 'rotateY(0deg)' },
  to: { transform: 'rotateY(1800deg)' },
})

export const coin = style({
  position: 'relative',
  width: '100%',
  height: '100%',
  transformStyle: 'preserve-3d',
})

export const coinFlip = style({
  animation: `${flip} 3s cubic-bezier(0.1, 0.8, 0.2, 1) 300ms both`,
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  },
})

const coinFace = style({
  position: 'absolute',
  inset: 0,
  borderRadius: vars.radii.full,
  backfaceVisibility: 'hidden',
  '::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: vars.radii.full,
    backgroundImage: `repeating-linear-gradient(0deg, ${vars.color.gray[100]} 0 1px, transparent 1px 5px), repeating-linear-gradient(90deg, ${vars.color.gray[100]} 0 1px, transparent 1px 5px)`,
    pointerEvents: 'none',
  },
})

export const coinFront = style([coinFace])

export const coinBack = style([
  coinFace,
  {
    transform: 'rotateY(180deg)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: vars.color.selectionBg,
    userSelect: 'none',
  },
])

export const coinBackMark = style({
  // Above the grid overlay (::after) so the mark stays crisp.
  position: 'relative',
  zIndex: 1,
  // Follows the theme: white in light mode, dark in dark mode.
  color: vars.color.white,
  // Cormorant Garamond Light, subset to "W" via the Google Fonts link in index.html.
  // Its cap height is lower than Inter's, so the size is bumped to keep the same visual scale.
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontSize: 'clamp(7.5rem, 23vw, 11.75rem)',
  fontWeight: 300,
  lineHeight: 1,
})

// Turntable: only the image spins while hovered; the grid overlay stays fixed like a platter mat.
const spin = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
})

export const portraitImg = style({
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: vars.radii.full,
  imageRendering: 'pixelated',
  animation: `${spin} 4s linear infinite`,
  animationPlayState: 'paused',
  '@media': {
    '(hover: hover)': {
      selectors: {
        [`${portraitWrapReady}:hover &`]: {
          animationPlayState: 'running',
        },
      },
    },
    '(prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  },
})

export const containerPadding = style({
  paddingTop: vars.space[20],
  paddingBottom: vars.space[24],
  '@media': {
    '(max-width: 640px)': {
      paddingTop: vars.space[12],
      paddingBottom: vars.space[16],
    },
  },
})


export const gridHeader = style({
  paddingBottom: '12rem',
  position: 'relative',
  '@media': {
    '(max-width: 768px)': {
      paddingBottom: '5rem',
    },
  },
})

export const gridTitle = style({
  fontSize: 'clamp(4rem, 10vw, 7rem)',
  fontWeight: vars.fontWeight.medium,
  letterSpacing: vars.letterSpacing.tighter,
  lineHeight: vars.lineHeight.none,
  color: vars.color.dark,
})

export const tagline = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.semibold,
  letterSpacing: vars.letterSpacing.wider,
  textTransform: 'uppercase',
  color: vars.color.brand,
  marginBottom: vars.space[4],
})

export const name = style({
  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
  fontWeight: vars.fontWeight.extrabold,
  letterSpacing: vars.letterSpacing.tighter,
  lineHeight: vars.lineHeight.tight,
  color: vars.color.dark,
  marginBottom: vars.space[8],
})

export const bio = style({
  whiteSpace: 'pre-line',
  wordBreak: 'keep-all',
  fontSize: vars.fontSize.xl,
  color: vars.color.gray[800],
  lineHeight: vars.lineHeight.relaxed,
  marginBottom: vars.space[16],
  paddingBottom: vars.space[16],
  borderBottom: `1px solid ${vars.color.gray[200]}`,
})

export const section = style({
  marginBottom: vars.space[16],
  paddingBottom: vars.space[16],
  borderBottom: `1px solid ${vars.color.gray[200]}`,
  selectors: {
    '&:last-child': {
      borderBottom: 'none',
      paddingBottom: 0,
    },
  },
})

export const sectionTitle = style({
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.semibold,
  letterSpacing: vars.letterSpacing.wider,
  textTransform: 'uppercase',
  color: vars.color.gray[500],
  marginBottom: vars.space[6],
})

export const pubTitle = style({
  display: 'inline-block',
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.dark,
  lineHeight: vars.lineHeight.snug,
  marginBottom: vars.space[2],
  textDecoration: 'none',
  selectors: {
    '&:hover': { color: vars.color.brand },
  },
})

export const pubMeta = style({
  fontSize: vars.fontSize.base,
  color: vars.color.gray[800],
  marginBottom: vars.space[4],
})

export const pubKeywords = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.gray[500],
  fontWeight: vars.fontWeight.semibold,
  marginBottom: vars.space[4],
})

export const pubDetails = style({
  cursor: 'default',
  width: 'fit-content',
})

export const pubSummary = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.brand,
  cursor: 'pointer',
  userSelect: 'none',
  listStyle: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: vars.space[2],
  selectors: {
    '&::-webkit-details-marker': { display: 'none' },
    [`${pubDetails}[open] &`]: { marginBottom: vars.space[4] },
  },
})

export const pubAbstract = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.gray[700],
  lineHeight: vars.lineHeight.relaxed,
  paddingLeft: vars.space[4],
  borderLeft: `2px solid ${vars.color.gray[200]}`,
})

export const companyName = style({
  display: 'inline-block',
  fontSize: vars.fontSize['2xl'],
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.dark,
  marginBottom: vars.space[8],
  textDecoration: 'none',
  selectors: {
    '&:hover': { color: vars.color.brand },
  },
})

export const companyMeta = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.gray[500],
  marginBottom: vars.space[8],
})

export const expList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[6],
  paddingLeft: vars.space[4],
  borderLeft: `2px solid ${vars.color.gray[200]}`,
})

export const expItem = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[1],
  position: 'relative',
  selectors: {
    '&::before': {
      content: '""',
      position: 'absolute',
      left: '-17px',
      top: '8px',
      width: '8px',
      height: '8px',
      borderRadius: vars.radii.full,
      backgroundColor: vars.color.gray[300],
      outline: `8px solid ${vars.color.gray[100]}`,
      transform: 'translateX(-50%)',
    },
  },
})

export const expRole = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.dark,
})

export const expMeta = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.gray[500],
})

export const expLink = style({
  color: vars.color.gray[700],
  fontWeight: vars.fontWeight.medium,
  textDecoration: 'underline',
  textUnderlineOffset: '3px',
  selectors: {
    '&:hover': { color: vars.color.gray[800] },
  },
})

export const expDesc = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.gray[700],
  lineHeight: vars.lineHeight.relaxed,
  marginTop: vars.space[2],
})

export const itemList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[8],
})

export const item = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: vars.space[8],
})

export const itemPeriod = style({
  fontSize: vars.fontSize.base,
  color: vars.color.gray[500],
  whiteSpace: 'nowrap',
  paddingTop: '4px',
  flexShrink: 0,
})

export const itemBody = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space[1],
})

export const itemTitle = style({
  fontSize: vars.fontSize['2xl'],
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.dark,
})

export const itemSub = style({
  fontSize: vars.fontSize.lg,
  color: vars.color.gray[700],
  lineHeight: vars.lineHeight.relaxed,
})

export const itemNote = style({
  fontSize: vars.fontSize.base,
  color: vars.color.gray[500],
  lineHeight: vars.lineHeight.relaxed,
  marginTop: vars.space[1],
})
