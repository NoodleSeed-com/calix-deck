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
  error: '#BA1A1A',            // Material error
  success: '#216E39',          // Material success green
  warning: '#C46500',          // Material warning amber
  red: '#BA1A1A',              // Same as error for compatibility
};

// Material Design 3 Typography Scale
const typography = {
  // Display (Large headlines)
  displayLarge: 57,
  displayMedium: 45,
  displaySmall: 36,
  
  // Headlines
  headlineLarge: 32,
  headlineMedium: 28,
  headlineSmall: 24,
  
  // Titles 
  titleLarge: 22,
  titleMedium: 16,
  titleSmall: 14,
  
  // Labels
  labelLarge: 14,
  labelMedium: 12,
  labelSmall: 11,
  
  // Body
  bodyLarge: 16,
  bodyMedium: 14,
  bodySmall: 12,
  
  // Legacy aliases for compatibility
  h1: 36,      // displaySmall
  h2: 28,      // headlineMedium
  h3: 24,      // headlineSmall
  h4: 22,      // titleLarge
  body: 16,    // bodyLarge
  small: 14,   // bodyMedium
  tiny: 12,    // bodySmall
};

// Base styles for all slides
const baseStyles = StyleSheet.create({
  // Page layout
  page: {
    flexDirection: 'column',
    backgroundColor: colors.white,
    padding: 24,
    fontFamily: 'Helvetica',
  },
  
  // Typography
  h1: {
    fontSize: typography.h1,
    fontWeight: 'bold',
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 1.1,
  },
  
  h2: {
    fontSize: typography.h2,
    fontWeight: 'bold',
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 1.2,
  },
  
  h3: {
    fontSize: typography.h3,
    fontWeight: 'bold',
    color: colors.textSecondary,
    marginBottom: 16,
    lineHeight: 1.3,
  },
  
  h4: {
    fontSize: typography.h4,
    fontWeight: 'bold',
    color: colors.textSecondary,
    marginBottom: 12,
    lineHeight: 1.3,
  },
  
  bodyText: {
    fontSize: typography.body,
    color: colors.textSecondary,
    lineHeight: 1.6,
    marginBottom: 16,
  },
  
  smallText: {
    fontSize: typography.small,
    color: colors.textMuted,
    lineHeight: 1.5,
  },
  
  tinyText: {
    fontSize: typography.tiny,
    color: colors.textLight,
    lineHeight: 1.4,
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
  
  // Cards and sections
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 24,
    marginBottom: 20,
    shadowColor: colors.textLight,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    border: `1px solid ${colors.textLight}20`,
  },
  
  cardBlue: {
    backgroundColor: colors.backgroundLight,
    borderLeft: `4px solid ${colors.californiaBlue}`,
  },
  
  cardGreen: {
    backgroundColor: colors.backgroundGreen,
    borderLeft: `4px solid ${colors.coralGreen}`,
  },
  
  cardPeach: {
    backgroundColor: colors.backgroundPeach,
    borderLeft: `4px solid ${colors.peach}`,
  },
  
  cardRed: {
    backgroundColor: '#FFF8F8',
    borderLeft: `4px solid ${colors.red}`,
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
  baseStyles
};