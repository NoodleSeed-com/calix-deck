import React from 'react';
import { Svg, Path, Circle, Line, Polyline } from '@react-pdf/renderer';
import { colors } from '../styles.js';

// Lucide-based icon components optimized for React PDF
export function TrendingUpIcon({ size = 24, color = colors.californiaBlue }) {
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

export function ClockIcon({ size = 24, color = colors.textMuted }) {
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

export function CheckIcon({ size = 24, color = colors.success }) {
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

export function WrenchIcon({ size = 24, color = colors.secondary }) {
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

export function CoinsIcon({ size = 24, color = colors.primary }) {
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
            d: "M10.34 18A6 6 0 0 1 18.09 10.37", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        })
    );
}

export function UserIcon({ size = 24, color = colors.californiaBlue }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24" },
        React.createElement(Path, { 
            d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        }),
        React.createElement(Circle, { 
            cx: "12", 
            cy: "7", 
            r: "4", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2" 
        })
    );
}

export function UsersIcon({ size = 24, color = colors.peach }) {
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

export function ShieldIcon({ size = 24, color = colors.success }) {
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

export function FactoryIcon({ size = 24, color = colors.secondary }) {
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

export function HandshakeIcon({ size = 24, color = colors.primary }) {
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

export function AlertTriangleIcon({ size = 24, color = colors.red }) {
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

export function NetworkIcon({ size = 24, color = colors.californiaBlue }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24" },
        React.createElement(Path, { 
            d: "M9 12h6", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        }),
        React.createElement(Path, { 
            d: "M12 6v6", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        }),
        React.createElement(Path, { 
            d: "M12 18v-6", 
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
        }),
        React.createElement(Circle, { 
            cx: "19", 
            cy: "12", 
            r: "2", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2" 
        }),
        React.createElement(Circle, { 
            cx: "5", 
            cy: "12", 
            r: "2", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2" 
        })
    );
}

export function ServerIcon({ size = 24, color = colors.secondary }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24" },
        React.createElement(Path, { 
            d: "M20 7H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2Z", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        }),
        React.createElement(Path, { 
            d: "M20 17H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2Z", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        }),
        React.createElement(Path, { 
            d: "M6 4h.01", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        }),
        React.createElement(Path, { 
            d: "M6 14h.01", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        })
    );
}

export function ZapIcon({ size = 24, color = colors.warning }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24" },
        React.createElement(Path, { 
            d: "M13 2L3 14h9l-1 8 10-12h-9l1-8Z", 
            fill: "none", 
            stroke: color, 
            strokeWidth: "2", 
            strokeLinecap: "round", 
            strokeLinejoin: "round" 
        })
    );
}

export function SettingsIcon({ size = 24, color = colors.textMuted }) {
    return React.createElement(Svg, { width: size, height: size, viewBox: "0 0 24 24" },
        React.createElement(Path, { 
            d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z", 
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