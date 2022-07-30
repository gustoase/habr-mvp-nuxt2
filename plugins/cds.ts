/**
 * Интеграция компонентов Central Design System
 * Подробная документация https://cds.b2b-center.ru/
 */

import Vue from 'vue';
// @ts-ignore
import CdsComponents from '@central-design-system/components/dist/cds.min';
Vue.use(CdsComponents);

declare module 'vue/types/vue' {
  interface Vue {
    $cds: any;
  }
}
