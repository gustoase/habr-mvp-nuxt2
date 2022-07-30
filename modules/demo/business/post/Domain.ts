import { IVuexObservable, TFetchState } from '~/mvp/store';

import { namespace } from 'vuex-class';

export type TPost = {
  id: number;
  title: string;
  body: string;
};

// Конечное состоение конкретной бизнес логики, домейн
export type TState = TFetchState & {
  list: TPost[];
};

// описывается интерфейс модели которая делает запросы с серверу свагером или другим способом
export interface IService {
  fetchListPosts(): Promise<TPost[]>;
}

// презентер, в нем вся логика, обращение к модели за данными, заполнение стора и оповещение вьюшки.
export interface IPresenter extends IVuexObservable {
  onLoadList(): Promise<void>;
  onCreate(): void;
}

export const initialState = (): TState => ({
  isLoading: true,
  isError: false,
  errorMessage: '',
  list: []
});

export const STORE_NS = 'post-module';

export const postStoreModule = namespace(STORE_NS);
