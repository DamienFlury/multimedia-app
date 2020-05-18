module.exports = {
  purge: ['./**/*.tsx'],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'serif'],
    },
    extend: {
      textColor: {
        default: 'var(--color-text-default)',
      },
      backgroundColor: {
        default: {
          800: 'var(--color-bg-default-800)',
          700: 'var(--color-bg-default-700)',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
