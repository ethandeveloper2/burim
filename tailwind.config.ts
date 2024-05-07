import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'grey': {
        'disable': '#9A9A9A',
        '50': '#F9F9F9', 
        '100': '#EEEEEE', 
        '200': '#E1E1E1', 
        '300': '#CFCFCF',
        '400': '#B8B7B7', 
        '500': '#808080', 
        '700': '#414040',
        '800': '#272727', 
      },
      'green': {
        '1' : '#2E6C39',
        '2' : '#298619',
      }
    },
    screens: {
      'lg': '1300px',
    },
  },
  plugins: [],
};
export default config;
