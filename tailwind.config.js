/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        concept: {
          dark: '#0B132B',      // Base Dark Navy
          slate: '#1C2541',     // Card Surface
          card: '#161F38',      // Elevated Card
          border: '#2A365C',    // Subtle Border
          accent: '#00E599',    // Vibrant Cyan / Mint
          'accent-glow': '#00F090',
          blue: '#2563EB',      // Royal Blue
          'blue-hover': '#1D4ED8',
          text: '#F8FAFC',      // Primary Text
          muted: '#94A3B8',     // Secondary Text
          gold: '#F59E0B',      // Warning / Highlight
          rose: '#F43F5E',      // Danger / Alert
        },
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 229, 153, 0.3)',
        'glow-blue': '0 0 25px -5px rgba(37, 99, 235, 0.4)',
      },
    },
  },
  plugins: [],
}
