import { Store } from 'vuex';
import { EModal, IPresenter, TState, initialState, STORE_NS, EEvents } from '~/demo/business/main/Domain';

import MainVuexModule from './store/MainVuexModule';
import { VuexObservable } from '~/mvp/store/VuexObservable';
import { TNotification } from '~/demo/@types';

import eventEmitter from '~/modules/eventbus/EventEmitter';

export default class Presenter
  extends VuexObservable<TState, MainVuexModule>
  implements IPresenter
{
  constructor(store: Store<TState>) {
    super(store, initialState(), STORE_NS);
  }

  onCreate(): void {
    setTimeout(() => {
      this.onChangeState({ isLoading: false });
      eventEmitter.emit<TNotification>('notification', {
        status: 'success',
        title: 'Уведомление',
        content: 'Модуль загружен',
        position: 'top'
      });
    }, 700);
  }

  onCloseModal(): void {
    this.onChangeState({ showedModal: EModal.NONE });
  }

  onOpenModal(type: EModal): void {
    this.onChangeState({ showedModal: type });
  }

  onTogglePermissionCreate(): void {
    this.onChangeState({ disabled: !this.state.disabled });
  }

  onCreateWidget(title: string, description: string): void {
    // тут допустим уходит запрос в сервис, возвращаются данные и сетим уже в стейт
    this.onChangeState({ title, description }, 'addWidget');
    // шлём в общую шину событий уведомление
    eventEmitter.emit(EEvents.CREATE_WIDGET, title);
  }
}
