import { Plugin } from '@nuxt/types';
import eventEmitter from './EventEmitter';

const eventBus: Plugin = (_context, inject) => {
  inject('bus', eventEmitter);
};

export default eventBus;
