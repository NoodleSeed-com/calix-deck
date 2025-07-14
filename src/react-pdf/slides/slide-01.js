import React from 'react';
import { Page, View, Text } from '@react-pdf/renderer';
import { baseStyles, colors, typography, spacing, cornerStyles } from '../styles.js';
import { CenteredLogo, SlideLogo } from '../components/common.js';
import { Card, HighlightBox } from '../components/layouts.js';

// Slide 1: Company Introduction
export function createSlide1() {
    return React.createElement(Page, {
        size: "LETTER",
        orientation: "landscape",
        style: baseStyles.page
    },
        React.createElement(View, { style: { flex: 1, paddingLeft: spacing.xl, paddingRight: spacing.xl, paddingTop: spacing.xl, justifyContent: 'center', alignItems: 'center' } },
            
            // Large centered logo with more space
            React.createElement(CenteredLogo, { size: 400, maxHeight: 80 }),
            
            // Streamlined main message
            React.createElement(HighlightBox, {
                backgroundColor: colors.californiaBlue,
                padding: spacing.xl,
                cornerStyle: cornerStyles.primary
            },
                React.createElement(Text, { style: { fontSize: 32, fontWeight: 'bold', color: 'white', textAlign: 'center', lineHeight: 1.2, marginBottom: spacing.md } }, "Enterprise AI Agent Development"),
                React.createElement(Text, { style: { fontSize: 18, color: 'white', textAlign: 'center', lineHeight: 1.4 } }, "Multi-framework expertise for enterprise automation")
            ),

            // Team summary
            React.createElement(View, { style: { marginTop: spacing.xl, maxWidth: 600, alignItems: 'center' } },
                React.createElement(Text, { style: { fontSize: 24, fontWeight: 'bold', color: colors.californiaBlue, textAlign: 'center', lineHeight: 1.3 } }, "15-person team • 12 engineers • Production-ready AI agents")
            ),

            // Company motto
            React.createElement(View, { style: { marginTop: spacing.xl } },
                React.createElement(Text, { style: { fontSize: 16, fontWeight: 'bold', color: colors.textMuted, textAlign: 'center', lineHeight: 1.4 } }, "Automate the Ordinary, Create the Extraordinary")
            )
        ),

        React.createElement(SlideLogo)
    );
}