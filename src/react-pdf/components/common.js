import React from 'react';
import { View, Text, Image } from '@react-pdf/renderer';
import { colors, typography, spacing } from '../styles.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Logo path
export const logoPath = path.resolve(__dirname, '../../../assets/images/image.png');

// Common slide header component
export function SlideHeader({ title, subtitle }) {
    return React.createElement(View, { style: { textAlign: 'center', marginTop: spacing.md, marginBottom: spacing.sm } },
        React.createElement(Text, { style: { fontSize: typography.slideTitle, fontWeight: 'bold', marginBottom: spacing.xs, color: colors.californiaBlue } }, title),
        subtitle && React.createElement(Text, { style: { fontSize: typography.bodyMedium, color: colors.textMuted } }, subtitle)
    );
}

// Common slide logo component
export function SlideLogo({ size = 80, maxHeight = 20 }) {
    return React.createElement(View, { style: { position: 'absolute', bottom: 20, right: 20 } },
        React.createElement(Image, { 
            src: logoPath, 
            style: { width: size, height: 'auto', maxHeight: maxHeight } 
        })
    );
}

// Large centered logo component
export function CenteredLogo({ size = 400, maxHeight = 80 }) {
    return React.createElement(View, { style: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: spacing.xl } },
        React.createElement(Image, { 
            src: logoPath, 
            style: { width: size, height: 'auto', maxHeight: maxHeight } 
        })
    );
}