import React from 'react';
import { Page, View, Text } from '@react-pdf/renderer';
import { baseStyles, colors, typography, spacing, cornerStyles } from '../styles.js';
import { SlideHeader, SlideLogo } from '../components/common.js';
import { Card, HighlightBox } from '../components/layouts.js';

// Slide 4: Troon Technologies Case Study
export function createSlide4() {
    return React.createElement(Page, {
        size: "LETTER",
        orientation: "landscape",
        style: baseStyles.page
    },
        React.createElement(SlideHeader, {
            title: "Case Study: Troon Technologies Partnership",
            subtitle: "From weeks to hours - accelerating client prototyping with AI agents"
        }),

        React.createElement(View, { style: { flex: 1, paddingLeft: spacing.xl, paddingRight: spacing.xl, paddingBottom: spacing.xl, justifyContent: 'center', alignItems: 'center' } },
            
            // Combined layout for main quote and metric boxes
            React.createElement(View, { style: { alignItems: 'center', maxWidth: 800, width: '100%' } },
                
                // Main case study highlight
                React.createElement(HighlightBox, {
                    backgroundColor: colors.californiaBlue,
                    padding: spacing.lg,
                    cornerStyle: cornerStyles.primary,
                    style: { maxWidth: 700, alignSelf: 'center', marginBottom: spacing.sm }
                },
                    React.createElement(Text, { style: { fontSize: 24, fontWeight: 'bold', color: 'white', textAlign: 'center', lineHeight: 1.2, marginBottom: spacing.md } }, "\"From Idea to Working Demo in Hours, Not Weeks\""),
                    React.createElement(Text, { style: { fontSize: 16, color: 'white', textAlign: 'center', lineHeight: 1.4 } }, "Jeff Neasmith, CIO at Troon Technologies")
                ),

                // Key results in three columns - properly positioned below
                React.createElement(View, { style: { flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch', width: '100%', gap: spacing.lg, marginBottom: spacing.lg } },
                
                // Speed improvement
                React.createElement(HighlightBox, {
                    backgroundColor: colors.peach,
                    padding: spacing.md,
                    cornerStyle: cornerStyles.secondary,
                    style: { width: 200, height: 100, alignItems: 'center', justifyContent: 'center' }
                },
                    React.createElement(Text, { style: { fontSize: 18, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: spacing.xs } }, "10x Faster"),
                    React.createElement(Text, { style: { fontSize: 14, color: 'white', textAlign: 'center', lineHeight: 1.2 } }, "Weeks to days")
                ),

                // Client alignment
                React.createElement(HighlightBox, {
                    backgroundColor: colors.coralGreen,
                    padding: spacing.md,
                    cornerStyle: cornerStyles.secondary,
                    style: { width: 200, height: 100, alignItems: 'center', justifyContent: 'center' }
                },
                    React.createElement(Text, { style: { fontSize: 18, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: spacing.xs } }, "Better Alignment"),
                    React.createElement(Text, { style: { fontSize: 14, color: 'white', textAlign: 'center', lineHeight: 1.2 } }, "Early visibility")
                ),

                // Risk reduction
                React.createElement(HighlightBox, {
                    backgroundColor: colors.californiaBlue,
                    padding: spacing.md,
                    cornerStyle: cornerStyles.secondary,
                    style: { width: 200, height: 100, alignItems: 'center', justifyContent: 'center' }
                },
                    React.createElement(Text, { style: { fontSize: 18, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: spacing.xs } }, "Reduced Risk"),
                    React.createElement(Text, { style: { fontSize: 14, color: 'white', textAlign: 'center', lineHeight: 1.2 } }, "Test first")
                )
                ),

                // Partnership quote
                React.createElement(View, { style: { alignItems: 'center', maxWidth: 600 } },
                    React.createElement(Text, { style: { fontSize: 16, color: colors.textSecondary, textAlign: 'center', lineHeight: 1.4, fontStyle: 'italic' } }, "\"Noodle Seed lets us show clients what their product could look and feel like early on. It's like skipping to the first draft but with enough function to actually try things.\""),
                    React.createElement(Text, { style: { fontSize: 14, color: colors.textMuted, textAlign: 'center', marginTop: spacing.xs } }, "— Jeff Neasmith, CIO, Troon Technologies")
                )
            )
        ),

        React.createElement(SlideLogo)
    );
}