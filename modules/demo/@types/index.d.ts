import { NotificationStatus } from '@central-design-system/components/dist/types/CdsNotification';
import { IPresenterPlugin } from '~/demo/plugins/presenter';

declare module 'vue/types/vue' {
  interface Vue {
    $presenter: IPresenterPlugin;
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $presenter: IPresenterPlugin;
  }
  interface Context {
    $presenter: IPresenterPlugin;
  }
}

export type TNotification = {
  id?: string,
  status?: NotificationStatus,
  title?: string,
  content?: string,
  action?: string,
  dismissButton?: boolean,
  showImmediate?: boolean,
  duration?: number,
  timeId?: any,
  position?: string
};
