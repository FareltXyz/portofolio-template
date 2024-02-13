/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
     'md': '768px',
     'lg': '1024px',
      'xl': '1280px',
     '2xl': '1536px'
    },
    extend: {
      keyframes: {
        'rgbtransition': {
          '10%': { color: '#c62707' },
          '20%': { color: '#c2c507' },
          '30%': { color: '#1dc507' },
          '40%': { color: '#07c5c2' },
          '50%': { color: '#1d07c5' },
          '60%': { color: '#9207c5' },
          '70%': { color: '#c207c5' },
          '80%': { color: '#c50776' },
          '90%': { color: '#c50740' },
          '100%': { color: '#c62707' }
        }
      },
      animation: {
        'rgb-color': "rgbtransition 0.8s linear infinite"
      }
    },
  },
  plugins: [require("daisyui")],
};
