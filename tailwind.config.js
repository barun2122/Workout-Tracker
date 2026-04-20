/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './scripts/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        canvas:    '#F0F0F0',
        foreground:'#121212',
        'b-red':   '#D02020',
        'b-blue':  '#1040C0',
        'b-yellow':'#F0C020',
        muted:     '#E0E0E0',
        // Semantic tokens (used by app.js template strings + @apply)
        surface: {
          primary:  '#121212',
          card:     '#FFFFFF',
          disabled: '#D0D0D0',
        },
        content: {
          primary:  '#121212',
          secondary:'#555555',
          tertiary: '#888888',
          disabled: '#AAAAAA',
          inverse:  '#FFFFFF',
          positive: '#006640',
          caution:  '#C07010',
          negative: '#C02020',
        },
        stroke: {
          DEFAULT:  '#121212',
          mid:      '#888888',
          selected: '#121212',
        },
      },
      fontFamily: {
        sans:   ['Outfit', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      borderRadius: {
        none:    '0px',
        sm:      '0px',
        DEFAULT: '0px',
        pill:    '9999px',
        full:    '9999px',
        xl:      '0px',
        '2xl':   '0px',
      },
      boxShadow: {
        'hard-xs': '2px 2px 0px 0px #121212',
        'hard-sm': '3px 3px 0px 0px #121212',
        'hard':    '4px 4px 0px 0px #121212',
        'hard-md': '6px 6px 0px 0px #121212',
        'hard-lg': '8px 8px 0px 0px #121212',
      },
    },
  },
  plugins: [],
}
