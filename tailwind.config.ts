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
