module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue": "rgb(26, 148, 255)",
        "blue-dark" : "rgb(13, 92, 182)",
        "black" : "rgb(56, 56, 61)",
        "black-title": "rgb(36, 36, 36)",
        "red": "rgb(255, 66, 78)",
        "yellow": "rgb(253, 216, 53)",
        "white": "#efefef",
      },
      fontSize: {
        13: "13px",
        14: "14px",
        15: "15px",
        16: "16px",
        20: "20px",
        24: "24px",
        26: "26px",
        36: "36px",
        40: "40px",
      },
      height: {
        15: '66px'
      },
      width: {
        19: '190px'
      }
    },
  },
  plugins: [],
}
