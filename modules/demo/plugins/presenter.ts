import * as Main from '~/demo/business/main/Domain';
import * as Post from '~/demo/business/post/Domain';

import MainPresenter from '~/demo/business/main/Presenter';
import PostPresenter from '~/demo/business/post/Presenter';
import { Plugin } from '@nuxt/types';

export interface IPresenterPlugin {
  mainInstance: Main.IPresenter;
  postInstance: Post.IPresenter;
}

const presenter: Plugin = (context, inject) => {
  let presenterMainInstance: Main.IPresenter;
  let presenterPostInstance: Post.IPresenter;
  inject('presenter', {
    get mainInstance(): Main.IPresenter {
      if (presenterMainInstance) {
        return presenterMainInstance;
      }

      presenterMainInstance = new MainPresenter(context.store);
      return presenterMainInstance;
    },
    get postInstance(): Post.IPresenter {
      if (presenterPostInstance) {
        return presenterPostInstance;
      }

      presenterPostInstance = new PostPresenter(context.store);
      return presenterPostInstance;
    }
  });
};

export default presenter;
