import { join, resolve } from 'path';
import { Module } from '@nuxt/types';
const glob = require('glob');

const bus: Module = function() {
  const files = glob.sync(join(__dirname, '**', '*'), {
    nodir: true,
    ignore: ['**/package.json', '**/README.md', '**/module.js']
  });

  const rootPath = join(resolve(__dirname, '../../'), '/').replace(/\\/g, '/');

  for (const file of files) {
    this.addTemplate({
      src: file,
      fileName: file.replace(rootPath, '')
    });
  }

  this.nuxt.hook('build:before', () => {
    this.addPlugin({
      src: resolve(__dirname, 'plugin.ts'),
      fileName: resolve(__dirname, 'plugin.ts').replace(/\\/g, '/').replace(rootPath, '')
    });
  });
};

export default bus;
