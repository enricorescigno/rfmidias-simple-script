
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F2D680',
          dark: '#9C7A1D',
        },
        copper: {
          DEFAULT: '#B87333',
          light: '#E0A76B',
          dark: '#8B4513',
        },
        dark: {
          DEFAULT: '#121212',
          lighter: '#1A1A1A',
          light: '#222222',
          medium: '#333333',
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        "accordion-down": {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        "accordion-up": {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        "fade-in": {
          "0%": { opacity: '0' },
          "100%": { opacity: '1' }
        },
        "fade-out": {
          "0%": { opacity: '1' },
          "100%": { opacity: '0' }
        },
        "slide-up": {
          "0%": { transform: 'translateY(20px)', opacity: '0' },
          "100%": { transform: 'translateY(0)', opacity: '1' }
        },
        "slide-down": {
          "0%": { transform: 'translateY(-20px)', opacity: '0' },
          "100%": { transform: 'translateY(0)', opacity: '1' }
        },
        "scale-in": {
          "0%": { transform: 'scale(0.9)', opacity: '0' },
          "100%": { transform: 'scale(1)', opacity: '1' }
        },
        "glow": {
          "0%": { boxShadow: '0 0 0px rgba(212, 175, 55, 0)' },
          "100%": { boxShadow: '0 0 15px rgba(212, 175, 55, 0.5)' }
        },
        "bounce-right": {
          "0%, 100%": { transform: 'translateX(0)' },
          "50%": { transform: 'translateX(8px)' }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-out": "fade-out 0.5s ease-out forwards",
        "slide-up": "slide-up 0.7s ease-out forwards",
        "slide-down": "slide-down 0.7s ease-out forwards",
        "scale-in": "scale-in 0.7s ease-out forwards",
        "glow": "glow 1.5s ease-in-out infinite alternate",
        "bounce-right": "bounce-right 1.2s infinite"
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
