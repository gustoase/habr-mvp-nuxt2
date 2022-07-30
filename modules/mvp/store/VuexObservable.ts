import BaseVuexModule from './BaseVuexModule';
import { IVuexObservable } from './Domain';
import { Store } from 'vuex';

export class VuexObservable<T, M extends BaseVuexModule<T>>
  implements IVuexObservable<T, M>
{
  constructor(
    protected store: Store<T>,
    protected initialState: T,
    protected namespace?: string,
    protected stateFieldName: string = 'internalState'
  ) {}

  onResetState(): void {
    this.onChangeState({ ...this.initialState });
  }

  get state(): T {
    if (this.namespace) {
      if (this.stateFieldName) {
        return (this.store.state as any)[this.namespace][this.stateFieldName];
      }
      return (this.store.state as any)[this.namespace];
    }
    return this.store.state;
  }

  onChangeState(
    mutationState: Partial<T> | T[keyof T],
    mutation: keyof M = 'onSetState'
  ): void {
    this.store.commit(`${this.namespace}/${String(mutation)}`, mutationState);
  }
}
