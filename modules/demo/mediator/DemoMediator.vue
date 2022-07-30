<template>
  <cds-grid>
    <cds-row align-v="stretch">
      <cds-col cols="16">
        <create-widget-button class="cds-mb-m" />
        <widget-list />
        <create-widget-modal v-if="state.showedModal === EModal.WIDGET_CREATE" />
      </cds-col>
    </cds-row>

    <cds-row>
      <cds-col cols="4">
        <menu-posts />
      </cds-col>
      <cds-col cols="12">
        <load-posts-button class="cds-mb-m" />
        <post-list />
      </cds-col>
    </cds-row>
  </cds-grid>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator';
import eventEmitter from '~/modules/eventbus/EventEmitter';
import { EModal, storeModule, TState } from '~/demo/business/main/Domain';
import { postStoreModule, TState as TPostState } from '~/demo/business/post/Domain';
import { TNotification } from '~/demo/@types';

import CreateWidgetButton from '~/demo/business/main/view/action/CreateWidgetButton.vue';
import LoadPostsButton from '~/demo/business/post/view/action/LoadPostsButton.vue';

const PostList = () => import('~/demo/business/post/view/PostList.vue');
const MenuPosts = () => import('~/demo/business/post/view/action/MenuPosts.vue');
const WidgetList = () => import('~/demo/business/main/view/WidgetList.vue');
const CreateWidgetModal = () => import('~/demo/business/main/view/modal/CreateWidgetModal.vue');

@Component({
  components: { PostList, LoadPostsButton, MenuPosts, WidgetList, CreateWidgetModal, CreateWidgetButton }
})
export default class DemoMediator extends Vue {
  EModal = EModal;
  // в медиаторе есть доступ ко всем состояниям модуля
  @storeModule.State('internalState') state: TState;
  @postStoreModule.State('internalState') postState: TPostState;

  // можно подписаться на любое состояние и вызывать презентер другого бизнеса и др.
  @Watch('postState.list')
  onLoadPosts() {
    eventEmitter.emit<TNotification>('notification', {
      status: 'success',
      title: 'Уведомление',
      content: 'Список постов загрузился'
    });
  }

  mounted() {
    // есть доступ ко всеми презентерам, в медиаторе происходит связь состояний, и постройка базовой логики
    this.$presenter.mainInstance.onCreate();
    this.$presenter.postInstance.onCreate();
  }
}
</script>
