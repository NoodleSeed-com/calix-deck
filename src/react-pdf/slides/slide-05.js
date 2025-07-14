import React from 'react';
import { Page, View, Text } from '@react-pdf/renderer';
import { baseStyles, colors, typography, spacing, cornerStyles } from '../styles.js';
import { SlideHeader, SlideLogo } from '../components/common.js';
import { Card, HighlightBox } from '../components/layouts.js';

// Slide 5: Investment & Team Options
export function createSlide5() {
    return React.createElement(Page, {
        size: "LETTER",
        orientation: "landscape",
        style: baseStyles.page
    },
        React.createElement(SlideHeader, {
            title: "Flexible Engagement Models",
            subtitle: "Choose the approach that fits your budget and timeline"
        }),

        React.createElement(View, { style: { flex: 1, paddingLeft: spacing.xl, paddingRight: spacing.xl, paddingBottom: spacing.xl, justifyContent: 'center', alignItems: 'center' } },
            
            // Premium rate structure - compact format
            React.createElement(HighlightBox, {
                backgroundColor: colors.californiaBlue,
                padding: spacing.lg,
                cornerStyle: cornerStyles.primary,
                style: { maxWidth: 650, alignSelf: 'center' }
            },
                React.createElement(Text, { style: { fontSize: 24, fontWeight: 'bold', color: 'white', textAlign: 'center', lineHeight: 1.2, marginBottom: spacing.md } }, "AI Development Rates"),
                
                // Rate breakdown - more compact
                React.createElement(View, { style: { marginBottom: spacing.md } },
                    React.createElement(Text, { style: { fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: spacing.xs } }, "Founder: $500/hour (max 10hrs/week)"),
                    React.createElement(Text, { style: { fontSize: 14, color: 'white', marginBottom: spacing.sm } }, "Strategic oversight and technical architecture")
                ),

                React.createElement(View, { style: { marginBottom: spacing.md } },
                    React.createElement(Text, { style: { fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: spacing.xs } }, "Silicon Valley Team: $250-350/hour"),
                    React.createElement(Text, { style: { fontSize: 14, color: 'white', marginBottom: spacing.sm } }, "Senior engineers, technical leads, and specialists")
                ),

                React.createElement(View, { style: { marginBottom: spacing.sm } },
                    React.createElement(Text, { style: { fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: spacing.xs } }, "Offshore Team: $50-150/hour"),
                    React.createElement(Text, { style: { fontSize: 14, color: 'white' } }, "Experienced engineers for development and implementation")
                )
            ),

            // Contact information - more compact
            React.createElement(View, { style: { marginTop: spacing.lg, alignItems: 'center' } },
                React.createElement(Text, { style: { fontSize: 18, fontWeight: 'bold', color: colors.californiaBlue, textAlign: 'center', marginBottom: spacing.xs } }, "Fahd Rafi, Founder"),
                React.createElement(Text, { style: { fontSize: 14, color: colors.textSecondary, textAlign: 'center', marginBottom: spacing.xs } }, "fahd@noodleseed.com"),
                React.createElement(Text, { style: { fontSize: 12, color: colors.textMuted, textAlign: 'center' } }, "Book a call: app.reclaim.ai/m/fahdatnoodle")
            )
        ),

        React.createElement(SlideLogo)
    );
}