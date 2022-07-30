import { IStoreModule } from './Domain';
import assign from 'lodash/assign';
import { Mutation } from 'vuex-module-decorators';

export default class BaseVuexModule<T> implements IStoreModule<T> {
  protected internalState: T;

  @Mutation
  public onSetState(newState: T): void {
    assign(this.internalState, newState);
  }
}
