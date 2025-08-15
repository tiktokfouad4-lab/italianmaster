module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Warm Terracotta
        primary: {
          DEFAULT: "#C4622D", // warm-terracotta
          50: "#FDF7F3", // warm-terracotta-50
          100: "#F9E8DC", // warm-terracotta-100
          200: "#F2D1B9", // warm-terracotta-200
          300: "#E8B496", // warm-terracotta-300
          400: "#D68B5F", // warm-terracotta-400
          500: "#C4622D", // warm-terracotta-500
          600: "#A54F24", // warm-terracotta-600
          700: "#873F1C", // warm-terracotta-700
          800: "#6A3116", // warm-terracotta-800
          900: "#552612", // warm-terracotta-900
        },
        
        // Secondary Colors - Sage Green
        secondary: {
          DEFAULT: "#7A9B76", // sage-green
          50: "#F4F7F4", // sage-green-50
          100: "#E6EDE5", // sage-green-100
          200: "#CDDCCB", // sage-green-200
          300: "#B0C6AD", // sage-green-300
          400: "#95B091", // sage-green-400
          500: "#7A9B76", // sage-green-500
          600: "#658062", // sage-green-600
          700: "#52664F", // sage-green-700
          800: "#404D3E", // sage-green-800
          900: "#333F32", // sage-green-900
        },
        
        // Accent Colors - Golden Yellow
        accent: {
          DEFAULT: "#E8B86D", // golden-yellow
          50: "#FDF9F2", // golden-yellow-50
          100: "#FAF0E0", // golden-yellow-100
          200: "#F4E0C1", // golden-yellow-200
          300: "#EDCB97", // golden-yellow-300
          400: "#E8B86D", // golden-yellow-400
          500: "#D4A555", // golden-yellow-500
          600: "#B8903F", // golden-yellow-600
          700: "#967632", // golden-yellow-700
          800: "#755D28", // golden-yellow-800
          900: "#5F4A21", // golden-yellow-900
        },
        
        // Background Colors
        background: "#FDFCFA", // warm-off-white
        surface: "#F8F6F3", // subtle-cream
        
        // Text Colors
        "text-primary": "#2C2C2C", // near-black
        "text-secondary": "#6B6B6B", // medium-gray
        
        // Status Colors
        success: {
          DEFAULT: "#5D8A5A", // muted-green
          50: "#F3F7F3", // muted-green-50
          100: "#E4EDE4", // muted-green-100
          200: "#C9DBC8", // muted-green-200
          300: "#A8C4A7", // muted-green-300
          400: "#82A781", // muted-green-400
          500: "#5D8A5A", // muted-green-500
          600: "#4D734B", // muted-green-600
          700: "#3E5C3D", // muted-green-700
          800: "#314730", // muted-green-800
          900: "#273A26", // muted-green-900
        },
        
        warning: {
          DEFAULT: "#D4941E", // amber
          50: "#FDF8F0", // amber-50
          100: "#FAEDDC", // amber-100
          200: "#F4DAB9", // amber-200
          300: "#ECC190", // amber-300
          400: "#E0AA5A", // amber-400
          500: "#D4941E", // amber-500
          600: "#B67D18", // amber-600
          700: "#956514", // amber-700
          800: "#754F12", // amber-800
          900: "#604111", // amber-900
        },
        
        error: {
          DEFAULT: "#B85450", // muted-red
          50: "#F9F3F3", // muted-red-50
          100: "#F1E4E4", // muted-red-100
          200: "#E3CACA", // muted-red-200
          300: "#D1AAAA", // muted-red-300
          400: "#C47F7B", // muted-red-400
          500: "#B85450", // muted-red-500
          600: "#9A4642", // muted-red-600
          700: "#7D3935", // muted-red-700
          800: "#622D2A", // muted-red-800
          900: "#502523", // muted-red-900
        },
      },
      
      fontFamily: {
        heading: ['Inter', 'sans-serif'], // Modern geometric sans-serif
        body: ['Source Sans Pro', 'sans-serif'], // Humanist design for extended reading
        caption: ['Nunito Sans', 'sans-serif'], // Friendly rounded letterforms
        mono: ['JetBrains Mono', 'monospace'], // Monospace for pronunciation guides
      },
      
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
      },
      
      boxShadow: {
        'soft': '0 2px 8px rgba(196, 98, 45, 0.08)',
        'medium': '0 4px 12px rgba(196, 98, 45, 0.1)',
        'strong': '0 8px 24px rgba(196, 98, 45, 0.12)',
        'floating': '0 4px 12px rgba(0,0,0,0.1)',
      },
      
      borderRadius: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-out-custom': 'ease-out',
      },
      
      animation: {
        'scale-hover': 'scale 200ms ease-out',
        'slide-in-ltr': 'slideInLTR 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-in-rtl': 'slideInRTL 300ms cubic-bezier(0.4, 0, 0.2, 1)',
      },
      
      keyframes: {
        scale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.02)' },
        },
        slideInLTR: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInRTL: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      
      backgroundImage: {
        'mediterranean-gradient': 'linear-gradient(135deg, #f8f6f3 0%, #f1ede7 100%)',
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [],
}