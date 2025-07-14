import { StyleSheet } from '@react-pdf/renderer';

// Material Design 3 + Noodle Seed Brand Colors
const colors = {
  // Material Design 3 Primary Colors
  primary: '#1976D2',           // Material Blue (enhanced)
  primaryVariant: '#1565C0',    // Darker blue
  secondary: '#00ACC1',         // Material Cyan  
  tertiary: '#FF9800',          // Material Orange
  
  // Noodle Seed Brand Integration
  californiaBlue: '#1976D2',    // Aligned with Material primary
  coralGreen: '#00ACC1',        // Aligned with Material secondary
  peach: '#FF9800',            // Aligned with Material tertiary
  
  // Material Design 3 Typography Colors
  textPrimary: '#1C1B1F',       // Material on-surface
  textSecondary: '#49454F',     // Material on-surface-variant
  textMuted: '#79747E',         // Material outline
  textLight: '#CAC4D0',         // Material outline-variant
  
  // Material Design 3 Surface Colors
  white: '#FFFFFF',             // Pure white
  surface: '#FFFBFE',           // Material surface
  surfaceVariant: '#F7F2FA',    // Material surface-variant
  backgroundLight: '#F3F8FF',   // Light blue tint
  backgroundGreen: '#F0F9F9',   // Light cyan tint
  backgroundPeach: '#FFF8F0',   // Light orange tint
  
  // Status Colors
  error: '#64748B',            // Professional slate gray instead of red
  success: '#216E39',          // Material success green
  warning: '#C46500',          // Material warning amber
  red: '#64748B',              // Professional slate gray for competitive elements
};

// Noodle Seed Asymmetrical Corner Design System
// Based on logo pattern: top-left sharp, top-right rounded, bottom-left rounded, bottom-right sharp
const cornerStyles = {
  // Standard radius for rounded corners
  radius: 16,
  
  // Primary container style (follows logo pattern exactly)
  primary: {
    borderTopLeftRadius: 0,      // Sharp like logo
    borderTopRightRadius: 16,    // Rounded like logo
    borderBottomLeftRadius: 16,  // Rounded like logo 
    borderBottomRightRadius: 0,  // Sharp like logo
  },
  
  // Secondary variations (now consistent with primary pattern)
  secondary: {
    borderTopLeftRadius: 0,      // Sharp like logo
    borderTopRightRadius: 16,    // Rounded like logo
    borderBottomLeftRadius: 16,  // Rounded like logo 
    borderBottomRightRadius: 0,  // Sharp like logo
  },
  
  // Accent style (same as primary pattern)
  accent: {
    borderTopLeftRadius: 0,      // Sharp like logo
    borderTopRightRadius: 16,    // Rounded like logo
    borderBottomLeftRadius: 16,  // Rounded like logo 
    borderBottomRightRadius: 0,  // Sharp like logo
  },
  
  // Alternative accent (same as primary pattern)
  accentReverse: {
    borderTopLeftRadius: 0,      // Sharp like logo
    borderTopRightRadius: 16,    // Rounded like logo
    borderBottomLeftRadius: 16,  // Rounded like logo 
    borderBottomRightRadius: 0,  // Sharp like logo
  },
  
  // Subtle variation (same as primary pattern)
  subtle: {
    borderTopLeftRadius: 0,      // Sharp like logo
    borderTopRightRadius: 16,    // Rounded like logo
    borderBottomLeftRadius: 16,  // Rounded like logo 
    borderBottomRightRadius: 0,  // Sharp like logo
  },
  
  // For small elements/cards (reduced radius but same pattern)
  small: {
    borderTopLeftRadius: 0,      // Sharp like logo
    borderTopRightRadius: 8,     // Rounded like logo (half size)
    borderBottomLeftRadius: 8,   // Rounded like logo (half size)
    borderBottomRightRadius: 0,  // Sharp like logo
  }
};

// Optimized spacing system (8px base grid)
const spacing = {
  xs: 4,    // Micro spacing
  sm: 8,    // Small spacing  
  md: 16,   // Medium spacing
  lg: 24,   // Large spacing
  xl: 32,   // Extra large spacing
  xxl: 48,  // Section spacing
};

// Presentation-Optimized Typography Scale (Based on React PDF Research)
const typography = {
  // Primary Headers (Slide Titles) - minimum 10pt as per React PDF best practices
  heroTitle: 32,         // For main slide titles
  slideTitle: 28,        // Standard slide titles
  sectionTitle: 24,      // Section headers within slides
  
  // Content Typography - all above 10pt minimum
  bodyLarge: 18,         // Primary content text
  bodyMedium: 16,        // Secondary content text
  bodySmall: 14,         // Tertiary content text
  
  // Labels and Supporting Text - minimum 12pt for readability
  labelLarge: 16,        // Important labels
  labelMedium: 14,       // Standard labels
  labelSmall: 12,        // Small labels (minimum recommended)
  
  // Legacy aliases for compatibility
  h1: 32,      // heroTitle
  h2: 28,      // slideTitle
  h3: 24,      // sectionTitle  
  h4: 18,      // bodyLarge
  body: 16,    // bodyMedium
  small: 14,   // bodySmall
  tiny: 12,    // labelSmall
};

// Base styles for all slides
const baseStyles = StyleSheet.create({
  // Page layout (optimized for better space utilization)
  page: {
    flexDirection: 'column',
    backgroundColor: colors.white,
    padding: spacing.lg,
    fontFamily: 'Helvetica',
  },
  
  // Typography with React PDF optimized line heights (1.2-1.5x font size)
  h1: {
    fontSize: typography.h1,
    fontWeight: 'bold',
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 1.2,  // 32 * 1.2 = 38.4pt
  },
  
  h2: {
    fontSize: typography.h2,
    fontWeight: 'bold',
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 1.3,  // 28 * 1.3 = 36.4pt
  },
  
  h3: {
    fontSize: typography.h3,
    fontWeight: 'bold',
    color: colors.textSecondary,
    marginBottom: 16,
    lineHeight: 1.3,  // 24 * 1.3 = 31.2pt
  },
  
  h4: {
    fontSize: typography.h4,
    fontWeight: 'bold',
    color: colors.textSecondary,
    marginBottom: 12,
    lineHeight: 1.4,  // 18 * 1.4 = 25.2pt
  },
  
  bodyText: {
    fontSize: typography.body,
    color: colors.textSecondary,
    lineHeight: 1.5,  // 16 * 1.5 = 24pt
    marginBottom: 16,
  },
  
  smallText: {
    fontSize: typography.small,
    color: colors.textMuted,
    lineHeight: 1.4,  // 14 * 1.4 = 19.6pt
  },
  
  tinyText: {
    fontSize: typography.tiny,
    color: colors.textLight,
    lineHeight: 1.4,  // 12 * 1.4 = 16.8pt
  },
  
  // Brand colors
  blueText: {
    color: colors.californiaBlue,
    fontWeight: 'bold',
  },
  
  greenText: {
    color: colors.coralGreen,
    fontWeight: 'bold',
  },
  
  peachText: {
    color: colors.peach,
    fontWeight: 'bold',
  },
  
  redText: {
    color: colors.red,
    fontWeight: 'bold',
  },
  
  // Layout containers
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  
  column: {
    flexDirection: 'column',
    flex: 1,
  },
  
  // Asymmetrical Container System (following Noodle Seed logo pattern)
  
  // Primary containers (main content blocks)
  containerPrimary: {
    backgroundColor: colors.californiaBlue,
    padding: spacing.lg,
    marginBottom: spacing.md,
    ...cornerStyles.primary,
  },
  
  // Secondary containers (supporting content)
  containerSecondary: {
    backgroundColor: colors.backgroundLight,
    padding: spacing.md,
    marginBottom: spacing.md,
    ...cornerStyles.secondary,
  },
  
  // Accent containers (highlights/CTAs)
  containerAccent: {
    backgroundColor: colors.backgroundGreen,
    padding: spacing.md,
    marginBottom: spacing.sm,
    ...cornerStyles.accent,
  },
  
  // Alternative accent containers
  containerAccentAlt: {
    backgroundColor: colors.backgroundPeach,
    padding: spacing.md,
    marginBottom: spacing.sm,
    ...cornerStyles.accentReverse,
  },
  
  // Error/warning containers
  containerError: {
    backgroundColor: '#FFF8F8',
    padding: spacing.md,
    marginBottom: spacing.sm,
    ...cornerStyles.subtle,
  },
  
  // Small card elements
  cardSmall: {
    backgroundColor: colors.white,
    padding: spacing.sm,
    marginBottom: spacing.xs,
    border: `1px solid ${colors.textLight}30`,
    ...cornerStyles.small,
  },
  
  // Metrics and stats
  metric: {
    alignItems: 'center',
    textAlign: 'center',
    padding: 20,
  },
  
  metricValue: {
    fontSize: typography.h1,
    fontWeight: 'bold',
    lineHeight: 1,
    marginBottom: 8,
  },
  
  metricLabel: {
    fontSize: typography.small,
    fontWeight: 'bold',
    color: colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  
  metricDescription: {
    fontSize: typography.small,
    color: colors.textLight,
    textAlign: 'center',
  },
  
  // Spacing utilities
  mb8: { marginBottom: 8 },
  mb12: { marginBottom: 12 },
  mb16: { marginBottom: 16 },
  mb20: { marginBottom: 20 },
  mb24: { marginBottom: 24 },
  mb32: { marginBottom: 32 },
  mb40: { marginBottom: 40 },
  
  mt8: { marginTop: 8 },
  mt12: { marginTop: 12 },
  mt16: { marginTop: 16 },
  mt20: { marginTop: 20 },
  mt24: { marginTop: 24 },
  mt32: { marginTop: 32 },
  mt40: { marginTop: 40 },
  
  // Text alignment
  textCenter: { textAlign: 'center' },
  textLeft: { textAlign: 'left' },
  textRight: { textAlign: 'right' },
  
  // Flexbox utilities
  flexRow: { flexDirection: 'row' },
  flexColumn: { flexDirection: 'column' },
  flexCenter: { alignItems: 'center', justifyContent: 'center' },
  flexBetween: { justifyContent: 'space-between' },
  flexAround: { justifyContent: 'space-around' },
  flexWrap: { flexWrap: 'wrap' },
  
  // Logo
  logo: {
    height: 60,
    width: 'auto',
    marginBottom: 20,
  },
  
  // Grid layouts
  grid2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  
  grid3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  
  grid4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  
  gridItem: {
    flex: 1,
  },
  
  // Accent bars
  accentBar: {
    width: 4,
    height: 60,
    borderRadius: 2,
    marginRight: 16,
  },
  
  accentBarBlue: {
    backgroundColor: colors.californiaBlue,
  },
  
  accentBarGreen: {
    backgroundColor: colors.coralGreen,
  },
  
  accentBarPeach: {
    backgroundColor: colors.peach,
  },
});

export {
  colors,
  typography,
  cornerStyles,
  spacing,
  baseStyles
};