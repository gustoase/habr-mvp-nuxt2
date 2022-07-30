<template>
  <section>
    <h3>Такая же страница но в модуле</h3>
    <demo-mediator />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import eventEmitter from '~/modules/eventbus/EventEmitter';
import { EEvents } from '~/demo/business/main/Domain';
import { TNotification } from '~/demo/@types';

const DemoMediator = () => import('~/demo/mediator/DemoMediator.vue');

@Component({
  components: { DemoMediator }
})
export default class DemListPage extends Vue {
  mounted() {
    // обрабатываем кастомные события системы
    eventEmitter.on(EEvents.CREATE_WIDGET, (title: string) => {
      // например шлем уведомление
      eventEmitter.emit<TNotification>('notification', {
        status: 'success',
        title: 'Уведомление',
        content: `Виджет добавлен: ${title}`,
        position: 'top'
      });
    });
  }
}
</script>
