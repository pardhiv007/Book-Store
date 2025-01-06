import('tailwindcss').Config
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          lightcyan: {
            "100": "#e3fdfd",
            "200": "#cbf1f5",
          },
          powderblue: "#a6e3e9",
          black: "#000",
        },
        spacing: {},
        fontFamily: {
          inter: "Inter",
        },
      },
      fontSize: {
        "11xl": "30px",
        inherit: "inherit",
      },
      screens: {
        mq825: {
          raw: "screen and (max-width: 825px)",
        },
        mq675: {
          raw: "screen and (max-width: 675px)",
        },
        mq450: {
          raw: "screen and (max-width: 450px)",
        },
      },
    },
    corePlugins: {
      preflight: false,
    },
  };