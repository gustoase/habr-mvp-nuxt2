import { Context } from '@nuxt/types';

import * as Main from '~/demo/business/main/Domain';
import * as Post from '~/demo/business/post/Domain';

import MainVuexModule from '~/demo/business/main/store/MainVuexModule';
import PostVuexModule from '~/demo/business/post/store/PostVuexModule';

export default ({ store }: Context) => {
  // @ts-ignore
  store.registerModule(
    Main.STORE_NS,
    MainVuexModule
  );
  // @ts-ignore
  store.registerModule(
    Post.STORE_NS,
    PostVuexModule
  );
};
