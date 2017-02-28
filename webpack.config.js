/* eslint-disable */
function buildConfig(env) {
  console.log('ENV 🚀 ', env);
  return require(`./webpack.config.${env}.js`)({ env });
}

module.exports = buildConfig;
