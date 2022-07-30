import { Module, Mutation } from 'vuex-module-decorators';
import { v4 } from 'uuid';

import { BaseVuexModule } from '~/mvp/store';

import { TState, initialState } from '~/demo/business/main/Domain';

@Module({
  namespaced: true,
  stateFactory: true
})
export default class MainVuexModule extends BaseVuexModule<TState> {
  public internalState: TState = initialState();

  @Mutation
  addWidget(payload: {title: string, description: string }) {
    this.internalState.list.push({ ...payload, id: v4() });
  }
}
