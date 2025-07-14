import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { colors, typography, spacing, cornerStyles } from '../styles.js';

// Two-column layout
export function TwoColumnLayout({ children, gap = spacing.md }) {
    return React.createElement(View, { style: { flexDirection: 'row', gap: gap } }, children);
}

// Three-column layout
export function ThreeColumnLayout({ children, gap = spacing.md }) {
    return React.createElement(View, { style: { flexDirection: 'row', gap: gap } }, children);
}

// Card component with corner styles
export function Card({ children, backgroundColor = colors.backgroundLight, cornerStyle = cornerStyles.primary, padding = spacing.md }) {
    return React.createElement(View, { 
        style: { 
            backgroundColor: backgroundColor, 
            padding: padding, 
            ...cornerStyle 
        } 
    }, children);
}

// Highlight box component
export function HighlightBox({ children, backgroundColor = colors.californiaBlue, textColor = 'white', padding = spacing.lg, cornerStyle = cornerStyles.primary }) {
    return React.createElement(View, { 
        style: { 
            backgroundColor: backgroundColor, 
            padding: padding, 
            textAlign: 'center',
            ...cornerStyle 
        } 
    }, children);
}

// Metric display component
export function MetricDisplay({ value, label, sublabel, color = colors.californiaBlue, backgroundColor = colors.backgroundLight }) {
    return React.createElement(View, { 
        style: { 
            flex: 1, 
            backgroundColor: backgroundColor, 
            padding: spacing.lg, 
            textAlign: 'center',
            ...cornerStyles.accent 
        } 
    },
        React.createElement(Text, { style: { fontSize: 36, fontWeight: 'bold', color: color, marginBottom: spacing.sm } }, value),
        React.createElement(Text, { style: { fontSize: typography.bodyMedium, fontWeight: 'bold', marginBottom: spacing.xs } }, label),
        sublabel && React.createElement(Text, { style: { fontSize: typography.labelMedium, color: colors.textMuted } }, sublabel)
    );
}

// Feature card component
export function FeatureCard({ icon, title, description, backgroundColor = colors.backgroundLight, cornerStyle = cornerStyles.small }) {
    return React.createElement(View, { 
        style: { 
            flex: 1, 
            backgroundColor: backgroundColor, 
            padding: spacing.md, 
            textAlign: 'center',
            ...cornerStyle 
        } 
    },
        icon && React.createElement(View, { style: { marginBottom: spacing.sm } }, icon),
        React.createElement(Text, { style: { fontSize: typography.bodyMedium, fontWeight: 'bold', marginBottom: spacing.xs } }, title),
        description && React.createElement(Text, { style: { fontSize: typography.labelMedium, lineHeight: 1.3 } }, description)
    );
}

// Section with title and content
export function Section({ title, children, marginBottom = spacing.lg }) {
    return React.createElement(View, { style: { marginBottom: marginBottom } },
        title && React.createElement(Text, { style: { fontSize: typography.sectionTitle, fontWeight: 'bold', color: colors.californiaBlue, marginBottom: spacing.sm, textAlign: 'center' } }, title),
        children
    );
}