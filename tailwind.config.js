/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './scripts/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#FFFFFF',
          dark:    '#222222',
        },
        surface: {
          primary:  '#222222',
          card:     '#F7F7F7',
          disabled: '#DDDDDD',
        },
        content: {
          primary:  '#222222',
          secondary:'#717171',
          tertiary: '#919191',
          disabled: '#B0B0B0',
          inverse:  '#FFFFFF',
          positive: '#00654F',
          caution:  '#E07912',
          negative: '#C13515',
        },
        // Brand accent color — indigo
        accent: {
          DEFAULT: '#4F46E5',
          light:   '#818CF8',
          dark:    '#4338CA',
        },
        // Border colors — using 'stroke' to avoid conflict with Tailwind's border-width utilities
        stroke: {
          DEFAULT:  '#E8E8E8',
          mid:      '#B0B0B0',
          selected: '#222222',
        },
      },
      fontFamily: {
        satoshi: ['Satoshi', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      borderRadius: {
        sm:      '8px',
        DEFAULT: '12px',
        pill:    '100px',
      },
      spacing: {
        // Override Tailwind spacing to exactly match design tokens
        // Tailwind default already matches: 1=4px, 2=8px, 4=16px, 6=24px, 9=36px, 12=48px, 16=64px
      },
    },
  },
  plugins: [],
}
