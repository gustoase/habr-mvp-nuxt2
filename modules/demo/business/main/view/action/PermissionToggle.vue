<template>
  <cds-toggle
    label=""
    text-on="Вкл"
    text-off="Выкл"
    :value="state.disabled"
    @change="onToggle"
  />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { storeModule, TState } from '~/demo/business/main/Domain';

@Component
export default class PermissionToggle extends Vue {
  @storeModule.State('internalState') state: TState;

  onToggle() {
    this.$presenter.mainInstance.onTogglePermissionCreate();
  }
}
</script>
