// docusaurus-plugin/src/index.js
module.exports = function() {
  return {
    name: "custom-webpack-plugin",
    configureWebpack() {
      /** @type {import('webpack').Configuration} */
      const updatedConfig = {
        resolve: {
          symlinks: false,
        },
        module: {
          rules: [
            {
              test: /tsconfig.json$/, // loader just to render the tsconfig file
              type: 'asset/source'
            }
          ]
        }
      };
      return updatedConfig;
    }
  };
};
