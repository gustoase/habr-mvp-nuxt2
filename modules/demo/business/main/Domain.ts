import { namespace } from 'vuex-class';
import { IVuexObservable, TFetchState } from '~/mvp/store';

export type TWidgetData = {
  id: string;
  title: string;
  description: string;
};

export enum EModal {
  NONE,
  WIDGET_CREATE
}

export type TModalData = Partial<TWidgetData>;

// Конечное состоение конкретной бизнес логики, домейн
export type TState = TFetchState & {
  disabled: boolean;
  list: TWidgetData[];
  showedModal: EModal;
  dataModal: TModalData | null;
};

// презентер, в нем вся логика, обращение к модели за данными, заполнение стора и оповещение вьюшки.
export interface IPresenter extends IVuexObservable {
  onCreate(): void;
  onCloseModal(): void;
  onOpenModal(type: EModal): void;
  onTogglePermissionCreate(): void;
  onCreateWidget(title: string, description: string): void;
}

export const initialState = (): TState => ({
  isLoading: true,
  isError: false,
  statusCode: 200,
  disabled: true,
  errorMessage: '',
  list: [],
  showedModal: EModal.NONE,
  dataModal: null
});

export enum EEvents {
  CREATE_WIDGET = 'mvp:main:createWidgetEvent'
}

export const STORE_NS = 'main-module';

export const storeModule = namespace(STORE_NS);
