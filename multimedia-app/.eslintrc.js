module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  plugins: ['prettier'],
  extends: [
      `react-app`,
      `prettier`,
      `prettier/react`,
      `plugin:prettier/recommended`
    ],
  rules: {
  }
}
