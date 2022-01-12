module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: { dorado: "#BA9A5C", negro: "#222224", gris: "#242322" },
      backgroundImage: {
        food: "url('./src/img/landing.png')",
        rocket: "url('./src/img/rocket.jpg')",
      },
    },
  },
  plugins: [],
};
