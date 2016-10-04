const path = require('path');

const rootDir = path.join(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const srcDir = path.join(rootDir, 'src');
const buildDir = path.join(rootDir, 'build');
const nodeModulesDir = path.join(rootDir, 'node_modules');

module.exports = {
  rootDir,
  publicDir,
  srcDir,
  buildDir,
  nodeModulesDir
};
