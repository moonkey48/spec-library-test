/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Identity
        'sync-teal': '#1275FF',
        // Secondary Gradients
        'gradient-lime': '#DBFF99',
        'gradient-yellow': '#C0FF4C',
        'gradient-cyan': '#36FCDE',
        // Backgrounds
        'bg-light': '#FFFFFF',
        'bg-dark': '#1A1C1E',
        // Semantic
        'alert-red': '#E62117',
        'success-green': '#28A745',
      },
      fontFamily: {
        'sans': ['Pretendard Variable', 'system-ui', 'sans-serif'],
        'ai': ['Line Seed', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['28px', { lineHeight: '1.4', fontWeight: '700' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '500' }],
        'caption': ['12px', { lineHeight: '1.4', fontWeight: '400' }],
        'ai-voice': ['18px', { lineHeight: '1.6', fontWeight: '400', fontStyle: 'italic' }],
      },
      borderRadius: {
        'main': '24px',
        'inner': '12px',
      },
      spacing: {
        'personal': '16px',
        'consensus': '32px',
        'driving': '40px',
      },
      backdropBlur: {
        'glass': '20px',
      },
      transitionDuration: {
        'optimal': '300ms',
      },
      transitionTimingFunction: {
        'natural': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      scale: {
        'touch': '0.98',
      },
    },
  },
  plugins: [],
}
