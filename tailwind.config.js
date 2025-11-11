module.exports = {
  content: ["./src/**/*.{html,js}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"], // or use a custom theme array
    darkTheme: "dark", // default dark theme
  },
  darkMode: "class", // or "media"
}