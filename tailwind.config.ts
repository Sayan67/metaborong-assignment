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
        "primary-blue": "#204AF8E5",
        "bg-black": "#000814",
        "discord-violate": "#7B61FF",
      },
      boxShadow: {
        "outline-white": "2px 2px 0px #FFFFFF",
        "thick-text-outline": "0px 0px 0px 2px #FFFFFF",
      },
      dropShadow: {
        "outline-white": "2px 2px 0px #FFFFFF",
        "thick-text-outline": "0px 0px 0px 2px #FFFFFF",
      },
      fontFamily: {
        "clash-display": ["ClashDisplay", "sans-serif"],
        //Neue Montreal
        "neue-bold": ["NeueMont_Bold", "sans-serif"],
        "neue-regular": ["NeueMont_Regular", "sans-serif"],
        "neue-medium": ["NeueMont_Medium", "sans-serif"],
        "neue-thin": ["NeueMont_Thin", "sans-serif"],
        //Dx Dynamic
        "dx-bold": ["DxDynamix-Bold", "sans-serif"],
        //Awesome serif
        awesome: ["AwesomeSerif", "serif"],
      },
      animation: {
        "rotate-right-2": "rotate-right 0.5s linear forwards 0.5s",
        "rotate-left-2": "rotate-left 0.5s linear forwards 0.5s",

        "scaleUpRight": "scaleUpRight 2.2s forwards 1.2s",
        "scaleUpLeft": "scaleUpLeft 2.2s forwards 1.2s",
        "scaleUpRight2": "scaleUpRight2 2.2s forwards 1.2s",
        "scaleUpLeft2": "scaleUpLeft2 2.2s forwards 1.2s",
        fadeInRotateLeft: 'fadeInRotateLeft 2s forwards 1.8s',
        moveRight: 'moveRight 2s forwards 1.8s',
      },
      keyframes: {
        "rotate-right": {
          "100%": {
            delay: "200ms",
            transform: "rotate(-2.63deg)",
          },
        },
        "rotate-left": {
          "100%": {
            delay: "200ms",
            transform: "rotate(2.63deg)",
          },
        },

        scaleUpRight: {
          "0%": { transform: "scale(0) translate(0, 0)" },
          "100%": { transform: "scale(1) translate(200px, -200px)" },
        },
        scaleUpLeft: {
          "0%": { transform: "scale(0) translate(0, 0)" },
          "100%": { transform: "scale(1) translate(-250px, -200px)" }, 
        },
        scaleUpRight2: {
          "0%": { transform: "scale(0) translate(0, 0)" },
          "100%": { transform: "scale(1) translate(350px, -350px)" }, 
        },
        scaleUpLeft2: {
          "0%": { transform: "scale(0) translate(0, 0)" },
          "100%": { transform: "scale(1) translate(-380px, -350px)" },
        },

        fadeInRotateLeft: {
          '0%': {
            opacity: '0',
            transform: 'rotate(12deg)', // Starts from a rightward rotation
          },
          '100%': {
            opacity: '1',
            transform: 'rotate(0deg) translate(-100px,0)', // Ends in a neutral rotation position
          },
        },

        moveRight:{
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(250px, 0) rotate(10deg)" },
        }
      },
    },
  },
  plugins: [],
};
export default config;
