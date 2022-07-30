<template>
  <cds-button :disabled="state.disabled" @click="onClick">
    Создать виджет
  </cds-button>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { EModal, storeModule, TState } from '~/demo/business/main/Domain';

@Component
export default class CreateWidgetButton extends Vue {
  @storeModule.State('internalState') state: TState;

  onClick() {
    this.$presenter.mainInstance.onOpenModal(EModal.WIDGET_CREATE);
  }
}
</script>
