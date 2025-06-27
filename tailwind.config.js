/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1f766f',
          50: '#f0fdfa',
          100: '#ccfbf1',
          500: '#1f766f',
          600: '#1a665c',
          700: '#155650',
        },
        secondary: {
          DEFAULT: '#6b7280',
          50: '#f9fafb',
          100: '#f3f4f6',
          500: '#6b7280',
          700: '#374151',
          900: '#111827',
        },
        accent: {
          yellow: '#fbbf24',
          coral: '#f87171',
          blue: '#3b82f6',
          mint: '#34d399',
        }
      }
    },
  },
  plugins: [],
}