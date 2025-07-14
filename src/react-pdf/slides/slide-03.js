import React from 'react';
import { Page, View, Text } from '@react-pdf/renderer';
import { baseStyles, colors, typography, spacing, cornerStyles } from '../styles.js';
import { SlideHeader, SlideLogo } from '../components/common.js';
import { Card, HighlightBox } from '../components/layouts.js';

// Slide 3: Development Approach
export function createSlide3() {
    return React.createElement(Page, {
        size: "LETTER",
        orientation: "landscape",
        style: baseStyles.page
    },
        React.createElement(SlideHeader, {
            title: "We deliver working systems in 2-week sprints",
            subtitle: "See progress every week, not after months of development"
        }),

        React.createElement(View, { style: { flex: 1, paddingLeft: spacing.xl, paddingRight: spacing.xl, paddingBottom: spacing.xl, justifyContent: 'center', alignItems: 'center' } },
            
            // Main approach
            React.createElement(HighlightBox, {
                backgroundColor: colors.californiaBlue,
                padding: spacing.xxl,
                cornerStyle: cornerStyles.primary,
                style: { maxWidth: 700, alignSelf: 'center' }
            },
                React.createElement(Text, { style: { fontSize: 28, fontWeight: 'bold', color: 'white', textAlign: 'center', lineHeight: 1.3, marginBottom: spacing.lg } }, "Transparent Agile Development"),
                React.createElement(Text, { style: { fontSize: 18, color: 'white', textAlign: 'center', lineHeight: 1.5 } }, "Custom agent framework development • Multi-agent system orchestration • Enterprise integration and deployment")
            ),

            // Key differentiators - simplified list format
            React.createElement(View, { style: { marginTop: spacing.xxl, alignItems: 'center', maxWidth: 600 } },
                React.createElement(Text, { style: { fontSize: 20, fontWeight: 'bold', color: colors.textSecondary, textAlign: 'center', lineHeight: 1.4, marginBottom: spacing.lg } }, "Our Differentiators"),
                
                React.createElement(View, { style: { flexDirection: 'column', alignItems: 'center', gap: spacing.md } },
                    React.createElement(Text, { style: { fontSize: 18, fontWeight: 'bold', color: colors.californiaBlue, textAlign: 'center' } }, "• Weekly demos with working AI agents"),
                    React.createElement(Text, { style: { fontSize: 18, fontWeight: 'bold', color: colors.peach, textAlign: 'center' } }, "• Production-ready code, not prototypes"),
                    React.createElement(Text, { style: { fontSize: 18, fontWeight: 'bold', color: colors.coralGreen, textAlign: 'center' } }, "• Transparent agile development process")
                )
            )
        ),

        React.createElement(SlideLogo)
    );
}