import React from 'react';
import { Page, View, Text } from '@react-pdf/renderer';
import { baseStyles, colors, typography, spacing, cornerStyles } from '../styles.js';
import { SlideHeader, SlideLogo } from '../components/common.js';
import { Card, HighlightBox } from '../components/layouts.js';

// Slide 2: Technology Stack & Capabilities
export function createSlide2() {
    return React.createElement(Page, {
        size: "LETTER",
        orientation: "landscape",
        style: baseStyles.page
    },
        React.createElement(SlideHeader, {
            title: "Cross-Platform AI Agent Expertise",
            subtitle: "Multi-framework capabilities for any enterprise technology stack"
        }),

        React.createElement(View, { style: { flex: 1, paddingLeft: spacing.xl, paddingRight: spacing.xl, paddingBottom: spacing.xl, justifyContent: 'center', alignItems: 'center' } },
            
            // Technology categories
            React.createElement(View, { style: { maxWidth: 800, alignSelf: 'center' } },
                
                // Google Technologies
                React.createElement(HighlightBox, {
                    backgroundColor: colors.californiaBlue,
                    padding: spacing.lg,
                    cornerStyle: cornerStyles.primary,
                    style: { marginBottom: spacing.md }
                },
                    React.createElement(Text, { style: { fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: spacing.sm } }, "Google Technologies"),
                    React.createElement(Text, { style: { fontSize: 16, color: 'white', textAlign: 'center', lineHeight: 1.4 } }, "Vertex AI • Agent Development Kit • Gemini 2.5 • Agent-to-Agent Protocol")
                ),

                // Microsoft Technologies
                React.createElement(HighlightBox, {
                    backgroundColor: colors.coralGreen,
                    padding: spacing.lg,
                    cornerStyle: cornerStyles.secondary,
                    style: { marginBottom: spacing.md }
                },
                    React.createElement(Text, { style: { fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: spacing.sm } }, "Microsoft Technologies"),
                    React.createElement(Text, { style: { fontSize: 16, color: 'white', textAlign: 'center', lineHeight: 1.4 } }, "AutoGen • Semantic Kernel • Azure AI • Copilot Studio")
                ),

                // Open Source & Core
                React.createElement(HighlightBox, {
                    backgroundColor: colors.peach,
                    padding: spacing.lg,
                    cornerStyle: cornerStyles.accent,
                    style: { marginBottom: spacing.lg }
                },
                    React.createElement(Text, { style: { fontSize: 20, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: spacing.sm } }, "Open Source & Core"),
                    React.createElement(Text, { style: { fontSize: 16, color: 'white', textAlign: 'center', lineHeight: 1.4 } }, "LangGraph • CrewAI • Model Context Protocol • Python • TypeScript")
                )
            ),

            // Source attribution
            React.createElement(View, { style: { marginTop: spacing.lg, alignItems: 'center' } },
                React.createElement(Text, { style: { fontSize: 12, color: colors.textMuted, textAlign: 'center' } }, "Source: Industry framework analysis 2024-2025")
            )
        ),

        React.createElement(SlideLogo)
    );
}