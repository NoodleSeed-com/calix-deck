import React from 'react';
import { renderToBuffer, Document, Page, Text, View, Image, Svg, Path, Circle, Line, Polyline } from '@react-pdf/renderer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { baseStyles, colors, typography, cornerStyles, spacing } from './styles.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Logo path
const logoPath = path.resolve(__dirname, '../../assets/images/image.png');

// Lucide-based icon components optimized for React PDF
function TrendingUpIcon({ size = 24, color = colors.californiaBlue }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24" },
        React.createElement(Polyline, { 
            points: "22,7 13.5,15.5 8.5,10.5 2,17", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        }),
        React.createElement(Polyline, { 
            points: "16,7 22,7 22,13", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        })
    );
}

function ClockIcon({ size = 24, color = colors.textMuted }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24" },
        React.createElement(Circle, { 
            cx: "12", 
            cy: "12", 
            r: "10", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2" 
        }),
        React.createElement(Polyline, { 
            points: "12,6 12,12 16,14", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        })
    );
}

function CheckIcon({ size = 24, color = colors.success }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24" },
        React.createElement(Polyline, { 
            points: "20,6 9,17 4,12", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        })
    );
}

function WrenchIcon({ size = 24, color = colors.secondary }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24" },
        React.createElement(Path, { 
            d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        })
    );
}

function CoinsIcon({ size = 24, color = colors.primary }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24" },
        React.createElement(Circle, { 
            cx: "8", 
            cy: "8", 
            r: "6", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2" 
        }),
        React.createElement(Path, { 
            d: "M18.09 10.37A6 6 0 1 1 10.34 18", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        }),
        React.createElement(Path, { 
            d: "M7 6h1v4", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        }),
        React.createElement(Path, { 
            d: "M16.71 13.88A3 3 0 0 0 16.09 13.5", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        })
    );
}

function BrainIcon({ size = 24, color = colors.californiaBlue }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24" },
        React.createElement(Path, { 
            d: "M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        }),
        React.createElement(Path, { 
            d: "M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        })
    );
}

function RocketIcon({ size = 24, color = colors.coralGreen }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24" },
        React.createElement(Path, { 
            d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        }),
        React.createElement(Path, { 
            d: "M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        }),
        React.createElement(Path, { 
            d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        }),
        React.createElement(Path, { 
            d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        })
    );
}

function DollarIcon({ size = 24, color = colors.californiaBlue }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24" },
        React.createElement(Line, { 
            x1: "12", 
            y1: "1", 
            x2: "12", 
            y2: "23", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round" 
        }),
        React.createElement(Path, { 
            d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        })
    );
}

function EyeOffIcon({ size = 24, color = colors.textMuted }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24" },
        React.createElement(Path, { 
            d: "M9.88 9.88a3 3 0 1 0 4.24 4.24", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        }),
        React.createElement(Path, { 
            d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        }),
        React.createElement(Path, { 
            d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        }),
        React.createElement(Line, { 
            x1: "2", 
            y1: "2", 
            x2: "22", 
            y2: "22", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round" 
        })
    );
}

function UsersIcon({ size = 24, color = colors.californiaBlue }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24" },
        React.createElement(Path, { 
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        }),
        React.createElement(Circle, { 
            cx: "9", 
            cy: "7", 
            r: "4", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2" 
        }),
        React.createElement(Path, { 
            d: "M22 21v-2a4 4 0 0 0-3-3.87", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        }),
        React.createElement(Path, { 
            d: "M16 3.13a4 4 0 0 1 0 7.75", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        })
    );
}

function TargetIcon({ size = 24, color = colors.californiaBlue }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24" },
        React.createElement(Circle, { 
            cx: "12", 
            cy: "12", 
            r: "10", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2" 
        }),
        React.createElement(Circle, { 
            cx: "12", 
            cy: "12", 
            r: "6", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2" 
        }),
        React.createElement(Circle, { 
            cx: "12", 
            cy: "12", 
            r: "2", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2" 
        })
    );
}

function EyeIcon({ size = 24, color = colors.californiaBlue }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24" },
        React.createElement(Path, { 
            d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        }),
        React.createElement(Circle, { 
            cx: "12", 
            cy: "12", 
            r: "3", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2" 
        })
    );
}

function ZapIcon({ size = 24, color = colors.coralGreen }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24" },
        React.createElement(Path, { 
            d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        })
    );
}

function BarChartIcon({ size = 24, color = colors.californiaBlue }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24" },
        React.createElement(Line, { 
            x1: "12", 
            y1: "20", 
            x2: "12", 
            y2: "10", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round" 
        }),
        React.createElement(Line, { 
            x1: "18", 
            y1: "20", 
            x2: "18", 
            y2: "4", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round" 
        }),
        React.createElement(Line, { 
            x1: "6", 
            y1: "20", 
            x2: "6", 
            y2: "16", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round" 
        })
    );
}

function LightbulbIcon({ size = 24, color = colors.tertiary }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24" },
        React.createElement(Path, { 
            d: "M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1z", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        }),
        React.createElement(Path, { 
            d: "M12 17.5V14c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        }),
        React.createElement(Path, { 
            d: "M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        })
    );
}

function ShieldIcon({ size = 24, color = colors.success }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24" },
        React.createElement(Path, { 
            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        })
    );
}

function FactoryIcon({ size = 24, color = colors.secondary }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24" },
        React.createElement(Path, { 
            d: "M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        }),
        React.createElement(Path, { 
            d: "M17 18h1", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        }),
        React.createElement(Path, { 
            d: "M12 18h1", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        }),
        React.createElement(Path, { 
            d: "M7 18h1", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        })
    );
}

function HandshakeIcon({ size = 24, color = colors.primary }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24" },
        React.createElement(Path, { 
            d: "m11 17 2 2a1 1 0 1 0 3-3", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        }),
        React.createElement(Path, { 
            d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        }),
        React.createElement(Path, { 
            d: "m21 3 1 11h-2", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        }),
        React.createElement(Path, { 
            d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        }),
        React.createElement(Path, { 
            d: "M3 4h8.5l2 2.5-1.5 1.5L9 5", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        })
    );
}

function AlertTriangleIcon({ size = 24, color = colors.red }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24" },
        React.createElement(Path, { 
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z", 
            fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round"
        }),
        React.createElement(Path, { 
            d: "M12 9v4", 
            fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round"
        }),
        React.createElement(Path, { 
            d: "M12 17h.01", 
            fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round"
        })
    );
}

function CodeIcon({ size = 24, color = colors.californiaBlue }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24" },
        React.createElement(Polyline, { 
            points: "16,18 22,12 16,6", 
            fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round"
        }),
        React.createElement(Polyline, { 
            points: "8,6 2,12 8,18", 
            fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round"
        })
    );
}

function ShieldCheckIcon({ size = 24, color = colors.peach }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24" },
        React.createElement(Path, { 
            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", 
            fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round"
        }),
        React.createElement(Path, { 
            d: "m9 12 2 2 4-4", 
            fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round"
        })
    );
}

function UserIcon({ size = 24, color = colors.californiaBlue }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24" },
        React.createElement(Path, { 
            d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2", 
            fill: "none", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round"
        }),
        React.createElement(Circle, { 
            cx: "12", cy: "7", r: "4", 
            fill: "none", stroke: color, strokeWidth: "2"
        })
    );
}

// Simple slide creation functions - content guaranteed to fit on one page
// Slide 1: The Investment Decision
function createSlide1() {
    return React.createElement(Page, {
        size: "LETTER",
        orientation: "landscape",
        style: baseStyles.page
    },
        React.createElement(View, { style: { textAlign: 'center', marginTop: spacing.xl, marginBottom: spacing.lg } },
            React.createElement(View, { style: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: spacing.md } },
                React.createElement(Image, { 
                    src: logoPath, 
                    style: { width: 360, height: 'auto', maxHeight: 72 } 
                })
            ),
            React.createElement(Text, { style: { fontSize: typography.sectionTitle, color: colors.textMuted } }, "Business solutions delivered instantly, no development needed")
        ),

        React.createElement(View, { style: { flex: 1, justifyContent: 'center' } },
            
            React.createElement(View, { style: { flexDirection: 'row', gap: spacing.md, marginBottom: spacing.lg } },
                React.createElement(View, { 
                    style: { 
                        flex: 1, 
                        padding: spacing.md, 
                        backgroundColor: colors.backgroundGreen, 
                        textAlign: 'center',
                        ...cornerStyles.accent 
                    } 
                },
                    React.createElement(Text, { style: { fontSize: typography.bodyLarge, fontWeight: 'bold', color: colors.coralGreen, marginBottom: spacing.xs, textAlign: 'center' } }, "Proven Traction"),
                    React.createElement(Text, { style: { fontSize: typography.slideTitle, fontWeight: 'bold', color: colors.coralGreen, marginBottom: spacing.xs, textAlign: 'center' } }, "$120K"),
                    React.createElement(Text, { style: { fontSize: typography.labelMedium, marginBottom: spacing.xs, textAlign: 'center' } }, "Contracted ARR"),
                    React.createElement(Text, { style: { fontSize: typography.labelSmall, marginBottom: spacing.xs, textAlign: 'center', lineHeight: 1.2 } }, "3 signed customers\n3-year contracts"),
                    React.createElement(Text, { style: { fontSize: typography.labelSmall, fontWeight: 'bold', color: colors.coralGreen, textAlign: 'center' } }, "Oct 2024 → May 2025")
                ),
                React.createElement(View, { 
                    style: { 
                        flex: 1, 
                        padding: spacing.md, 
                        backgroundColor: colors.backgroundPeach, 
                        textAlign: 'center',
                        ...cornerStyles.secondary 
                    } 
                },
                    React.createElement(Text, { style: { fontSize: typography.bodyLarge, fontWeight: 'bold', color: colors.peach, marginBottom: spacing.xs, textAlign: 'center' } }, "The Opportunity"),
                    React.createElement(Text, { style: { fontSize: typography.slideTitle, fontWeight: 'bold', color: colors.peach, marginBottom: spacing.xs, textAlign: 'center' } }, "$2.2T"),
                    React.createElement(Text, { style: { fontSize: typography.labelMedium, marginBottom: spacing.xs, textAlign: 'center' } }, "Software Market"),
                    React.createElement(Text, { style: { fontSize: typography.labelSmall, marginBottom: spacing.xs, textAlign: 'center', lineHeight: 1.2 } }, "Anyone can get custom\nsoftware & agents"),
                    React.createElement(Text, { style: { fontSize: typography.labelSmall, textAlign: 'center', lineHeight: 1.2 } }, "Eliminates cost, risk,\ntime, talent barriers")
                ),
                React.createElement(View, { 
                    style: { 
                        flex: 1, 
                        padding: spacing.md, 
                        backgroundColor: colors.backgroundLight, 
                        textAlign: 'center',
                        ...cornerStyles.accentReverse 
                    } 
                },
                    React.createElement(Text, { style: { fontSize: typography.bodyLarge, fontWeight: 'bold', color: colors.californiaBlue, marginBottom: spacing.xs, textAlign: 'center' } }, "The Ask"),
                    React.createElement(Text, { style: { fontSize: typography.slideTitle, fontWeight: 'bold', color: colors.californiaBlue, marginBottom: spacing.xs, textAlign: 'center' } }, "$3M USD"),
                    React.createElement(Text, { style: { fontSize: typography.labelMedium, marginBottom: spacing.xs, textAlign: 'center' } }, "Seed Round"),
                    React.createElement(Text, { style: { fontSize: typography.labelSmall, marginBottom: spacing.xs, textAlign: 'center', lineHeight: 1.2 } }, "Scale from 3 to\n30 customers"),
                    React.createElement(Text, { style: { fontSize: typography.labelSmall, textAlign: 'center' } }, "$1M ARR in 12 months")
                )
            ),

            React.createElement(View, { 
                style: { 
                    backgroundColor: colors.californiaBlue, 
                    padding: spacing.md, 
                    textAlign: 'center',
                    ...cornerStyles.primary 
                } 
            },
                React.createElement(Text, { style: { fontSize: typography.bodyLarge, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: spacing.xs } }, "Join Us Now"),
                React.createElement(Text, { style: { fontSize: typography.bodyMedium, color: 'white', textAlign: 'center' } }, "fahd@noodleseed.com")
            )
        )
    );
}

// Slide 2: The Opportunity  
function createSlide2() {
    return React.createElement(Page, {
        size: "LETTER",
        orientation: "landscape",
        style: baseStyles.page
    },
        React.createElement(View, { style: { textAlign: 'center', marginTop: spacing.xl, marginBottom: spacing.lg } },
            React.createElement(Text, { style: { fontSize: typography.slideTitle, fontWeight: 'bold', marginBottom: spacing.sm, color: colors.californiaBlue } }, "The Opportunity"),
            React.createElement(Text, { style: { fontSize: typography.bodyLarge, color: colors.textMuted } }, "The transformation happening in software development")
        ),

        React.createElement(View, { style: { flex: 1, justifyContent: 'center' } },
            
            // Market breakdown
            React.createElement(View, { style: { flexDirection: 'row', gap: spacing.md, marginBottom: spacing.lg } },
                // Total addressable market
                React.createElement(View, { 
                    style: { 
                        flex: 1, 
                        backgroundColor: colors.backgroundLight, 
                        padding: spacing.md, 
                        textAlign: 'center',
                        ...cornerStyles.accent 
                    } 
                },
                    React.createElement(Text, { style: { fontSize: typography.labelLarge, color: colors.textMuted, marginBottom: spacing.sm, textAlign: 'center' } }, "Total Addressable Market"),
                    React.createElement(Text, { style: { fontSize: 48, fontWeight: 'bold', color: colors.californiaBlue, textAlign: 'center', marginBottom: spacing.xs } }, "$2.2T"),
                    React.createElement(Text, { style: { fontSize: typography.labelMedium, color: colors.textMuted, textAlign: 'center' } }, "Global Software & Agents by 2034")
                ),
                
                // Immediate opportunity
                React.createElement(View, { 
                    style: { 
                        flex: 2, 
                        backgroundColor: colors.backgroundGreen, 
                        padding: spacing.md,
                        ...cornerStyles.primary 
                    } 
                },
                    React.createElement(Text, { style: { fontSize: typography.labelLarge, color: colors.textMuted, marginBottom: spacing.sm, textAlign: 'center' } }, "Immediate Opportunity"),
                    React.createElement(Text, { style: { fontSize: 48, fontWeight: 'bold', color: colors.coralGreen, textAlign: 'center', marginBottom: spacing.sm } }, "$150B"),
                    React.createElement(Text, { style: { fontSize: typography.labelLarge, fontWeight: 'bold', textAlign: 'center', marginBottom: spacing.xs } }, "Small Business Custom Software"),
                    React.createElement(View, { style: { flexDirection: 'row', gap: spacing.sm, justifyContent: 'center' } },
                        React.createElement(View, { style: { flex: 1 } },
                            React.createElement(Text, { style: { fontSize: typography.labelMedium, textAlign: 'center', marginBottom: spacing.xs } }, "• 33M US small businesses"),
                            React.createElement(Text, { style: { fontSize: typography.labelMedium, textAlign: 'center' } }, "• $30-100K software needs")
                        ),
                        React.createElement(View, { style: { flex: 1 } },
                            React.createElement(Text, { style: { fontSize: typography.labelMedium, textAlign: 'center', marginBottom: spacing.xs } }, "• Currently underserved"),
                            React.createElement(Text, { style: { fontSize: typography.labelMedium, textAlign: 'center' } }, "• Perfect for our model")
                        )
                    )
                )
            ),

            // Our wedge
            React.createElement(View, { 
                style: { 
                    backgroundColor: colors.backgroundPeach, 
                    padding: spacing.md, 
                    marginBottom: spacing.md,
                    ...cornerStyles.secondary 
                } 
            },
                React.createElement(Text, { style: { fontSize: typography.labelLarge, fontWeight: 'bold', color: colors.peach, marginBottom: spacing.sm, textAlign: 'center' } }, "Our Initial Wedge: $1B"),
                React.createElement(View, { style: { flexDirection: 'row', gap: spacing.md } },
                    React.createElement(View, { style: { flex: 1, textAlign: 'center' } },
                        React.createElement(Text, { style: { fontSize: typography.sectionTitle, fontWeight: 'bold', color: colors.peach, marginBottom: spacing.xs } }, "10K"),
                        React.createElement(Text, { style: { fontSize: typography.labelMedium, marginBottom: spacing.xs } }, "Target businesses"),
                        React.createElement(Text, { style: { fontSize: typography.labelSmall, color: colors.textMuted } }, "Operations-heavy SMBs")
                    ),
                    React.createElement(View, { style: { flex: 1, textAlign: 'center' } },
                        React.createElement(Text, { style: { fontSize: typography.sectionTitle, fontWeight: 'bold', color: colors.peach, marginBottom: spacing.xs } }, "$100K"),
                        React.createElement(Text, { style: { fontSize: typography.labelMedium, marginBottom: spacing.xs } }, "Average contract value"),
                        React.createElement(Text, { style: { fontSize: typography.labelSmall, color: colors.textMuted } }, "Proven with customers")
                    ),
                    React.createElement(View, { style: { flex: 1, textAlign: 'center' } },
                        React.createElement(Text, { style: { fontSize: typography.sectionTitle, fontWeight: 'bold', color: colors.peach, marginBottom: spacing.xs } }, "1%"),
                        React.createElement(Text, { style: { fontSize: typography.labelMedium, marginBottom: spacing.xs } }, "Market capture"),
                        React.createElement(Text, { style: { fontSize: typography.labelSmall, color: colors.textMuted } }, "Achievable in 5 years")
                    )
                )
            ),

            // Why now
            React.createElement(View, { 
                style: { 
                    backgroundColor: colors.californiaBlue, 
                    padding: spacing.md, 
                    textAlign: 'center',
                    ...cornerStyles.accentReverse 
                } 
            },
                React.createElement(Text, { style: { fontSize: typography.bodyLarge, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: spacing.xs } }, "Why This Market Is Ready Now"),
                React.createElement(Text, { style: { fontSize: typography.bodyMedium, color: 'white', textAlign: 'center' } }, "AI makes custom software profitable at small business scale for the first time")
            )
        ),

        // Logo in bottom right
        React.createElement(View, { style: { position: 'absolute', bottom: 20, right: 20 } },
            React.createElement(Image, { 
                src: logoPath, 
                style: { width: 80, height: 'auto', maxHeight: 20 } 
            })
        )
    );
}

// Slide 3: The Problem
function createSlide3() {
    return React.createElement(Page, {
        size: "LETTER",
        orientation: "landscape",
        style: baseStyles.page
    },
        React.createElement(View, { style: { textAlign: 'center', marginTop: spacing.xl, marginBottom: spacing.lg } },
            React.createElement(Text, { style: { fontSize: typography.slideTitle, fontWeight: 'bold', marginBottom: spacing.sm, color: colors.californiaBlue } }, "The Problem"),
            React.createElement(Text, { style: { fontSize: typography.bodyLarge, color: colors.textMuted } }, "Four massive blockers prevent businesses from getting working systems")
        ),

        React.createElement(View, { style: { flex: 1, justifyContent: 'center' } },
            // Four problems in a row
            React.createElement(View, { style: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.lg } },
                React.createElement(View, { 
                    style: { 
                        flex: 1, 
                        backgroundColor: colors.backgroundLight, 
                        padding: spacing.md, 
                        ...cornerStyles.small 
                    } 
                },
                    React.createElement(View, { style: { flexDirection: 'row', alignItems: 'center', marginBottom: spacing.xs } },
                        React.createElement(DollarIcon, { size: 20, color: colors.red }),
                        React.createElement(Text, { style: { fontSize: typography.labelLarge, fontWeight: 'bold', color: colors.red, marginLeft: spacing.xs } }, "Cost")
                    ),
                    React.createElement(Text, { style: { fontSize: typography.labelMedium } }, "$100K-$500K minimum with no guarantee")
                ),
                React.createElement(View, { 
                    style: { 
                        flex: 1, 
                        backgroundColor: colors.backgroundLight, 
                        padding: spacing.md, 
                        ...cornerStyles.subtle 
                    } 
                },
                    React.createElement(View, { style: { flexDirection: 'row', alignItems: 'center', marginBottom: spacing.xs } },
                        React.createElement(AlertTriangleIcon, { size: 20, color: colors.red }),
                        React.createElement(Text, { style: { fontSize: typography.labelLarge, fontWeight: 'bold', color: colors.red, marginLeft: spacing.xs } }, "Risk")
                    ),
                    React.createElement(Text, { style: { fontSize: typography.labelMedium } }, "No ROI visibility before massive commitment")
                ),
                React.createElement(View, { 
                    style: { 
                        flex: 1, 
                        backgroundColor: colors.backgroundLight, 
                        padding: spacing.md, 
                        ...cornerStyles.secondary 
                    } 
                },
                    React.createElement(View, { style: { flexDirection: 'row', alignItems: 'center', marginBottom: spacing.xs } },
                        React.createElement(ClockIcon, { size: 20, color: colors.red }),
                        React.createElement(Text, { style: { fontSize: typography.labelLarge, fontWeight: 'bold', color: colors.red, marginLeft: spacing.xs } }, "Time")
                    ),
                    React.createElement(Text, { style: { fontSize: typography.labelMedium } }, "6-18 months minimum delivery")
                ),
                React.createElement(View, { 
                    style: { 
                        flex: 1, 
                        backgroundColor: colors.backgroundLight, 
                        padding: spacing.md, 
                        ...cornerStyles.accent 
                    } 
                },
                    React.createElement(View, { style: { flexDirection: 'row', alignItems: 'center', marginBottom: spacing.xs } },
                        React.createElement(UserIcon, { size: 20, color: colors.red }),
                        React.createElement(Text, { style: { fontSize: typography.labelLarge, fontWeight: 'bold', color: colors.red, marginLeft: spacing.xs } }, "Talent")
                    ),
                    React.createElement(Text, { style: { fontSize: typography.labelMedium } }, "Can't attract developers who know AI tools")
                )
            ),

            // Middle section
            React.createElement(View, { 
                style: { 
                    backgroundColor: colors.backgroundPeach, 
                    padding: spacing.lg, 
                    marginBottom: spacing.lg,
                    ...cornerStyles.accentReverse 
                } 
            },
                React.createElement(Text, { style: { fontSize: typography.bodyLarge, fontWeight: 'bold', color: colors.peach, marginBottom: spacing.sm, textAlign: 'center' } }, "Expensive consultants and slow IT projects aren't the answer"),
                React.createElement(Text, { style: { fontSize: typography.bodyMedium, textAlign: 'center', marginBottom: spacing.xs } }, "Traditional consulting firms charge massive fees with uncertain outcomes"),
                React.createElement(Text, { style: { fontSize: typography.bodyMedium, textAlign: 'center' } }, "Business owners need working systems, not technical complexity")
            ),

            // Bottom CTA
            React.createElement(View, { 
                style: { 
                    backgroundColor: colors.californiaBlue, 
                    padding: spacing.lg, 
                    textAlign: 'center',
                    ...cornerStyles.primary 
                } 
            },
                React.createElement(Text, { style: { fontSize: typography.bodyLarge, fontWeight: 'bold', color: 'white', textAlign: 'center' } }, "Businesses lose money waiting for solutions that actually solve their problems")
            )
        ),

        // Logo in bottom right
        React.createElement(View, { style: { position: 'absolute', bottom: 20, right: 20 } },
            React.createElement(Image, { 
                src: logoPath, 
                style: { width: 80, height: 'auto', maxHeight: 20 } 
            })
        )
    );
}

// Slide 4: Competition
function createSlide4() {
    return React.createElement(Page, {
        size: "LETTER",
        orientation: "landscape",
        style: baseStyles.page
    },
        React.createElement(View, { style: { textAlign: 'center', marginTop: spacing.md, marginBottom: spacing.sm } },
            React.createElement(Text, { style: { fontSize: typography.slideTitle, fontWeight: 'bold', marginBottom: spacing.xs, color: colors.californiaBlue } }, "The Competitive Landscape"),
            React.createElement(Text, { style: { fontSize: typography.bodyMedium, color: colors.textMuted } }, "Everyone else makes tools. We deliver solutions.")
        ),

        React.createElement(View, { style: { flex: 1, paddingLeft: spacing.lg, paddingRight: spacing.lg, paddingBottom: spacing.xs, justifyContent: 'center' } },
            
            // Three categories of competitors
            React.createElement(View, { style: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.md } },
                React.createElement(View, { 
                    style: { 
                        flex: 1, 
                        backgroundColor: '#FFF8F8', 
                        padding: spacing.sm,
                        ...cornerStyles.small 
                    } 
                },
                    React.createElement(Text, { style: { fontSize: typography.labelLarge, fontWeight: 'bold', color: colors.red, marginBottom: spacing.xs, textAlign: 'center' } }, "AI Code Generators"),
                    React.createElement(Text, { style: { fontSize: typography.labelSmall, marginBottom: spacing.xs, textAlign: 'center' } }, "Lovable, v0, Cursor, Devin"),
                    React.createElement(Text, { style: { fontSize: typography.labelSmall, fontWeight: 'bold', color: colors.red, textAlign: 'center' } }, "Target: Developers"),
                    React.createElement(Text, { style: { fontSize: typography.labelSmall, textAlign: 'center' } }, "Output: Code to manage")
                ),
                React.createElement(View, { 
                    style: { 
                        flex: 1, 
                        backgroundColor: '#FFF8F8', 
                        padding: spacing.sm,
                        ...cornerStyles.secondary 
                    } 
                },
                    React.createElement(Text, { style: { fontSize: typography.labelLarge, fontWeight: 'bold', color: colors.red, marginBottom: spacing.xs, textAlign: 'center' } }, "No-Code Platforms"),
                    React.createElement(Text, { style: { fontSize: typography.labelSmall, marginBottom: spacing.xs, textAlign: 'center' } }, "OutSystems, Bubble, Retool"),
                    React.createElement(Text, { style: { fontSize: typography.labelSmall, fontWeight: 'bold', color: colors.red, textAlign: 'center' } }, "Target: Power Users"),
                    React.createElement(Text, { style: { fontSize: typography.labelSmall, textAlign: 'center' } }, "Output: Apps to build")
                ),
                React.createElement(View, { 
                    style: { 
                        flex: 1, 
                        backgroundColor: '#FFF8F8', 
                        padding: spacing.sm,
                        ...cornerStyles.subtle 
                    } 
                },
                    React.createElement(Text, { style: { fontSize: typography.labelLarge, fontWeight: 'bold', color: colors.red, marginBottom: spacing.xs, textAlign: 'center' } }, "Custom Dev Agencies"),
                    React.createElement(Text, { style: { fontSize: typography.labelSmall, marginBottom: spacing.xs, textAlign: 'center' } }, "Traditional consulting firms"),
                    React.createElement(Text, { style: { fontSize: typography.labelSmall, fontWeight: 'bold', color: colors.red, textAlign: 'center' } }, "Target: Enterprises"),
                    React.createElement(Text, { style: { fontSize: typography.labelSmall, textAlign: 'center' } }, "Output: $500K+ projects")
                )
            ),

            // The problem with competitors
            React.createElement(View, { 
                style: { 
                    backgroundColor: colors.backgroundPeach, 
                    padding: spacing.sm, 
                    marginBottom: spacing.sm,
                    ...cornerStyles.accent 
                } 
            },
                React.createElement(Text, { style: { fontSize: typography.bodyMedium, fontWeight: 'bold', color: colors.peach, textAlign: 'center', marginBottom: spacing.xs } }, "The Problem with All Current Solutions"),
                React.createElement(Text, { style: { fontSize: typography.labelMedium, textAlign: 'center', lineHeight: 1.3 } }, "Business owners want working solutions, not tools to learn, code to manage, or $500K projects")
            ),

            // Noodle Seed difference (Primary container)
            React.createElement(View, { 
                style: { 
                    backgroundColor: colors.californiaBlue, 
                    padding: spacing.md, 
                    marginBottom: spacing.sm, 
                    textAlign: 'center',
                    ...cornerStyles.primary 
                } 
            },
                React.createElement(Text, { style: { fontSize: typography.sectionTitle, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: spacing.sm } }, "Noodle Seed: Working Business Systems as a Service"),
                React.createElement(View, { style: { flexDirection: 'row', gap: spacing.md, justifyContent: 'center' } },
                    React.createElement(View, { style: { flex: 1 } },
                        React.createElement(Text, { style: { fontSize: typography.labelLarge, color: 'white', fontWeight: 'bold', marginBottom: spacing.xs } }, "Target: Business Owners"),
                        React.createElement(Text, { style: { fontSize: typography.labelMedium, color: 'white' } }, "Who need systems that work")
                    ),
                    React.createElement(View, { style: { flex: 1 } },
                        React.createElement(Text, { style: { fontSize: typography.labelLarge, color: 'white', fontWeight: 'bold', marginBottom: spacing.xs } }, "Output: Ready Systems"),
                        React.createElement(Text, { style: { fontSize: typography.labelMedium, color: 'white' } }, "No code, no building, no learning")
                    ),
                    React.createElement(View, { style: { flex: 1 } },
                        React.createElement(Text, { style: { fontSize: typography.labelLarge, color: 'white', fontWeight: 'bold', marginBottom: spacing.xs } }, "Pricing: Usage-Based"),
                        React.createElement(Text, { style: { fontSize: typography.labelMedium, color: 'white' } }, "Pay for value delivered")
                    )
                )
            ),

            // Market gap
            React.createElement(View, { 
                style: { 
                    backgroundColor: colors.backgroundGreen, 
                    padding: spacing.sm, 
                    textAlign: 'center',
                    ...cornerStyles.accentReverse 
                } 
            },
                React.createElement(Text, { style: { fontSize: typography.bodyMedium, fontWeight: 'bold', color: colors.coralGreen, textAlign: 'center', marginBottom: spacing.xs } }, "We Fill the Market Gap"),
                React.createElement(Text, { style: { fontSize: typography.labelMedium, textAlign: 'center', lineHeight: 1.3 } }, "No one else sells working business systems to SMBs at product speed and price")
            )
        ),

        // Logo in bottom right
        React.createElement(View, { style: { position: 'absolute', bottom: 20, right: 20 } },
            React.createElement(Image, { 
                src: logoPath, 
                style: { width: 80, height: 'auto', maxHeight: 20 } 
            })
        )
    );
}

// Slide 5: The Solution
function createSlide5() {
    return React.createElement(Page, {
        size: "LETTER",
        orientation: "landscape",
        style: baseStyles.page
    },
        React.createElement(View, { style: { textAlign: 'center', marginTop: spacing.xl, marginBottom: spacing.lg } },
            React.createElement(Text, { style: { fontSize: typography.slideTitle, fontWeight: 'bold', marginBottom: spacing.sm, color: colors.californiaBlue } }, "The Solution"),
            React.createElement(Text, { style: { fontSize: typography.bodyLarge, color: colors.textMuted } }, "Working business systems at product speed")
        ),

        React.createElement(View, { style: { flex: 1, justifyContent: 'center' } },
            React.createElement(View, { 
                style: { 
                    backgroundColor: colors.backgroundLight, 
                    padding: spacing.lg, 
                    marginBottom: spacing.lg,
                    ...cornerStyles.accent 
                } 
            },
                React.createElement(Text, { style: { fontSize: typography.bodyLarge, fontWeight: 'bold', color: colors.californiaBlue, marginBottom: spacing.md, textAlign: 'center' } }, "The Choice Today"),
                React.createElement(View, { style: { flexDirection: 'row', gap: spacing.md } },
                    React.createElement(View, { 
                        style: { 
                            flex: 1, 
                            backgroundColor: colors.backgroundPeach, 
                            padding: spacing.md, 
                            textAlign: 'center',
                            ...cornerStyles.small 
                        } 
                    },
                        React.createElement(Text, { style: { fontSize: typography.bodyMedium, fontWeight: 'bold', color: colors.peach, marginBottom: spacing.sm } }, "Off-the-Shelf"),
                        React.createElement(Text, { style: { fontSize: typography.bodySmall, lineHeight: 1.4 } }, "Adapt your business + duct tape")
                    ),
                    React.createElement(View, { 
                        style: { 
                            flex: 1, 
                            backgroundColor: colors.backgroundPeach, 
                            padding: spacing.md, 
                            textAlign: 'center',
                            ...cornerStyles.subtle 
                        } 
                    },
                        React.createElement(Text, { style: { fontSize: typography.bodyMedium, fontWeight: 'bold', color: colors.peach, marginBottom: spacing.sm } }, "Custom Build"),
                        React.createElement(Text, { style: { fontSize: typography.bodySmall, lineHeight: 1.4 } }, "Huge cost, risk & time")
                    )
                )
            ),

            React.createElement(View, { 
                style: { 
                    backgroundColor: colors.californiaBlue, 
                    padding: spacing.lg, 
                    marginBottom: spacing.lg, 
                    textAlign: 'center',
                    ...cornerStyles.primary 
                } 
            },
                React.createElement(Text, { style: { fontSize: typography.sectionTitle, fontWeight: 'bold', color: 'white', textAlign: 'center' } }, "Working business systems, delivered for you, at product price & speed")
            ),

            React.createElement(View, { style: { flexDirection: 'row', gap: spacing.sm } },
                React.createElement(View, { 
                    style: { 
                        flex: 1, 
                        backgroundColor: colors.backgroundGreen, 
                        padding: spacing.md, 
                        textAlign: 'center',
                        ...cornerStyles.small 
                    } 
                },
                    React.createElement(Text, { style: { fontSize: typography.labelLarge, fontWeight: 'bold', color: colors.coralGreen, marginBottom: spacing.xs } }, "Pay for Results"),
                    React.createElement(Text, { style: { fontSize: typography.labelMedium, lineHeight: 1.3 } }, "Not consulting")
                ),
                React.createElement(View, { 
                    style: { 
                        flex: 1, 
                        backgroundColor: colors.backgroundPeach, 
                        padding: spacing.md, 
                        textAlign: 'center',
                        ...cornerStyles.secondary 
                    } 
                },
                    React.createElement(Text, { style: { fontSize: typography.labelLarge, fontWeight: 'bold', color: colors.peach, marginBottom: spacing.xs } }, "See It First"),
                    React.createElement(Text, { style: { fontSize: typography.labelMedium, lineHeight: 1.3 } }, "Before you pay")
                ),
                React.createElement(View, { 
                    style: { 
                        flex: 1, 
                        backgroundColor: colors.backgroundLight, 
                        padding: spacing.md, 
                        textAlign: 'center',
                        ...cornerStyles.subtle 
                    } 
                },
                    React.createElement(Text, { style: { fontSize: typography.labelLarge, fontWeight: 'bold', color: colors.californiaBlue, marginBottom: spacing.xs } }, "Same Day"),
                    React.createElement(Text, { style: { fontSize: typography.labelMedium, lineHeight: 1.3 } }, "Delivery")
                ),
                React.createElement(View, { 
                    style: { 
                        flex: 1, 
                        backgroundColor: colors.backgroundLight, 
                        padding: spacing.md, 
                        textAlign: 'center',
                        ...cornerStyles.accentReverse 
                    } 
                },
                    React.createElement(Text, { style: { fontSize: typography.labelLarge, fontWeight: 'bold', color: colors.californiaBlue, marginBottom: spacing.xs } }, "Operations Team"),
                    React.createElement(Text, { style: { fontSize: typography.labelMedium, lineHeight: 1.3 } }, "We handle everything")
                )
            )
        ),

        // Logo in bottom right
        React.createElement(View, { style: { position: 'absolute', bottom: 20, right: 20 } },
            React.createElement(Image, { 
                src: logoPath, 
                style: { width: 80, height: 'auto', maxHeight: 20 } 
            })
        )
    );
}

// Slide 6: Customers & Revenue
function createSlide6() {
    return React.createElement(Page, {
        size: "LETTER",
        orientation: "landscape",
        style: baseStyles.page
    },
        React.createElement(View, { style: { textAlign: 'center', marginTop: spacing.xl, marginBottom: spacing.lg } },
            React.createElement(Text, { style: { fontSize: typography.slideTitle, fontWeight: 'bold', marginBottom: spacing.sm, color: colors.californiaBlue } }, "Customers & Revenue"),
            React.createElement(Text, { style: { fontSize: typography.bodyLarge, color: colors.textMuted } }, "Strong traction with paying customers and Google partnership")
        ),

        React.createElement(View, { style: { flex: 1, justifyContent: 'center' } },

        React.createElement(View, { style: { flexDirection: 'row', gap: spacing.md, marginBottom: spacing.lg } },
            React.createElement(View, { 
                style: { 
                    flex: 1, 
                    backgroundColor: colors.backgroundGreen, 
                    padding: spacing.lg, 
                    textAlign: 'center',
                    ...cornerStyles.accent 
                } 
            },
                React.createElement(Text, { style: { fontSize: 36, fontWeight: 'bold', color: colors.coralGreen, marginBottom: spacing.sm } }, "$120K"),
                React.createElement(Text, { style: { fontSize: typography.bodyMedium, fontWeight: 'bold', marginBottom: spacing.xs } }, "Contracted ARR"),
                React.createElement(Text, { style: { fontSize: typography.labelMedium, color: colors.textMuted, marginBottom: spacing.xs } }, "3 signed customers (3yr contracts)"),
                React.createElement(Text, { style: { fontSize: typography.labelSmall, fontWeight: 'bold', color: colors.coralGreen } }, "Oct 2024 → May 2025")
            ),
            React.createElement(View, { 
                style: { 
                    flex: 1, 
                    backgroundColor: colors.backgroundPeach, 
                    padding: spacing.lg, 
                    textAlign: 'center',
                    ...cornerStyles.accentReverse 
                } 
            },
                React.createElement(Text, { style: { fontSize: 36, fontWeight: 'bold', color: colors.peach, marginBottom: spacing.sm } }, "6-8wks"),
                React.createElement(Text, { style: { fontSize: typography.bodyMedium, fontWeight: 'bold', marginBottom: spacing.xs } }, "Current Delivery Time"),
                React.createElement(Text, { style: { fontSize: typography.labelMedium, color: colors.textMuted } }, "Prototypes available immediately")
            )
        ),

        React.createElement(View, { style: { flexDirection: 'row', gap: spacing.md } },
            React.createElement(View, { 
                style: { 
                    flex: 1, 
                    backgroundColor: colors.backgroundLight, 
                    padding: spacing.md,
                    ...cornerStyles.secondary 
                } 
            },
                React.createElement(Text, { style: { fontSize: typography.bodyMedium, fontWeight: 'bold', color: colors.californiaBlue, marginBottom: spacing.sm } }, "Signed Customers"),
                React.createElement(Text, { style: { fontSize: typography.labelMedium, marginBottom: spacing.xs, fontWeight: 'bold' } }, "Tech Consulting ($24K ARR)"),
                React.createElement(Text, { style: { fontSize: typography.labelSmall, marginBottom: spacing.sm, fontStyle: 'italic' } }, "Software that wins them more clients"),
                React.createElement(Text, { style: { fontSize: typography.labelMedium, marginBottom: spacing.xs, fontWeight: 'bold' } }, "Cleaning Co, Edinburgh ($49K ARR)"),
                React.createElement(Text, { style: { fontSize: typography.labelSmall, marginBottom: spacing.sm, fontStyle: 'italic' } }, "Operations system that reduces costs"),
                React.createElement(Text, { style: { fontSize: typography.labelMedium, marginBottom: spacing.xs, fontWeight: 'bold' } }, "Accounting Firm, LA ($48K ARR)"),
                React.createElement(Text, { style: { fontSize: typography.labelSmall, fontStyle: 'italic' } }, "Collections system that improves cash flow")
            ),
            React.createElement(View, { 
                style: { 
                    flex: 1, 
                    backgroundColor: colors.backgroundGreen, 
                    padding: spacing.md,
                    ...cornerStyles.primary 
                } 
            },
                React.createElement(Text, { style: { fontSize: typography.bodyMedium, fontWeight: 'bold', color: colors.coralGreen, marginBottom: spacing.sm } }, "Google Trial"),
                React.createElement(Text, { style: { fontSize: typography.labelMedium, marginBottom: spacing.xs } }, "• Currently trialling our software"),
                React.createElement(Text, { style: { fontSize: typography.labelMedium, marginBottom: spacing.xs } }, "• Built demo apps for Google Cloud"),
                React.createElement(Text, { style: { fontSize: typography.labelMedium, marginBottom: spacing.xs } }, "• Long shot but strategic opportunity"),
                React.createElement(Text, { style: { fontSize: typography.labelMedium, fontWeight: 'bold', color: colors.coralGreen } }, "• Could be a game-changing win")
            )
        )
        ),

        // Logo in bottom right
        React.createElement(View, { style: { position: 'absolute', bottom: 20, right: 20 } },
            React.createElement(Image, { 
                src: logoPath, 
                style: { width: 80, height: 'auto', maxHeight: 20 } 
            })
        )
    );
}

// Slide 7: The Team
function createSlide7() {
    return React.createElement(Page, {
        size: "LETTER",
        orientation: "landscape",
        style: baseStyles.page
    },
        React.createElement(View, { style: { textAlign: 'center', marginTop: spacing.lg, marginBottom: spacing.sm } },
            React.createElement(Text, { style: { fontSize: typography.slideTitle, fontWeight: 'bold', marginBottom: spacing.xs, color: colors.californiaBlue } }, "The Team"),
            React.createElement(Text, { style: { fontSize: typography.bodyLarge, color: colors.textMuted } }, "Google-trained founders with proven track record")
        ),

        React.createElement(View, { style: { flex: 1, justifyContent: 'center' } },

        React.createElement(View, { style: { flexDirection: 'row', gap: spacing.md, marginBottom: spacing.md } },
            React.createElement(View, { 
                style: { 
                    flex: 1, 
                    backgroundColor: colors.backgroundLight, 
                    padding: spacing.md, 
                    textAlign: 'center',
                    ...cornerStyles.accent 
                } 
            },
                React.createElement(View, { style: { marginBottom: spacing.sm } },
                    React.createElement(UserIcon, { size: 48, color: colors.californiaBlue })
                ),
                React.createElement(Text, { style: { fontSize: typography.bodyLarge, fontWeight: 'bold', color: colors.californiaBlue, marginBottom: spacing.xs } }, "Fahd Rafi"),
                React.createElement(Text, { style: { fontSize: typography.labelLarge, fontWeight: 'bold', marginBottom: spacing.sm } }, "Founder"),
                React.createElement(Text, { style: { fontSize: typography.labelMedium, lineHeight: 1.3, marginBottom: spacing.xs } }, "• Google, Microsoft, HP, Shell"),
                React.createElement(Text, { style: { fontSize: typography.labelMedium, lineHeight: 1.3, marginBottom: spacing.xs } }, "• Sales, Engineering, Consulting"),
                React.createElement(Text, { style: { fontSize: typography.labelMedium, lineHeight: 1.3, marginBottom: spacing.xs } }, "• MS Computer Science (AI) - UCF"),
                React.createElement(Text, { style: { fontSize: typography.labelMedium, lineHeight: 1.3 } }, "• Post Grad Finance - Oxford")
            ),
            React.createElement(View, { 
                style: { 
                    flex: 1, 
                    backgroundColor: colors.backgroundPeach, 
                    padding: spacing.md, 
                    textAlign: 'center',
                    ...cornerStyles.accentReverse 
                } 
            },
                React.createElement(View, { style: { marginBottom: spacing.sm } },
                    React.createElement(UsersIcon, { size: 48, color: colors.peach })
                ),
                React.createElement(Text, { style: { fontSize: typography.bodyLarge, fontWeight: 'bold', color: colors.peach, marginBottom: spacing.xs } }, "Team of 8"),
                React.createElement(Text, { style: { fontSize: typography.labelLarge, fontWeight: 'bold', marginBottom: spacing.sm } }, "Proven Execution"),
                React.createElement(Text, { style: { fontSize: typography.labelMedium, lineHeight: 1.3, marginBottom: spacing.xs } }, "• Core team of 5 built system"),
                React.createElement(Text, { style: { fontSize: typography.labelMedium, lineHeight: 1.3, marginBottom: spacing.xs } }, "• Talent pipeline ready"),
                React.createElement(Text, { style: { fontSize: typography.labelMedium, lineHeight: 1.3 } }, "• Can sell, deliver & automate")
            )
        ),

        React.createElement(View, { 
            style: { 
                backgroundColor: colors.backgroundLight, 
                padding: spacing.md,
                ...cornerStyles.primary 
            } 
        },
            React.createElement(Text, { style: { fontSize: typography.sectionTitle, fontWeight: 'bold', color: colors.californiaBlue, marginBottom: spacing.sm, textAlign: 'center' } }, "Why We'll Succeed"),
            React.createElement(View, { style: { flexDirection: 'row', gap: spacing.sm } },
                React.createElement(View, { style: { flex: 1, textAlign: 'center' } },
                    React.createElement(Text, { style: { fontSize: 32, fontWeight: 'bold', color: colors.californiaBlue, marginBottom: spacing.xs } }, "1"),
                    React.createElement(Text, { style: { fontSize: typography.labelLarge, fontWeight: 'bold', marginBottom: spacing.xs } }, "We Know the Problem"),
                    React.createElement(Text, { style: { fontSize: typography.labelMedium, color: colors.textMuted } }, "Experienced the blockers firsthand")
                ),
                React.createElement(View, { style: { flex: 1, textAlign: 'center' } },
                    React.createElement(Text, { style: { fontSize: 32, fontWeight: 'bold', color: colors.coralGreen, marginBottom: spacing.xs } }, "2"),
                    React.createElement(Text, { style: { fontSize: typography.labelLarge, fontWeight: 'bold', marginBottom: spacing.xs } }, "We Have a Solution"),
                    React.createElement(Text, { style: { fontSize: typography.labelMedium, color: colors.textMuted } }, "Built system that delivers immediate business value")
                ),
                React.createElement(View, { style: { flex: 1, textAlign: 'center' } },
                    React.createElement(Text, { style: { fontSize: 32, fontWeight: 'bold', color: colors.peach, marginBottom: spacing.xs } }, "3"),
                    React.createElement(Text, { style: { fontSize: typography.labelLarge, fontWeight: 'bold', marginBottom: spacing.xs } }, "We Have Customers"),
                    React.createElement(Text, { style: { fontSize: typography.labelMedium, color: colors.textMuted } }, "$120K contracted ARR proves demand")
                )
            )
        )
        ),

        // Logo in bottom right
        React.createElement(View, { style: { position: 'absolute', bottom: 20, right: 20 } },
            React.createElement(Image, { 
                src: logoPath, 
                style: { width: 80, height: 'auto', maxHeight: 20 } 
            })
        )
    );
}

// Slide 8: The Plan
function createSlide8() {
    return React.createElement(Page, {
        size: "LETTER",
        orientation: "landscape",
        style: baseStyles.page
    },
        React.createElement(View, { style: { textAlign: 'center', marginTop: spacing.xl, marginBottom: spacing.lg } },
            React.createElement(Text, { style: { fontSize: typography.slideTitle, fontWeight: 'bold', marginBottom: spacing.sm, color: colors.californiaBlue } }, "The Plan"),
            React.createElement(Text, { style: { fontSize: typography.bodyLarge, color: colors.textMuted } }, "Strategic roadmap to $1M ARR in 12 months")
        ),

        React.createElement(View, { style: { flex: 1, justifyContent: 'center' } },

        React.createElement(View, { 
            style: { 
                backgroundColor: colors.backgroundLight, 
                padding: spacing.lg, 
                marginBottom: spacing.lg,
                ...cornerStyles.accent 
            } 
        },
            React.createElement(Text, { style: { fontSize: typography.sectionTitle, fontWeight: 'bold', color: colors.californiaBlue, marginBottom: spacing.md, textAlign: 'center' } }, "Automation Roadmap"),
            React.createElement(View, { style: { flexDirection: 'row', gap: spacing.md } },
                React.createElement(View, { 
                    style: { 
                        flex: 1, 
                        backgroundColor: colors.backgroundGreen, 
                        padding: spacing.md,
                        ...cornerStyles.small 
                    } 
                },
                    React.createElement(Text, { style: { fontSize: typography.bodyMedium, fontWeight: 'bold', color: colors.coralGreen, marginBottom: spacing.sm, textAlign: 'center' } }, "Now"),
                    React.createElement(Text, { style: { fontSize: typography.labelMedium, lineHeight: 1.4, marginBottom: spacing.xs } }, "• Automated prototypes"),
                    React.createElement(Text, { style: { fontSize: typography.labelMedium, lineHeight: 1.4, marginBottom: spacing.xs } }, "• 6-8 week delivery"),
                    React.createElement(Text, { style: { fontSize: typography.labelMedium, lineHeight: 1.4 } }, "• $120K ARR")
                ),
                React.createElement(View, { 
                    style: { 
                        flex: 1, 
                        backgroundColor: colors.backgroundPeach, 
                        padding: spacing.md,
                        ...cornerStyles.secondary 
                    } 
                },
                    React.createElement(Text, { style: { fontSize: typography.bodyMedium, fontWeight: 'bold', color: colors.peach, marginBottom: spacing.sm, textAlign: 'center' } }, "6 Months"),
                    React.createElement(Text, { style: { fontSize: typography.labelMedium, lineHeight: 1.4, marginBottom: spacing.xs } }, "• 6-8 day delivery"),
                    React.createElement(Text, { style: { fontSize: typography.labelMedium, lineHeight: 1.4, marginBottom: spacing.xs } }, "• Enhanced automation"),
                    React.createElement(Text, { style: { fontSize: typography.labelMedium, lineHeight: 1.4 } }, "• $300K ARR")
                ),
                React.createElement(View, { 
                    style: { 
                        flex: 1, 
                        backgroundColor: 'white', 
                        padding: spacing.md, 
                        borderWidth: 2, 
                        borderColor: colors.californiaBlue, 
                        borderStyle: 'solid',
                        ...cornerStyles.subtle 
                    } 
                },
                    React.createElement(Text, { style: { fontSize: typography.bodyMedium, fontWeight: 'bold', color: colors.californiaBlue, marginBottom: spacing.sm, textAlign: 'center' } }, "12 Months"),
                    React.createElement(Text, { style: { fontSize: typography.labelMedium, lineHeight: 1.4, marginBottom: spacing.xs } }, "• Complete automation"),
                    React.createElement(Text, { style: { fontSize: typography.labelMedium, lineHeight: 1.4, marginBottom: spacing.xs } }, "• Full ROI package"),
                    React.createElement(Text, { style: { fontSize: typography.labelMedium, lineHeight: 1.4 } }, "• $1M ARR")
                )
            )
        ),

        React.createElement(View, { style: { flexDirection: 'row', gap: spacing.md } },
            React.createElement(View, { 
                style: { 
                    flex: 1, 
                    backgroundColor: colors.backgroundGreen, 
                    padding: spacing.md,
                    ...cornerStyles.primary 
                } 
            },
                React.createElement(Text, { style: { fontSize: typography.bodyMedium, fontWeight: 'bold', color: colors.coralGreen, marginBottom: spacing.sm, textAlign: 'center' } }, "Business Growth"),
                React.createElement(Text, { style: { fontSize: typography.labelMedium, lineHeight: 1.3, marginBottom: spacing.xs } }, "• Scale to 20-30 customers"),
                React.createElement(Text, { style: { fontSize: typography.labelMedium, lineHeight: 1.3, marginBottom: spacing.xs } }, "• Launch partner channel"),
                React.createElement(Text, { style: { fontSize: typography.labelMedium, lineHeight: 1.3, marginBottom: spacing.xs } }, "• 2 sales + founder"),
                React.createElement(Text, { style: { fontSize: typography.labelMedium, lineHeight: 1.3 } }, "• Focus US market")
            ),
            React.createElement(View, { 
                style: { 
                    flex: 1, 
                    backgroundColor: colors.backgroundPeach, 
                    padding: spacing.md,
                    ...cornerStyles.accentReverse 
                } 
            },
                React.createElement(Text, { style: { fontSize: typography.bodyMedium, fontWeight: 'bold', color: colors.peach, marginBottom: spacing.sm, textAlign: 'center' } }, "Platform Evolution"),
                React.createElement(Text, { style: { fontSize: typography.labelMedium, lineHeight: 1.3, marginBottom: spacing.xs } }, "• AI factory completion"),
                React.createElement(Text, { style: { fontSize: typography.labelMedium, lineHeight: 1.3, marginBottom: spacing.xs } }, "• Auto sales collateral"),
                React.createElement(Text, { style: { fontSize: typography.labelMedium, lineHeight: 1.3, marginBottom: spacing.xs } }, "• Dynamic ROI calculators"),
                React.createElement(Text, { style: { fontSize: typography.labelMedium, lineHeight: 1.3 } }, "• Just-in-time everything")
            ),
            React.createElement(View, { 
                style: { 
                    flex: 1, 
                    backgroundColor: colors.backgroundLight, 
                    padding: spacing.md,
                    ...cornerStyles.subtle 
                } 
            },
                React.createElement(Text, { style: { fontSize: typography.bodyMedium, fontWeight: 'bold', color: colors.californiaBlue, marginBottom: spacing.sm, textAlign: 'center' } }, "Key Hires"),
                React.createElement(Text, { style: { fontSize: typography.labelMedium, lineHeight: 1.3, marginBottom: spacing.xxs } }, "• Sales & Partnerships Lead"),
                React.createElement(Text, { style: { fontSize: typography.labelSmall, fontStyle: 'italic', color: colors.textMuted, marginBottom: spacing.xs } }, "  (currently: Founder)"),
                React.createElement(Text, { style: { fontSize: typography.labelMedium, lineHeight: 1.3, marginBottom: spacing.xxs } }, "• CTO - System architect"),
                React.createElement(Text, { style: { fontSize: typography.labelSmall, fontStyle: 'italic', color: colors.textMuted, marginBottom: spacing.xs } }, "  (currently: Founder)"),
                React.createElement(Text, { style: { fontSize: typography.labelMedium, lineHeight: 1.3, marginBottom: spacing.xxs } }, "• UX Lead"),
                React.createElement(Text, { style: { fontSize: typography.labelSmall, fontStyle: 'italic', color: colors.textMuted } }, "  (currently: team)")
            )
        )

        ),

        // Logo in bottom right
        React.createElement(View, { style: { position: 'absolute', bottom: 20, right: 20 } },
            React.createElement(Image, { 
                src: logoPath, 
                style: { width: 80, height: 'auto', maxHeight: 20 } 
            })
        )
    );
}

// Slide 9: The Investment (CTA)
function createSlide9() {
    return React.createElement(Page, {
        size: "LETTER",
        orientation: "landscape",
        style: baseStyles.page
    },
        React.createElement(View, { style: { textAlign: 'center', marginTop: spacing.xl, marginBottom: spacing.lg } },
            React.createElement(Text, { style: { fontSize: typography.slideTitle, fontWeight: 'bold', marginBottom: spacing.sm, color: colors.californiaBlue } }, "The Investment"),
            React.createElement(Text, { style: { fontSize: typography.sectionTitle, fontWeight: 'bold', color: colors.coralGreen } }, "$3M USD Seed to scale proven model")
        ),

        React.createElement(View, { style: { flex: 1, justifyContent: 'center' } },

        React.createElement(View, { style: { flexDirection: 'row', gap: spacing.md, marginBottom: spacing.lg } },
            React.createElement(View, { 
                style: { 
                    flex: 1, 
                    backgroundColor: colors.backgroundGreen, 
                    padding: spacing.lg, 
                    textAlign: 'center',
                    ...cornerStyles.accent 
                } 
            },
                React.createElement(Text, { style: { fontSize: 36, fontWeight: 'bold', color: colors.coralGreen, marginBottom: spacing.sm } }, "$3M USD"),
                React.createElement(Text, { style: { fontSize: typography.bodyLarge, fontWeight: 'bold', marginBottom: spacing.sm } }, "Seed Round"),
                React.createElement(Text, { style: { fontSize: typography.labelMedium, color: colors.textMuted } }, "18 months runway to $1M ARR")
            ),
            React.createElement(View, { 
                style: { 
                    flex: 1, 
                    backgroundColor: colors.backgroundPeach, 
                    padding: spacing.lg, 
                    textAlign: 'center',
                    ...cornerStyles.accentReverse 
                } 
            },
                React.createElement(Text, { style: { fontSize: 36, fontWeight: 'bold', color: colors.peach, marginBottom: spacing.sm } }, "$1M"),
                React.createElement(Text, { style: { fontSize: typography.bodyLarge, fontWeight: 'bold', marginBottom: spacing.sm } }, "ARR Target"),
                React.createElement(Text, { style: { fontSize: typography.labelMedium, color: colors.textMuted } }, "Proven path from $120K to $1M")
            )
        ),

        React.createElement(View, { 
            style: { 
                backgroundColor: colors.backgroundLight, 
                padding: spacing.md, 
                marginBottom: spacing.md,
                ...cornerStyles.secondary 
            } 
        },
            React.createElement(Text, { style: { fontSize: typography.bodyLarge, fontWeight: 'bold', color: colors.californiaBlue, marginBottom: spacing.sm, textAlign: 'center' } }, "Use of Funds"),
            React.createElement(View, { style: { flexDirection: 'row', gap: spacing.sm } },
                React.createElement(View, { 
                    style: { 
                        flex: 1, 
                        textAlign: 'center', 
                        padding: spacing.sm, 
                        backgroundColor: 'white',
                        ...cornerStyles.small 
                    } 
                },
                    React.createElement(Text, { style: { fontSize: typography.sectionTitle, fontWeight: 'bold', color: colors.californiaBlue, marginBottom: spacing.xs } }, "40%"),
                    React.createElement(Text, { style: { fontSize: typography.labelMedium, fontWeight: 'bold' } }, "AI Factory"),
                    React.createElement(Text, { style: { fontSize: typography.labelSmall, color: colors.textMuted } }, "Complete automation")
                ),
                React.createElement(View, { 
                    style: { 
                        flex: 1, 
                        textAlign: 'center', 
                        padding: spacing.sm, 
                        backgroundColor: 'white',
                        ...cornerStyles.subtle 
                    } 
                },
                    React.createElement(Text, { style: { fontSize: typography.sectionTitle, fontWeight: 'bold', color: colors.coralGreen, marginBottom: spacing.xs } }, "30%"),
                    React.createElement(Text, { style: { fontSize: typography.labelMedium, fontWeight: 'bold' } }, "Sales & Marketing"),
                    React.createElement(Text, { style: { fontSize: typography.labelSmall, color: colors.textMuted } }, "Customer acquisition")
                ),
                React.createElement(View, { 
                    style: { 
                        flex: 1, 
                        textAlign: 'center', 
                        padding: spacing.sm, 
                        backgroundColor: 'white',
                        ...cornerStyles.small 
                    } 
                },
                    React.createElement(Text, { style: { fontSize: typography.sectionTitle, fontWeight: 'bold', color: colors.peach, marginBottom: spacing.xs } }, "30%"),
                    React.createElement(Text, { style: { fontSize: typography.labelMedium, fontWeight: 'bold' } }, "Team & Operations"),
                    React.createElement(Text, { style: { fontSize: typography.labelSmall, color: colors.textMuted } }, "Scale the team")
                )
            )
        ),

        React.createElement(View, { 
            style: { 
                backgroundColor: colors.californiaBlue, 
                padding: spacing.md, 
                textAlign: 'center',
                ...cornerStyles.primary 
            } 
        },
            React.createElement(Text, { style: { fontSize: typography.bodyLarge, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: spacing.sm } }, "Why Invest Now"),
            React.createElement(View, { style: { flexDirection: 'row', gap: spacing.md } },
                React.createElement(View, { style: { flex: 1 } },
                    React.createElement(Text, { style: { fontSize: typography.labelLarge, color: 'white', fontWeight: 'bold', marginBottom: spacing.xs, textAlign: 'center' } }, "Proven Model"),
                    React.createElement(Text, { style: { fontSize: typography.labelMedium, color: 'white', textAlign: 'center' } }, "$120K ARR with 3 customers")
                ),
                React.createElement(View, { style: { flex: 1 } },
                    React.createElement(Text, { style: { fontSize: typography.labelLarge, color: 'white', fontWeight: 'bold', marginBottom: spacing.xs, textAlign: 'center' } }, "Clear Path"),
                    React.createElement(Text, { style: { fontSize: typography.labelMedium, color: 'white', textAlign: 'center' } }, "Scale from 3 to 30 customers")
                ),
                React.createElement(View, { style: { flex: 1 } },
                    React.createElement(Text, { style: { fontSize: typography.labelLarge, color: 'white', fontWeight: 'bold', marginBottom: spacing.xs, textAlign: 'center' } }, "Right Time"),
                    React.createElement(Text, { style: { fontSize: typography.labelMedium, color: 'white', textAlign: 'center' } }, "AI makes it profitable now")
                )
            )
        )
        ),

        // Logo in bottom right
        React.createElement(Image, { 
            src: logoPath, 
            style: { position: 'absolute', bottom: 20, right: 20, width: 100, height: 'auto', maxHeight: 24 } 
        })
    );
}

// Slide 10: Close with Quote
function createSlide10() {
    return React.createElement(Page, {
        size: "LETTER",
        orientation: "landscape",
        style: baseStyles.page
    },
        React.createElement(View, { style: { flex: 1, justifyContent: 'center', textAlign: 'center' } },
            React.createElement(View, { style: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: spacing.xl } },
                React.createElement(Image, { 
                    src: logoPath, 
                    style: { width: 400, height: 'auto', maxHeight: 80 } 
                })
            ),
            
            React.createElement(View, { 
                style: { 
                    backgroundColor: colors.backgroundLight, 
                    padding: spacing.xl, 
                    marginBottom: spacing.xl,
                    ...cornerStyles.accent 
                } 
            },
                React.createElement(Text, { style: { fontSize: typography.bodyLarge, fontStyle: 'italic', color: colors.californiaBlue, textAlign: 'center', marginBottom: spacing.sm, lineHeight: 1.4 } }, "\"Every business is a software business now. The question is: Will you build it or buy it ready-made?\""),
                React.createElement(Text, { style: { fontSize: typography.labelLarge, color: colors.textMuted, textAlign: 'center', marginBottom: spacing.lg } }, "— Satya Nadella"),
                React.createElement(View, { style: { textAlign: 'center' } },
                    React.createElement(Text, { style: { fontSize: typography.bodyMedium, fontWeight: 'bold', color: colors.californiaBlue, textAlign: 'center', marginBottom: spacing.sm } }, "At Noodle Seed, we change the"),
                    React.createElement(Text, { style: { fontSize: typography.sectionTitle, fontWeight: 'bold', color: colors.textMuted, textAlign: 'center', marginBottom: spacing.xs } }, "Build OR Buy"),
                    React.createElement(Text, { style: { fontSize: typography.bodyMedium, color: colors.californiaBlue, textAlign: 'center', marginBottom: spacing.xs } }, "to"),
                    React.createElement(Text, { style: { fontSize: typography.sectionTitle, fontWeight: 'bold', color: colors.californiaBlue, textAlign: 'center' } }, "Build AND Buy")
                )
            ),
            
            React.createElement(View, { 
                style: { 
                    backgroundColor: colors.californiaBlue, 
                    padding: spacing.lg, 
                    textAlign: 'center',
                    ...cornerStyles.primary 
                } 
            },
                React.createElement(Text, { style: { fontSize: typography.bodyLarge, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: spacing.sm } }, "Experience the Future Today"),
                React.createElement(Text, { style: { fontSize: typography.bodyMedium, color: 'white', textAlign: 'center', marginBottom: spacing.lg } }, "noodleseed.com"),
                React.createElement(Text, { style: { fontSize: typography.labelLarge, color: 'white', textAlign: 'center', marginBottom: spacing.xs } }, "Fahd Rafi, Founder"),
                React.createElement(Text, { style: { fontSize: typography.bodyMedium, color: 'white', textAlign: 'center' } }, "fahd@noodleseed.com")
            )
        )
    );
}

async function generatePDF() {
    console.log('🚀 Starting React PDF generation...');
    
    try {
        // Clean and create output directory
        const outputDir = path.resolve(__dirname, '../../dist/react-pdf');
        if (fs.existsSync(outputDir)) {
            fs.rmSync(outputDir, { recursive: true, force: true });
        }
        fs.mkdirSync(outputDir, { recursive: true });
        
        // Create the complete 9-slide presentation
        console.log('📄 Rendering React components to PDF...');
        const PresentationDocument = React.createElement(Document, {
            title: "Noodle Seed Investor Deck",
            author: "Noodle Seed",
            subject: "Investment Opportunity - AI-Powered Custom Software Factory",
            keywords: "AI, software development, automation, enterprise software, investment"
        }, 
            // All 10 slides
            createSlide1(), // The Investment Decision
            createSlide2(), // The Opportunity
            createSlide3(), // The Problem
            createSlide4(), // Competition
            createSlide5(), // The Solution
            createSlide6(), // Customers & Revenue
            createSlide7(), // The Team
            createSlide8(), // The Plan
            createSlide9(), // The Investment (CTA)
            createSlide10() // Close with Quote
        );
        
        const pdfBuffer = await renderToBuffer(PresentationDocument);
        
        // Write PDF file
        const pdfPath = path.join(outputDir, 'noodleseed-investor-deck.pdf');
        fs.writeFileSync(pdfPath, pdfBuffer);
        
        console.log('✅ PDF generated successfully!');
        console.log(`📄 PDF saved to: ${pdfPath}`);
        
        // Generate PNGs using the same method as before
        await generatePNGs(pdfPath);
        
    } catch (error) {
        console.error('❌ Error generating PDF:', error);
        process.exit(1);
    }
}

async function generatePNGs(pdfPath) {
    console.log('🖼️  Starting PNG generation from React PDF...');
    
    const { exec } = await import('child_process');
    const { promisify } = await import('util');
    const execAsync = promisify(exec);
    
    const outputDir = path.dirname(pdfPath);
    const pngsDir = path.join(outputDir, 'pngs');
    
    // Create PNG directory if it doesn't exist
    if (!fs.existsSync(pngsDir)) {
        fs.mkdirSync(pngsDir, { recursive: true });
    }
    
    try {
        // Check if we have poppler installed for pdftoppm
        try {
            await execAsync('which pdftoppm');
            console.log('🖼️  Using pdftoppm for individual page extraction...');
            
            const baseFilename = path.join(pngsDir, 'slide');
            await execAsync(`pdftoppm -png -r 300 "${pdfPath}" "${baseFilename}"`);
            
            // Get all generated PNG files and rename them properly
            const generatedFiles = fs.readdirSync(pngsDir).filter(f => f.startsWith('slide-') && f.endsWith('.png'));
            
            // Sort files to ensure proper order
            generatedFiles.sort((a, b) => {
                const aNum = parseInt(a.match(/slide-(\d+)\.png/)[1]);
                const bNum = parseInt(b.match(/slide-(\d+)\.png/)[1]);
                return aNum - bNum;
            });
            
            // Rename to match our convention (slide-01.png, slide-02.png, etc.)
            generatedFiles.forEach((file, index) => {
                const oldPath = path.join(pngsDir, file);
                const newName = `slide-${(index + 1).toString().padStart(2, '0')}.png`;
                const newPath = path.join(pngsDir, newName);
                
                if (oldPath !== newPath) {
                    fs.renameSync(oldPath, newPath);
                }
                console.log(`  ✅ Generated PNG for slide ${(index + 1).toString().padStart(2, '0')}`);
            });
            
            console.log('✅ PNG generation completed!');
            console.log(`🖼️  PNGs saved in ${pngsDir}`);
            
        } catch (error) {
            console.log('  ℹ️  pdftoppm not found, trying qlmanage fallback...');
            
            // Fallback to qlmanage
            await execAsync(`qlmanage -t -s 1920 -o "${pngsDir}" "${pdfPath}"`);
            
            const qlFile = path.join(pngsDir, `${path.basename(pdfPath, '.pdf')}.png`);
            const newName = path.join(pngsDir, 'slide-01.png');
            if (fs.existsSync(qlFile)) {
                fs.renameSync(qlFile, newName);
                console.log('  ✅ Single PNG saved as slide-01.png');
                console.log('  ℹ️  Install poppler with "brew install poppler" for individual page extraction');
            }
        }
        
    } catch (error) {
        console.error('❌ Error generating PNGs:', error.message);
    }
}

// Generate HTML index file
async function generateHTML() {
    console.log('🌐 Generating index.html...');
    
    const outputDir = path.join(process.cwd(), 'dist', 'react-pdf');
    const htmlPath = path.join(outputDir, 'index.html');
    
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Noodle Seed - Investor Pitch Deck</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #1a1a1a;
            color: white;
            padding: 20px;
            text-align: center;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        h1 {
            font-size: 2.5rem;
            margin-bottom: 20px;
            background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .download-section {
            background: #2a2a2a;
            border-radius: 12px;
            padding: 40px;
            margin-bottom: 40px;
        }

        .download-btn {
            display: inline-block;
            background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
            color: white;
            padding: 15px 30px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1rem;
            transition: transform 0.3s ease;
        }

        .download-btn:hover {
            transform: scale(1.05);
        }

        .slides-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 40px;
        }

        .slide-preview {
            background: #2a2a2a;
            border-radius: 8px;
            padding: 10px;
            transition: transform 0.3s ease;
        }

        .slide-preview:hover {
            transform: translateY(-5px);
        }

        .slide-preview img {
            width: 100%;
            height: auto;
            border-radius: 6px;
            cursor: pointer;
        }

        .slide-title {
            margin-top: 10px;
            font-size: 0.9rem;
            color: #ccc;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Noodle Seed</h1>
        <p style="font-size: 1.2rem; color: #888; margin-bottom: 40px;">Investor Pitch Deck</p>

        <div class="download-section">
            <h2>Download Complete Presentation</h2>
            <p style="margin: 15px 0; color: #888;">Get the full investor deck as a PDF</p>
            <a href="noodleseed-investor-deck.pdf" class="download-btn" download>
                📄 Download PDF
            </a>
        </div>

        <h3 style="margin-bottom: 20px;">Slide Previews</h3>
        
        <div class="slides-grid">
            <div class="slide-preview">
                <img src="pngs/slide-01.png" alt="Title + Hook" onclick="window.open('pngs/slide-01.png', '_blank')">
                <div class="slide-title">1. Title + Hook</div>
            </div>
            <div class="slide-preview">
                <img src="pngs/slide-02.png" alt="The Problem" onclick="window.open('pngs/slide-02.png', '_blank')">
                <div class="slide-title">2. The Problem</div>
            </div>
            <div class="slide-preview">
                <img src="pngs/slide-03.png" alt="Solution" onclick="window.open('pngs/slide-03.png', '_blank')">
                <div class="slide-title">3. Solution</div>
            </div>
            <div class="slide-preview">
                <img src="pngs/slide-04.png" alt="Market Opportunity" onclick="window.open('pngs/slide-04.png', '_blank')">
                <div class="slide-title">4. Market Opportunity</div>
            </div>
            <div class="slide-preview">
                <img src="pngs/slide-05.png" alt="Customer Proof" onclick="window.open('pngs/slide-05.png', '_blank')">
                <div class="slide-title">5. Customer Proof</div>
            </div>
            <div class="slide-preview">
                <img src="pngs/slide-06.png" alt="Team" onclick="window.open('pngs/slide-06.png', '_blank')">
                <div class="slide-title">6. Team</div>
            </div>
            <div class="slide-preview">
                <img src="pngs/slide-07.png" alt="Funding + Roadmap" onclick="window.open('pngs/slide-07.png', '_blank')">
                <div class="slide-title">7. Funding + Roadmap</div>
            </div>
            <div class="slide-preview">
                <img src="pngs/slide-08.png" alt="Investment Opportunity" onclick="window.open('pngs/slide-08.png', '_blank')">
                <div class="slide-title">8. Investment Opportunity</div>
            </div>
        </div>
    </div>
</body>
</html>`;

    fs.writeFileSync(htmlPath, htmlContent);
    console.log(`✅ HTML file generated: ${htmlPath}`);
}

// Main execution
if (import.meta.url === `file://${process.argv[1]}`) {
    generatePDF()
        .then(() => generateHTML())
        .then(() => {
            console.log('🎉 Build process completed successfully!');
            process.exit(0);
        })
        .catch((error) => {
            console.error('💥 Build process failed:', error);
            process.exit(1);
        });
}

export { generatePDF };