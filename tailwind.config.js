/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        btnBlue:'#485AFF',
        textColor:'#667085',
        borderColor:'#D0D5DD',
        links:'#475569',
        bgFooter:'#101828'
      },
      container:{
        center:true,
        padding: '1rem'
      }
    },
  },
  plugins: [],
};
