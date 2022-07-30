import { Module } from 'vuex-module-decorators';
import { TState, initialState } from '~/demo/business/post/Domain';

import { BaseVuexModule } from '~/mvp/store';

@Module({
  namespaced: true,
  stateFactory: true
})
export default class PostVuexModule extends BaseVuexModule<TState> {
  public internalState: TState = initialState();
}
