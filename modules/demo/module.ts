import { Module } from '@nuxt/types';
import has from 'lodash/has';
import routes from './routes';

const { resolve, join } = require('path');
const glob = require('glob');

const demoModule: Module = function (moduleOptions: any) {
  const options = moduleOptions;

  if (!has(options, 'namespace')) {
    console.error('Необходимо задать namespace в конфиге');
    return;
  }

  const namespace = options.namespace;

  // синхронизировать все файлы и папки в каталог сборки nuxt (.nuxt/)
  const files = glob.sync(join(__dirname, '**', '*'), {
    nodir: true,
    ignore: ['**/package.json', '**/README.md', '**/module.js']
  });

  const rootPath = join(resolve(__dirname, '../../'), '/').replace(/\\/g, '/');
  for (const file of files) {
    this.addTemplate({
      src: file,
      fileName: file.replace(rootPath, ''),
      options
    });
  }

  const buildOutput = `modules/${namespace}`;
  // список плагинов которые зарегистрируются
  const pluginsToSync = ['./plugins/store.ts', './plugins/presenter.ts'];
  for (const pathString of pluginsToSync) {
    this.addPlugin({
      src: resolve(__dirname, pathString),
      fileName: join(buildOutput, pathString),
      options
    });
  }

  // добавляем роутинг модуля
  this.extendRoutes(routes);
};

export default demoModule;

module.exports.meta = require('./package.json');
