const TailwindForms = require('@tailwindcss/forms')

module.exports = {
  mode: 'jit',
  important: true,

  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],

  plugins: [
    TailwindForms
  ]
}
