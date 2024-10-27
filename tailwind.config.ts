import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-blue":'#204AF8E5',
        'bg-black':'#000814',
        'discord-violate':'#7B61FF'
      },
      dropShadow: {
        'outline-white': '0px 4px 0px #FFFFFF'
      },
      fontFamily: {
        "clash-display": ['ClashDisplay', 'sans-serif'],
        //Neue Montreal
        "neue-bold":['NeueMont_Bold', 'sans-serif'],
        "neue-regular":['NeueMont_Regular', 'sans-serif'],
        "neue-medium":['NeueMont_Medium', 'sans-serif'],
        "neue-thin":['NeueMont_Thin', 'sans-serif'],
        //Dx Dynamic
        "dx-bold":['DxDynamix-Bold', 'sans-serif'],
        //Awesome serif
        "awesome":['AwesomeSerif', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
