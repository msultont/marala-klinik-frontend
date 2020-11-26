const CracoLessPlugin = require("craco-less");
const LessToJS = require("less-vars-to-js");
const Fs = require("fs");
const Path = require("path");

const ThemeVariables = LessToJS(
  Fs.readFileSync(Path.resolve(__dirname, './src/styles/antd/theme.less'), 'utf8')
)

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: ThemeVariables,
            javascriptEnabled: true
          }
        }
      }
    }
  ]
};
