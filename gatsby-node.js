const { unlinkSync } = require('fs');
const LoadablePlugin = require('@loadable/webpack-plugin');
const { statsFilename, statsPath } = require('./constants');

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      plugins: [new LoadablePlugin({ filename: statsFilename })],
    });
  }
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({ name: '@loadable/babel-plugin' });
};

exports.onPostBuild = () => {
  unlinkSync(statsPath);
};
