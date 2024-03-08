import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        'mono': ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
        'serif': ['var(--font-serif)', ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        read: ['.9375rem', '1.375rem'],
      },
      fontWeight: {
        inherit: 'inherit',
      },
      screens: {
        '<sm': { 'max': '639px' },
        '<md': { 'max': '767px' },
        '<lg': { 'max': '1023px' },
        '<xl': { 'max': '1279px' },
        '3xl': '1600px',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        body: 'hsl(var(--body))',
        button: 'hsl(var(--button))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          fg: 'hsl(var(--primary-fg))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          fg: 'hsl(var(--secondary-fg))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          fg: 'hsl(var(--destructive-fg))',
          border: 'hsl(var(--destructive-border))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          fg: 'hsl(var(--warning-fg))',
          border: 'hsl(var(--warning-border))',
        },
        success: {
          DEFAULT: 'hsl(var(--success))',
          fg: 'hsl(var(--success-fg))',
          border: 'hsl(var(--success-border))',
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          fg: 'hsl(var(--info-fg))',
          border: 'hsl(var(--info-border))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          fg: 'hsl(var(--muted-fg))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          fg: 'hsl(var(--accent-fg))',
        },
        solid: {
          DEFAULT: 'hsl(var(--solid))',
          fg: 'hsl(var(--solid-fg))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          fg: 'hsl(var(--popover-fg))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          fg: 'hsl(var(--card-fg))',
        },
        code: {
          fg: 'var(--shiki-light)',
          bg: 'var(--shiki-light-bg)',
          'fg-dark': 'var(--shiki-dark)',
          'bg-dark': 'var(--shiki-dark-bg)',
        }
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        'xl-1': 'calc(var(--radius) + 3px)',
        lg: 'var(--radius)',
        'lg-1': 'calc(var(--radius) - 1px)',
        md: 'calc(var(--radius) - 2px)',
        'md-1': 'calc(var(--radius) - 3px)',
        sm: 'calc(var(--radius) - 4px)',
        'sm-1': 'calc(var(--radius) - 5px)',
      },
      boxShadow: {
        'solid-xs': '1px 1px hsl(var(--solid))',
        'solid-sm': '1.5px 1.5px hsl(var(--solid))',
        'solid-md': '2px 2px hsl(var(--solid))',
        'solid-lg': '3px 3px hsl(var(--solid))',
        'solid-xl': '4px 4px hsl(var(--solid))',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-code-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-code-height)' },
          to: { height: '0' },
        },
        'collapsible-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-collapsible-code-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-code-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-out',
        'collapsible-up': 'collapsible-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
    require('./lib/tailwind-plugins/not-first'),
    require('./lib/tailwind-plugins/not-last'),
    require('./lib/tailwind-plugins/next-sibling'),
  ],
}
export default config
