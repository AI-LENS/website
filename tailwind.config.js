/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './index.html',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      animation: {
        'scroll-contained': 'scroll-contained 20s linear infinite',
        'logo-enter': 'logo-enter 1.5s ease-out infinite',
        'scroll-loop': 'scroll-loop 10s linear infinite'
      },
      keyframes: {
        'scroll-contained': {
          '0%': { 
            transform: 'translateX(0)'
          },
          '100%': { 
            transform: 'translateX(calc(var(--logo-width) * -5 - var(--logo-gap) * 5))'
          }
        },
        'logo-enter': {
          '0%, 100%': { 
            transform: 'rotateY(30deg) translateZ(50px)',
            opacity: '0.3'
          },
          '25%, 75%': { 
            transform: 'rotateY(0deg) translateZ(0)',
            opacity: '1'
          },
        },
        'scroll-loop': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.33%)' }
        }
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: [{
      dark: {
        ...require("daisyui/src/theming/themes")["dark"],
        "base-100": "#000000",
        "base-200": "#000000",
        "base-300": "#000000",
        neutral: "#000000",
        "neutral-content": "#ffffff",
      },
    }],
  },
}

