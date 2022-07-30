import { Store } from 'vuex';

import { IPresenter, TState, initialState, STORE_NS } from '~/demo/business/post/Domain';

import PostVuexModule from './store/PostVuexModule';
import Service from '~/demo/business/post/Service';
import { VuexObservable } from '~/mvp/store/VuexObservable';

export default class Presenter
  extends VuexObservable<TState, PostVuexModule>
  implements IPresenter
{
  private service: Service;

  constructor(store: Store<TState>) {
    super(store, initialState(), STORE_NS);
    this.service = new Service();
  }

  onCreate(): void {
    setTimeout(() => {
      this.onChangeState({ isLoading: false });
    }, 1000);
  }

  async onLoadList(): Promise<void> {
    this.onChangeState({ isLoading: true });
    const list = await this.service.fetchListPosts();
    this.onChangeState({ list, isLoading: false });
  }
}
