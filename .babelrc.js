module.exports = {
  presets: [
    [
      "@babel/preset-react",
      {
        runtime:"automatic",
        development: process.env.BABEL_ENV === "development",
      },
    ],
  ],
  plugins:[
    [
      "module-resolver", 
      {
        "root": ["./src/"],
        "alias": {
          "@views": "./src/views",
          "@components": "./src/components"
      }
    }]
  ]
};