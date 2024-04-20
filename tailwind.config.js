/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('flowbite/plugin')
  ],
}
