import React from 'react';
import { renderToBuffer, Document, Page, Text, View, Image, Svg, Path, Circle, Line, Polyline } from '@react-pdf/renderer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { baseStyles, colors } from './styles.js';

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
        React.createElement(View, { style: { textAlign: 'center', marginTop: 40, marginBottom: 32 } },
            React.createElement(View, { style: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 16 } },
                React.createElement(Image, { 
                    src: logoPath, 
                    style: { width: 360, height: 'auto', maxHeight: 72 } 
                })
            ),
            React.createElement(Text, { style: { fontSize: 24, color: colors.textMuted } }, "Business solutions delivered instantly, no development needed")
        ),

        React.createElement(View, { style: { flex: 1, justifyContent: 'center' } },
            
            React.createElement(View, { style: { flexDirection: 'row', gap: 20, marginBottom: 24 } },
                React.createElement(View, { style: { flex: 1, padding: 16, borderRadius: 12, backgroundColor: colors.backgroundGreen, textAlign: 'center' } },
                    React.createElement(Text, { style: { fontSize: 16, fontWeight: 'bold', color: colors.coralGreen, marginBottom: 6, textAlign: 'center' } }, "Proven Traction"),
                    React.createElement(Text, { style: { fontSize: 28, fontWeight: 'bold', color: colors.coralGreen, marginBottom: 4, textAlign: 'center' } }, "$120K"),
                    React.createElement(Text, { style: { fontSize: 12, marginBottom: 2, textAlign: 'center' } }, "Contracted ARR"),
                    React.createElement(Text, { style: { fontSize: 10, marginBottom: 4, textAlign: 'center', lineHeight: 1.2 } }, "3 signed customers\n3-year contracts"),
                    React.createElement(Text, { style: { fontSize: 10, fontWeight: 'bold', color: colors.coralGreen, textAlign: 'center' } }, "Oct 2024 → May 2025")
                ),
                React.createElement(View, { style: { flex: 1, padding: 16, borderRadius: 12, backgroundColor: colors.backgroundPeach, textAlign: 'center' } },
                    React.createElement(Text, { style: { fontSize: 16, fontWeight: 'bold', color: colors.peach, marginBottom: 6, textAlign: 'center' } }, "The Opportunity"),
                    React.createElement(Text, { style: { fontSize: 28, fontWeight: 'bold', color: colors.peach, marginBottom: 4, textAlign: 'center' } }, "$2.2T"),
                    React.createElement(Text, { style: { fontSize: 12, marginBottom: 2, textAlign: 'center' } }, "Software Market"),
                    React.createElement(Text, { style: { fontSize: 10, marginBottom: 2, textAlign: 'center', lineHeight: 1.2 } }, "Anyone can get custom\nsoftware & agents"),
                    React.createElement(Text, { style: { fontSize: 10, textAlign: 'center', lineHeight: 1.2 } }, "Eliminates cost, risk,\ntime, talent barriers")
                ),
                React.createElement(View, { style: { flex: 1, padding: 16, borderRadius: 12, backgroundColor: colors.backgroundLight, textAlign: 'center' } },
                    React.createElement(Text, { style: { fontSize: 16, fontWeight: 'bold', color: colors.californiaBlue, marginBottom: 6, textAlign: 'center' } }, "The Ask"),
                    React.createElement(Text, { style: { fontSize: 28, fontWeight: 'bold', color: colors.californiaBlue, marginBottom: 4, textAlign: 'center' } }, "$2.5M"),
                    React.createElement(Text, { style: { fontSize: 12, marginBottom: 2, textAlign: 'center' } }, "Seed Round"),
                    React.createElement(Text, { style: { fontSize: 10, marginBottom: 2, textAlign: 'center', lineHeight: 1.2 } }, "Scale from 3 to\n30 customers"),
                    React.createElement(Text, { style: { fontSize: 10, textAlign: 'center' } }, "$1M ARR in 12 months")
                )
            ),

            React.createElement(View, { style: { backgroundColor: colors.californiaBlue, padding: 16, borderRadius: 12, textAlign: 'center' } },
                React.createElement(Text, { style: { fontSize: 16, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: 6 } }, "Join Us Now"),
                React.createElement(Text, { style: { fontSize: 13, color: 'white', textAlign: 'center' } }, "fahd@noodleseed.com")
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
        React.createElement(View, { style: { textAlign: 'center', marginTop: 40, marginBottom: 32 } },
            React.createElement(Text, { style: { fontSize: 28, fontWeight: 'bold', marginBottom: 12, color: colors.californiaBlue } }, "The Opportunity"),
            React.createElement(Text, { style: { fontSize: 18, color: colors.textMuted } }, "The transformation happening in software development")
        ),

        React.createElement(View, { style: { flex: 1, justifyContent: 'center' } },
            
            // Market breakdown
            React.createElement(View, { style: { flexDirection: 'row', gap: 20, marginBottom: 24 } },
                // Total addressable market
                React.createElement(View, { style: { flex: 1, backgroundColor: colors.backgroundLight, padding: 20, borderRadius: 12, textAlign: 'center' } },
                    React.createElement(Text, { style: { fontSize: 14, color: colors.textMuted, marginBottom: 8, textAlign: 'center' } }, "Total Addressable Market"),
                    React.createElement(Text, { style: { fontSize: 48, fontWeight: 'bold', color: colors.californiaBlue, textAlign: 'center', marginBottom: 4 } }, "$2.2T"),
                    React.createElement(Text, { style: { fontSize: 12, color: colors.textMuted, textAlign: 'center' } }, "Global Software & Agents by 2034")
                ),
                
                // Immediate opportunity
                React.createElement(View, { style: { flex: 2, backgroundColor: colors.backgroundGreen, padding: 20, borderRadius: 12 } },
                    React.createElement(Text, { style: { fontSize: 14, color: colors.textMuted, marginBottom: 8, textAlign: 'center' } }, "Immediate Opportunity"),
                    React.createElement(Text, { style: { fontSize: 48, fontWeight: 'bold', color: colors.coralGreen, textAlign: 'center', marginBottom: 8 } }, "$150B"),
                    React.createElement(Text, { style: { fontSize: 14, fontWeight: 'bold', textAlign: 'center', marginBottom: 4 } }, "Small Business Custom Software"),
                    React.createElement(View, { style: { flexDirection: 'row', gap: 12, justifyContent: 'center' } },
                        React.createElement(View, { style: { flex: 1 } },
                            React.createElement(Text, { style: { fontSize: 12, textAlign: 'center', marginBottom: 4 } }, "• 33M US small businesses"),
                            React.createElement(Text, { style: { fontSize: 12, textAlign: 'center' } }, "• $30-100K software needs")
                        ),
                        React.createElement(View, { style: { flex: 1 } },
                            React.createElement(Text, { style: { fontSize: 12, textAlign: 'center', marginBottom: 4 } }, "• Currently underserved"),
                            React.createElement(Text, { style: { fontSize: 12, textAlign: 'center' } }, "• Perfect for our model")
                        )
                    )
                )
            ),

            // Our wedge
            React.createElement(View, { style: { backgroundColor: colors.backgroundPeach, padding: 16, borderRadius: 12, marginBottom: 16 } },
                React.createElement(Text, { style: { fontSize: 14, fontWeight: 'bold', color: colors.peach, marginBottom: 10, textAlign: 'center' } }, "Our Initial Wedge: $1B"),
                React.createElement(View, { style: { flexDirection: 'row', gap: 14 } },
                    React.createElement(View, { style: { flex: 1, textAlign: 'center' } },
                        React.createElement(Text, { style: { fontSize: 24, fontWeight: 'bold', color: colors.peach, marginBottom: 3 } }, "10K"),
                        React.createElement(Text, { style: { fontSize: 11, marginBottom: 2 } }, "Target businesses"),
                        React.createElement(Text, { style: { fontSize: 10, color: colors.textMuted } }, "Operations-heavy SMBs")
                    ),
                    React.createElement(View, { style: { flex: 1, textAlign: 'center' } },
                        React.createElement(Text, { style: { fontSize: 24, fontWeight: 'bold', color: colors.peach, marginBottom: 3 } }, "$100K"),
                        React.createElement(Text, { style: { fontSize: 11, marginBottom: 2 } }, "Average contract value"),
                        React.createElement(Text, { style: { fontSize: 10, color: colors.textMuted } }, "Proven with customers")
                    ),
                    React.createElement(View, { style: { flex: 1, textAlign: 'center' } },
                        React.createElement(Text, { style: { fontSize: 24, fontWeight: 'bold', color: colors.peach, marginBottom: 3 } }, "1%"),
                        React.createElement(Text, { style: { fontSize: 11, marginBottom: 2 } }, "Market capture"),
                        React.createElement(Text, { style: { fontSize: 10, color: colors.textMuted } }, "Achievable in 5 years")
                    )
                )
            ),

            // Why now
            React.createElement(View, { style: { backgroundColor: colors.californiaBlue, padding: 16, borderRadius: 12, textAlign: 'center' } },
                React.createElement(Text, { style: { fontSize: 16, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: 6 } }, "Why This Market Is Ready Now"),
                React.createElement(Text, { style: { fontSize: 13, color: 'white', textAlign: 'center' } }, "AI makes custom software profitable at small business scale for the first time")
            )
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
        React.createElement(View, { style: { flex: 1, justifyContent: 'space-between', padding: 24 } },
            // Header
            React.createElement(View, { style: { marginBottom: 40 } },
                React.createElement(Text, { style: { fontSize: 28, fontWeight: 'bold', color: colors.californiaBlue, textAlign: 'center', marginBottom: 12 } }, "The Problem"),
                React.createElement(Text, { style: { fontSize: 16, color: colors.textMuted, textAlign: 'center' } }, "Four massive blockers prevent businesses from getting working systems")
            ),

            // Four problems in a row
            React.createElement(View, { style: { flexDirection: 'row', marginBottom: 32 } },
                React.createElement(View, { style: { flex: 1, backgroundColor: '#FFF8F8', padding: 16, borderRadius: 10, marginRight: 12 } },
                    React.createElement(View, { style: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 } },
                        React.createElement(DollarIcon, { size: 20, color: colors.red }),
                        React.createElement(Text, { style: { fontSize: 14, fontWeight: 'bold', color: colors.red, marginLeft: 6 } }, "Cost")
                    ),
                    React.createElement(Text, { style: { fontSize: 12 } }, "$100K-$500K minimum with no guarantee")
                ),
                React.createElement(View, { style: { flex: 1, backgroundColor: '#FFF8F8', padding: 16, borderRadius: 10, marginRight: 12 } },
                    React.createElement(View, { style: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 } },
                        React.createElement(AlertTriangleIcon, { size: 20, color: colors.red }),
                        React.createElement(Text, { style: { fontSize: 14, fontWeight: 'bold', color: colors.red, marginLeft: 6 } }, "Risk")
                    ),
                    React.createElement(Text, { style: { fontSize: 12 } }, "No ROI visibility before massive commitment")
                ),
                React.createElement(View, { style: { flex: 1, backgroundColor: '#FFF8F8', padding: 16, borderRadius: 10, marginRight: 12 } },
                    React.createElement(View, { style: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 } },
                        React.createElement(ClockIcon, { size: 20, color: colors.red }),
                        React.createElement(Text, { style: { fontSize: 14, fontWeight: 'bold', color: colors.red, marginLeft: 6 } }, "Time")
                    ),
                    React.createElement(Text, { style: { fontSize: 12 } }, "6-18 months minimum delivery")
                ),
                React.createElement(View, { style: { flex: 1, backgroundColor: '#FFF8F8', padding: 16, borderRadius: 10 } },
                    React.createElement(View, { style: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 } },
                        React.createElement(UserIcon, { size: 20, color: colors.red }),
                        React.createElement(Text, { style: { fontSize: 14, fontWeight: 'bold', color: colors.red, marginLeft: 6 } }, "Talent")
                    ),
                    React.createElement(Text, { style: { fontSize: 12 } }, "Can't attract developers who know AI tools")
                )
            ),

            // Middle section
            React.createElement(View, { style: { backgroundColor: colors.backgroundLight, padding: 20, borderRadius: 12, marginBottom: 32 } },
                React.createElement(Text, { style: { fontSize: 16, fontWeight: 'bold', color: colors.californiaBlue, marginBottom: 12, textAlign: 'center' } }, "Expensive consultants and slow IT projects aren't the answer"),
                React.createElement(Text, { style: { fontSize: 13, textAlign: 'center', marginBottom: 6 } }, "Traditional consulting firms charge massive fees with uncertain outcomes"),
                React.createElement(Text, { style: { fontSize: 13, textAlign: 'center' } }, "Business owners need working systems, not technical complexity")
            ),

            // Bottom CTA
            React.createElement(View, { style: { backgroundColor: colors.californiaBlue, padding: 20, borderRadius: 12 } },
                React.createElement(Text, { style: { fontSize: 16, fontWeight: 'bold', color: 'white', textAlign: 'center' } }, "Businesses lose money waiting for solutions that actually solve their problems")
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
        React.createElement(View, { style: { textAlign: 'center', marginTop: 30, marginBottom: 20 } },
            React.createElement(Text, { style: { fontSize: 28, fontWeight: 'bold', marginBottom: 8, color: colors.californiaBlue } }, "The Competition"),
            React.createElement(Text, { style: { fontSize: 16, color: colors.textMuted } }, "Two completely different business models")
        ),

        React.createElement(View, { style: { flex: 1, justifyContent: 'space-between', paddingBottom: 20 } },
            // Competition business model
            React.createElement(View, { style: { marginBottom: 16 } },
                React.createElement(Text, { style: { fontSize: 16, fontWeight: 'bold', marginBottom: 10, color: colors.red, textAlign: 'center' } }, "All AI Coding Tools: Sell Developer Licenses"),
                React.createElement(View, { style: { flexDirection: 'row', gap: 10 } },
                    React.createElement(View, { style: { flex: 1, backgroundColor: '#FFF8F8', padding: 12, borderRadius: 8 } },
                        React.createElement(Text, { style: { fontSize: 12, fontWeight: 'bold', color: colors.red, marginBottom: 4 } }, "GitHub Copilot"),
                        React.createElement(Text, { style: { fontSize: 9, marginBottom: 2 } }, "• $10-39/dev/month"),
                        React.createElement(Text, { style: { fontSize: 9, fontWeight: 'bold', color: colors.red } }, "X Customer builds it")
                    ),
                    React.createElement(View, { style: { flex: 1, backgroundColor: '#FFF8F8', padding: 12, borderRadius: 8 } },
                        React.createElement(Text, { style: { fontSize: 12, fontWeight: 'bold', color: colors.red, marginBottom: 4 } }, "Cursor / Devin AI"),
                        React.createElement(Text, { style: { fontSize: 9, marginBottom: 2 } }, "• $20-500/dev/month"),
                        React.createElement(Text, { style: { fontSize: 9, fontWeight: 'bold', color: colors.red } }, "X Customer owns code")
                    ),
                    React.createElement(View, { style: { flex: 1, backgroundColor: '#FFF8F8', padding: 12, borderRadius: 8 } },
                        React.createElement(Text, { style: { fontSize: 12, fontWeight: 'bold', color: colors.red, marginBottom: 4 } }, "Lovable / v0"),
                        React.createElement(Text, { style: { fontSize: 9, marginBottom: 2 } }, "• $25-50/dev/month"),
                        React.createElement(Text, { style: { fontSize: 9, fontWeight: 'bold', color: colors.red } }, "X Customer manages")
                    )
                )
            ),

            // Noodle Seed difference
            React.createElement(View, { style: { backgroundColor: colors.californiaBlue, padding: 16, borderRadius: 12, marginBottom: 12, textAlign: 'center' } },
                React.createElement(Text, { style: { fontSize: 18, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: 8 } }, "Noodle Seed: Sell Working Software as a Service"),
                React.createElement(View, { style: { flexDirection: 'row', gap: 10, justifyContent: 'center' } },
                    React.createElement(View, { style: { flex: 1 } },
                        React.createElement(Text, { style: { fontSize: 12, color: 'white', fontWeight: 'bold', marginBottom: 2 } }, "Free to Build"),
                        React.createElement(Text, { style: { fontSize: 10, color: 'white' } }, "AI makes code nearly free")
                    ),
                    React.createElement(View, { style: { flex: 1 } },
                        React.createElement(Text, { style: { fontSize: 12, color: 'white', fontWeight: 'bold', marginBottom: 2 } }, "Pay to Use"),
                        React.createElement(Text, { style: { fontSize: 10, color: 'white' } }, "Per user/transaction pricing")
                    ),
                    React.createElement(View, { style: { flex: 1 } },
                        React.createElement(Text, { style: { fontSize: 12, color: 'white', fontWeight: 'bold', marginBottom: 2 } }, "We Own the IP"),
                        React.createElement(Text, { style: { fontSize: 10, color: 'white' } }, "Reuse & resell to others")
                    )
                )
            ),

            // Customer perspective
            React.createElement(View, { style: { backgroundColor: colors.backgroundLight, padding: 14, borderRadius: 12, marginBottom: 10 } },
                React.createElement(Text, { style: { fontSize: 14, fontWeight: 'bold', color: colors.californiaBlue, textAlign: 'center', marginBottom: 6 } }, "From Our Customer's Perspective"),
                React.createElement(Text, { style: { fontSize: 12, textAlign: 'center', lineHeight: 1.3 } }, "An accounting firm partner doesn't want Cursor or Devin - they want an accounts receivable AI agent that works.")
            ),

            React.createElement(View, { style: { backgroundColor: colors.backgroundGreen, padding: 12, borderRadius: 12, textAlign: 'center' } },
                React.createElement(Text, { style: { fontSize: 13, fontWeight: 'bold', color: colors.coralGreen, textAlign: 'center', marginBottom: 3 } }, "We're Not an AI Coding Tool - We're a Software Company"),
                React.createElement(Text, { style: { fontSize: 11, textAlign: 'center' } }, "Our customers never see code. They get working business systems.")
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
        React.createElement(View, { style: { textAlign: 'center', marginTop: 40, marginBottom: 32 } },
            React.createElement(Text, { style: { fontSize: 28, fontWeight: 'bold', marginBottom: 12, color: colors.californiaBlue } }, "The Solution"),
            React.createElement(Text, { style: { fontSize: 18, color: colors.textMuted } }, "Working business systems at product speed")
        ),

        React.createElement(View, { style: { flex: 1, justifyContent: 'center' } },
            React.createElement(View, { style: { backgroundColor: colors.backgroundLight, padding: 20, borderRadius: 12, marginBottom: 20 } },
                React.createElement(Text, { style: { fontSize: 18, fontWeight: 'bold', color: colors.californiaBlue, marginBottom: 18, textAlign: 'center' } }, "The Choice Today"),
                React.createElement(View, { style: { flexDirection: 'row' } },
                    React.createElement(View, { style: { flex: 1, backgroundColor: '#FFF8F8', padding: 18, borderRadius: 10, textAlign: 'center', marginRight: 24 } },
                        React.createElement(Text, { style: { fontSize: 16, fontWeight: 'bold', color: colors.red, marginBottom: 10 } }, "Off-the-Shelf"),
                        React.createElement(Text, { style: { fontSize: 13, lineHeight: 1.4 } }, "Adapt your business + duct tape")
                    ),
                    React.createElement(View, { style: { flex: 1, backgroundColor: '#FFF8F8', padding: 18, borderRadius: 10, textAlign: 'center' } },
                        React.createElement(Text, { style: { fontSize: 16, fontWeight: 'bold', color: colors.red, marginBottom: 10 } }, "Custom Build"),
                        React.createElement(Text, { style: { fontSize: 13, lineHeight: 1.4 } }, "Huge cost, risk & time")
                    )
                )
            ),

            React.createElement(View, { style: { backgroundColor: colors.californiaBlue, padding: 20, borderRadius: 12, marginBottom: 20, textAlign: 'center' } },
                React.createElement(Text, { style: { fontSize: 22, fontWeight: 'bold', color: 'white', textAlign: 'center' } }, "Working business systems, delivered for you, at product price & speed")
            ),

            React.createElement(View, { style: { flexDirection: 'row', gap: 16 } },
                React.createElement(View, { style: { flex: 1, backgroundColor: colors.backgroundGreen, padding: 16, borderRadius: 10, textAlign: 'center' } },
                    React.createElement(Text, { style: { fontSize: 15, fontWeight: 'bold', color: colors.coralGreen, marginBottom: 4 } }, "Pay for Results"),
                    React.createElement(Text, { style: { fontSize: 11, lineHeight: 1.3 } }, "Not consulting")
                ),
                React.createElement(View, { style: { flex: 1, backgroundColor: colors.backgroundPeach, padding: 16, borderRadius: 10, textAlign: 'center' } },
                    React.createElement(Text, { style: { fontSize: 15, fontWeight: 'bold', color: colors.peach, marginBottom: 4 } }, "See It First"),
                    React.createElement(Text, { style: { fontSize: 11, lineHeight: 1.3 } }, "Before you pay")
                ),
                React.createElement(View, { style: { flex: 1, backgroundColor: colors.backgroundLight, padding: 16, borderRadius: 10, textAlign: 'center' } },
                    React.createElement(Text, { style: { fontSize: 15, fontWeight: 'bold', color: colors.californiaBlue, marginBottom: 4 } }, "Same Day"),
                    React.createElement(Text, { style: { fontSize: 11, lineHeight: 1.3 } }, "Delivery")
                ),
                React.createElement(View, { style: { flex: 1, backgroundColor: colors.backgroundLight, padding: 16, borderRadius: 10, textAlign: 'center' } },
                    React.createElement(Text, { style: { fontSize: 15, fontWeight: 'bold', color: colors.californiaBlue, marginBottom: 4 } }, "Operations Team"),
                    React.createElement(Text, { style: { fontSize: 11, lineHeight: 1.3 } }, "We handle everything")
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
        React.createElement(View, { style: { textAlign: 'center', marginTop: 40, marginBottom: 32 } },
            React.createElement(Text, { style: { fontSize: 28, fontWeight: 'bold', marginBottom: 12, color: colors.californiaBlue } }, "Customers & Revenue"),
            React.createElement(Text, { style: { fontSize: 18, color: colors.textMuted } }, "Strong traction with paying customers and Google partnership")
        ),

        React.createElement(View, { style: { flex: 1, justifyContent: 'center' } },

        React.createElement(View, { style: { flexDirection: 'row', gap: 16, marginBottom: 20 } },
            React.createElement(View, { style: { flex: 1, backgroundColor: colors.backgroundGreen, padding: 20, borderRadius: 12, textAlign: 'center' } },
                React.createElement(Text, { style: { fontSize: 36, fontWeight: 'bold', color: colors.coralGreen, marginBottom: 8 } }, "$120K"),
                React.createElement(Text, { style: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 } }, "Contracted ARR"),
                React.createElement(Text, { style: { fontSize: 12, color: colors.textMuted, marginBottom: 4 } }, "3 signed customers (3yr contracts)"),
                React.createElement(Text, { style: { fontSize: 11, fontWeight: 'bold', color: colors.coralGreen } }, "Oct 2024 → May 2025")
            ),
            React.createElement(View, { style: { flex: 1, backgroundColor: colors.backgroundPeach, padding: 20, borderRadius: 12, textAlign: 'center' } },
                React.createElement(Text, { style: { fontSize: 36, fontWeight: 'bold', color: colors.peach, marginBottom: 8 } }, "6-8wks"),
                React.createElement(Text, { style: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 } }, "Current Delivery Time"),
                React.createElement(Text, { style: { fontSize: 12, color: colors.textMuted } }, "Prototypes available immediately")
            )
        ),

        React.createElement(View, { style: { flexDirection: 'row', gap: 16 } },
            React.createElement(View, { style: { flex: 1, backgroundColor: colors.backgroundLight, padding: 14, borderRadius: 10 } },
                React.createElement(Text, { style: { fontSize: 16, fontWeight: 'bold', color: colors.californiaBlue, marginBottom: 10 } }, "Signed Customers"),
                React.createElement(Text, { style: { fontSize: 11, marginBottom: 4, fontWeight: 'bold' } }, "Tech Consulting ($24K ARR)"),
                React.createElement(Text, { style: { fontSize: 9, marginBottom: 6, fontStyle: 'italic' } }, "Software that wins them more clients"),
                React.createElement(Text, { style: { fontSize: 11, marginBottom: 4, fontWeight: 'bold' } }, "Cleaning Co, Edinburgh ($49K ARR)"),
                React.createElement(Text, { style: { fontSize: 9, marginBottom: 6, fontStyle: 'italic' } }, "Operations system that reduces costs"),
                React.createElement(Text, { style: { fontSize: 11, marginBottom: 4, fontWeight: 'bold' } }, "Accounting Firm, LA ($48K ARR)"),
                React.createElement(Text, { style: { fontSize: 9, fontStyle: 'italic' } }, "Collections system that improves cash flow")
            ),
            React.createElement(View, { style: { flex: 1, backgroundColor: colors.backgroundGreen, padding: 14, borderRadius: 10 } },
                React.createElement(Text, { style: { fontSize: 16, fontWeight: 'bold', color: colors.coralGreen, marginBottom: 10 } }, "Google Trial"),
                React.createElement(Text, { style: { fontSize: 12, marginBottom: 6 } }, "• Currently trialling our software"),
                React.createElement(Text, { style: { fontSize: 12, marginBottom: 6 } }, "• Built demo apps for Google Cloud"),
                React.createElement(Text, { style: { fontSize: 12, marginBottom: 6 } }, "• Long shot but strategic opportunity"),
                React.createElement(Text, { style: { fontSize: 12, fontWeight: 'bold', color: colors.coralGreen } }, "• Could be a game-changing win")
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
        React.createElement(View, { style: { textAlign: 'center', marginTop: 40, marginBottom: 32 } },
            React.createElement(Text, { style: { fontSize: 28, fontWeight: 'bold', marginBottom: 12, color: colors.californiaBlue } }, "The Team"),
            React.createElement(Text, { style: { fontSize: 18, color: colors.textMuted } }, "Google-trained founders with proven track record")
        ),

        React.createElement(View, { style: { flex: 1, justifyContent: 'center' } },

        React.createElement(View, { style: { flexDirection: 'row', gap: 20, marginBottom: 20 } },
            React.createElement(View, { style: { flex: 1, backgroundColor: colors.backgroundLight, padding: 20, borderRadius: 12, textAlign: 'center' } },
                React.createElement(View, { style: { marginBottom: 12 } },
                    React.createElement(UserIcon, { size: 48, color: colors.californiaBlue })
                ),
                React.createElement(Text, { style: { fontSize: 18, fontWeight: 'bold', color: colors.californiaBlue, marginBottom: 4 } }, "Fahd Rafi"),
                React.createElement(Text, { style: { fontSize: 14, fontWeight: 'bold', marginBottom: 8 } }, "Founder"),
                React.createElement(Text, { style: { fontSize: 11, lineHeight: 1.3, marginBottom: 3 } }, "• Google, Microsoft, HP, Shell"),
                React.createElement(Text, { style: { fontSize: 11, lineHeight: 1.3, marginBottom: 3 } }, "• Sales, Engineering, Consulting"),
                React.createElement(Text, { style: { fontSize: 11, lineHeight: 1.3, marginBottom: 3 } }, "• MS Computer Science (AI) - UCF"),
                React.createElement(Text, { style: { fontSize: 11, lineHeight: 1.3 } }, "• Post Grad Finance - Oxford")
            ),
            React.createElement(View, { style: { flex: 1, backgroundColor: colors.backgroundPeach, padding: 20, borderRadius: 12, textAlign: 'center' } },
                React.createElement(View, { style: { marginBottom: 12 } },
                    React.createElement(UsersIcon, { size: 48, color: colors.peach })
                ),
                React.createElement(Text, { style: { fontSize: 18, fontWeight: 'bold', color: colors.peach, marginBottom: 4 } }, "Team of 8"),
                React.createElement(Text, { style: { fontSize: 14, fontWeight: 'bold', marginBottom: 8 } }, "Proven Execution"),
                React.createElement(Text, { style: { fontSize: 11, lineHeight: 1.3, marginBottom: 3 } }, "• Core team of 5 built system"),
                React.createElement(Text, { style: { fontSize: 11, lineHeight: 1.3, marginBottom: 3 } }, "• Talent pipeline ready"),
                React.createElement(Text, { style: { fontSize: 11, lineHeight: 1.3 } }, "• Can sell, deliver & automate")
            )
        ),

        React.createElement(View, { style: { backgroundColor: colors.backgroundLight, padding: 20, borderRadius: 12 } },
            React.createElement(Text, { style: { fontSize: 20, fontWeight: 'bold', color: colors.californiaBlue, marginBottom: 16, textAlign: 'center' } }, "Why We'll Succeed"),
            React.createElement(View, { style: { flexDirection: 'row', gap: 16 } },
                React.createElement(View, { style: { flex: 1, textAlign: 'center' } },
                    React.createElement(Text, { style: { fontSize: 32, fontWeight: 'bold', color: colors.californiaBlue, marginBottom: 4 } }, "1"),
                    React.createElement(Text, { style: { fontSize: 14, fontWeight: 'bold', marginBottom: 4 } }, "We Know the Problem"),
                    React.createElement(Text, { style: { fontSize: 12, color: colors.textMuted } }, "Experienced the blockers firsthand")
                ),
                React.createElement(View, { style: { flex: 1, textAlign: 'center' } },
                    React.createElement(Text, { style: { fontSize: 32, fontWeight: 'bold', color: colors.coralGreen, marginBottom: 4 } }, "2"),
                    React.createElement(Text, { style: { fontSize: 14, fontWeight: 'bold', marginBottom: 4 } }, "We Have a Solution"),
                    React.createElement(Text, { style: { fontSize: 12, color: colors.textMuted } }, "Built system that delivers immediate business value")
                ),
                React.createElement(View, { style: { flex: 1, textAlign: 'center' } },
                    React.createElement(Text, { style: { fontSize: 32, fontWeight: 'bold', color: colors.peach, marginBottom: 4 } }, "3"),
                    React.createElement(Text, { style: { fontSize: 14, fontWeight: 'bold', marginBottom: 4 } }, "We Have Customers"),
                    React.createElement(Text, { style: { fontSize: 12, color: colors.textMuted } }, "$120K contracted ARR proves demand")
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
        React.createElement(View, { style: { textAlign: 'center', marginTop: 40, marginBottom: 32 } },
            React.createElement(Text, { style: { fontSize: 28, fontWeight: 'bold', marginBottom: 12, color: colors.californiaBlue } }, "The Plan"),
            React.createElement(Text, { style: { fontSize: 18, color: colors.textMuted } }, "Strategic roadmap to $1M ARR in 12 months")
        ),

        React.createElement(View, { style: { flex: 1, justifyContent: 'center' } },

        React.createElement(View, { style: { backgroundColor: colors.backgroundLight, padding: 20, borderRadius: 12, marginBottom: 20 } },
            React.createElement(Text, { style: { fontSize: 20, fontWeight: 'bold', color: colors.californiaBlue, marginBottom: 16, textAlign: 'center' } }, "Automation Roadmap"),
            React.createElement(View, { style: { flexDirection: 'row', gap: 16, marginBottom: 16 } },
                React.createElement(View, { style: { flex: 1, backgroundColor: colors.backgroundGreen, padding: 14, borderRadius: 8 } },
                    React.createElement(Text, { style: { fontSize: 16, fontWeight: 'bold', color: colors.coralGreen, marginBottom: 8, textAlign: 'center' } }, "Now"),
                    React.createElement(Text, { style: { fontSize: 11, lineHeight: 1.4, marginBottom: 3 } }, "• Automated prototypes"),
                    React.createElement(Text, { style: { fontSize: 11, lineHeight: 1.4, marginBottom: 3 } }, "• 6-8 week delivery"),
                    React.createElement(Text, { style: { fontSize: 11, lineHeight: 1.4 } }, "• $120K ARR")
                ),
                React.createElement(View, { style: { flex: 1, backgroundColor: colors.backgroundPeach, padding: 14, borderRadius: 8 } },
                    React.createElement(Text, { style: { fontSize: 16, fontWeight: 'bold', color: colors.peach, marginBottom: 8, textAlign: 'center' } }, "6 Months"),
                    React.createElement(Text, { style: { fontSize: 11, lineHeight: 1.4, marginBottom: 3 } }, "• 6-8 day delivery"),
                    React.createElement(Text, { style: { fontSize: 11, lineHeight: 1.4, marginBottom: 3 } }, "• Enhanced automation"),
                    React.createElement(Text, { style: { fontSize: 11, lineHeight: 1.4 } }, "• $300K ARR")
                ),
                React.createElement(View, { style: { flex: 1, backgroundColor: colors.backgroundLight, padding: 14, borderRadius: 8, borderWidth: 2, borderColor: colors.californiaBlue, borderStyle: 'solid' } },
                    React.createElement(Text, { style: { fontSize: 16, fontWeight: 'bold', color: colors.californiaBlue, marginBottom: 8, textAlign: 'center' } }, "12 Months"),
                    React.createElement(Text, { style: { fontSize: 11, lineHeight: 1.4, marginBottom: 3 } }, "• Complete automation"),
                    React.createElement(Text, { style: { fontSize: 11, lineHeight: 1.4, marginBottom: 3 } }, "• Full ROI package"),
                    React.createElement(Text, { style: { fontSize: 11, lineHeight: 1.4 } }, "• $1M ARR")
                )
            )
        ),

        React.createElement(View, { style: { flexDirection: 'row', gap: 16 } },
            React.createElement(View, { style: { flex: 1, backgroundColor: colors.backgroundGreen, padding: 14, borderRadius: 10 } },
                React.createElement(Text, { style: { fontSize: 16, fontWeight: 'bold', color: colors.coralGreen, marginBottom: 8, textAlign: 'center' } }, "Business Growth"),
                React.createElement(Text, { style: { fontSize: 11, lineHeight: 1.3, marginBottom: 3 } }, "• Scale to 20-30 customers"),
                React.createElement(Text, { style: { fontSize: 11, lineHeight: 1.3, marginBottom: 3 } }, "• Launch partner channel"),
                React.createElement(Text, { style: { fontSize: 11, lineHeight: 1.3, marginBottom: 3 } }, "• 2 sales + founder"),
                React.createElement(Text, { style: { fontSize: 11, lineHeight: 1.3 } }, "• Focus US market")
            ),
            React.createElement(View, { style: { flex: 1, backgroundColor: colors.backgroundPeach, padding: 14, borderRadius: 10 } },
                React.createElement(Text, { style: { fontSize: 16, fontWeight: 'bold', color: colors.peach, marginBottom: 8, textAlign: 'center' } }, "Platform Evolution"),
                React.createElement(Text, { style: { fontSize: 11, lineHeight: 1.3, marginBottom: 3 } }, "• AI factory completion"),
                React.createElement(Text, { style: { fontSize: 11, lineHeight: 1.3, marginBottom: 3 } }, "• Auto sales collateral"),
                React.createElement(Text, { style: { fontSize: 11, lineHeight: 1.3, marginBottom: 3 } }, "• Dynamic ROI calculators"),
                React.createElement(Text, { style: { fontSize: 11, lineHeight: 1.3 } }, "• Just-in-time everything")
            ),
            React.createElement(View, { style: { flex: 1, backgroundColor: colors.backgroundLight, padding: 14, borderRadius: 10 } },
                React.createElement(Text, { style: { fontSize: 16, fontWeight: 'bold', color: colors.californiaBlue, marginBottom: 8, textAlign: 'center' } }, "Key Hires"),
                React.createElement(Text, { style: { fontSize: 11, lineHeight: 1.3, marginBottom: 2 } }, "• Sales & Partnerships Lead"),
                React.createElement(Text, { style: { fontSize: 9, fontStyle: 'italic', color: colors.textMuted, marginBottom: 4 } }, "  (currently: Founder)"),
                React.createElement(Text, { style: { fontSize: 11, lineHeight: 1.3, marginBottom: 2 } }, "• CTO - System architect"),
                React.createElement(Text, { style: { fontSize: 9, fontStyle: 'italic', color: colors.textMuted, marginBottom: 4 } }, "  (currently: Founder)"),
                React.createElement(Text, { style: { fontSize: 11, lineHeight: 1.3, marginBottom: 2 } }, "• UX Lead"),
                React.createElement(Text, { style: { fontSize: 9, fontStyle: 'italic', color: colors.textMuted } }, "  (currently: team)")
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
        React.createElement(View, { style: { textAlign: 'center', marginTop: 40, marginBottom: 32 } },
            React.createElement(Text, { style: { fontSize: 28, fontWeight: 'bold', marginBottom: 12, color: colors.californiaBlue } }, "The Investment"),
            React.createElement(Text, { style: { fontSize: 20, fontWeight: 'bold', color: colors.coralGreen } }, "$2.5M Seed to scale proven model")
        ),

        React.createElement(View, { style: { flex: 1, justifyContent: 'center' } },

        React.createElement(View, { style: { flexDirection: 'row', gap: 16, marginBottom: 20 } },
            React.createElement(View, { style: { flex: 1, backgroundColor: colors.backgroundGreen, padding: 20, borderRadius: 12, textAlign: 'center' } },
                React.createElement(Text, { style: { fontSize: 36, fontWeight: 'bold', color: colors.coralGreen, marginBottom: 8 } }, "$2.5M"),
                React.createElement(Text, { style: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 } }, "Seed Round"),
                React.createElement(Text, { style: { fontSize: 12, color: colors.textMuted } }, "18 months runway to $1M ARR")
            ),
            React.createElement(View, { style: { flex: 1, backgroundColor: colors.backgroundPeach, padding: 20, borderRadius: 12, textAlign: 'center' } },
                React.createElement(Text, { style: { fontSize: 36, fontWeight: 'bold', color: colors.peach, marginBottom: 8 } }, "20x"),
                React.createElement(Text, { style: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 } }, "Target Return"),
                React.createElement(Text, { style: { fontSize: 12, color: colors.textMuted } }, "Based on $100M+ exit potential")
            )
        ),

        React.createElement(View, { style: { backgroundColor: colors.backgroundLight, padding: 16, borderRadius: 12, marginBottom: 16 } },
            React.createElement(Text, { style: { fontSize: 18, fontWeight: 'bold', color: colors.californiaBlue, marginBottom: 12, textAlign: 'center' } }, "Use of Funds"),
            React.createElement(View, { style: { flexDirection: 'row', gap: 12 } },
                React.createElement(View, { style: { flex: 1, textAlign: 'center', padding: 10, backgroundColor: 'white', borderRadius: 8 } },
                    React.createElement(Text, { style: { fontSize: 24, fontWeight: 'bold', color: colors.californiaBlue, marginBottom: 3 } }, "40%"),
                    React.createElement(Text, { style: { fontSize: 11, fontWeight: 'bold' } }, "AI Factory"),
                    React.createElement(Text, { style: { fontSize: 9, color: colors.textMuted } }, "Complete automation")
                ),
                React.createElement(View, { style: { flex: 1, textAlign: 'center', padding: 10, backgroundColor: 'white', borderRadius: 8 } },
                    React.createElement(Text, { style: { fontSize: 24, fontWeight: 'bold', color: colors.coralGreen, marginBottom: 3 } }, "30%"),
                    React.createElement(Text, { style: { fontSize: 11, fontWeight: 'bold' } }, "Sales & Marketing"),
                    React.createElement(Text, { style: { fontSize: 9, color: colors.textMuted } }, "Customer acquisition")
                ),
                React.createElement(View, { style: { flex: 1, textAlign: 'center', padding: 10, backgroundColor: 'white', borderRadius: 8 } },
                    React.createElement(Text, { style: { fontSize: 24, fontWeight: 'bold', color: colors.peach, marginBottom: 3 } }, "30%"),
                    React.createElement(Text, { style: { fontSize: 11, fontWeight: 'bold' } }, "Team & Operations"),
                    React.createElement(Text, { style: { fontSize: 9, color: colors.textMuted } }, "Scale the team")
                )
            )
        ),

        React.createElement(View, { style: { backgroundColor: colors.californiaBlue, padding: 16, borderRadius: 12, textAlign: 'center' } },
            React.createElement(Text, { style: { fontSize: 16, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: 6 } }, "Join Us Now"),
            React.createElement(Text, { style: { fontSize: 14, color: 'white', textAlign: 'center', marginBottom: 4 } }, "Fahd Rafi, Founder"),
            React.createElement(Text, { style: { fontSize: 13, color: 'white', textAlign: 'center', marginBottom: 4 } }, "fahd@noodleseed.com"),
            React.createElement(Text, { style: { fontSize: 12, color: 'white', textAlign: 'center', fontStyle: 'italic' } }, "Live demo: noodleseed.com")
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
            React.createElement(View, { style: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 32 } },
                React.createElement(Image, { 
                    src: logoPath, 
                    style: { width: 400, height: 'auto', maxHeight: 80 } 
                })
            ),
            
            React.createElement(View, { style: { backgroundColor: colors.backgroundLight, padding: 24, borderRadius: 12, marginBottom: 32 } },
                React.createElement(Text, { style: { fontSize: 18, fontStyle: 'italic', color: colors.californiaBlue, textAlign: 'center', marginBottom: 12, lineHeight: 1.4 } }, "\"Every business is a software business now. The question is: Will you build it or buy it ready-made?\""),
                React.createElement(Text, { style: { fontSize: 14, color: colors.textMuted, textAlign: 'center', marginBottom: 20 } }, "— Satya Nadella"),
                React.createElement(View, { style: { textAlign: 'center' } },
                    React.createElement(Text, { style: { fontSize: 16, fontWeight: 'bold', color: colors.californiaBlue, textAlign: 'center', marginBottom: 8 } }, "At Noodle Seed, we change the"),
                    React.createElement(Text, { style: { fontSize: 20, fontWeight: 'bold', color: colors.textMuted, textAlign: 'center', marginBottom: 4 } }, "Build OR Buy"),
                    React.createElement(Text, { style: { fontSize: 16, color: colors.californiaBlue, textAlign: 'center', marginBottom: 4 } }, "to"),
                    React.createElement(Text, { style: { fontSize: 20, fontWeight: 'bold', color: colors.californiaBlue, textAlign: 'center' } }, "Build AND Buy")
                )
            ),
            
            React.createElement(View, { style: { backgroundColor: colors.californiaBlue, padding: 20, borderRadius: 12 } },
                React.createElement(Text, { style: { fontSize: 18, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: 8 } }, "Experience the Future Today"),
                React.createElement(Text, { style: { fontSize: 16, color: 'white', textAlign: 'center' } }, "noodleseed.com")
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

// Main execution
if (import.meta.url === `file://${process.argv[1]}`) {
    generatePDF()
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