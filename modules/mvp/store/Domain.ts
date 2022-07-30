import BaseVuexModule from './BaseVuexModule';

export interface IVuexObservable<T = any, M extends BaseVuexModule<T> = any> {
  state: T;
  onResetState(): void;
  onChangeState(
    mutationState: Partial<T> | T[keyof T],
    mutation?: keyof M
  ): void;
}

export interface IStoreModule<T> {
  onSetState(newState: T): void;
}

export interface IStateHolder<T> {
  state(): T;
  onChangeState(state: T): void;
  onChangeState(state: T, mutation: string): void;
  onResetState(): void;
}

export interface IVuexStateHolder<T> extends IStateHolder<T> {}

export type TFetchState = {
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
  statusCode?: number;
};
