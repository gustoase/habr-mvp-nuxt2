<template>
  <cds-button appearance="secondary" @click="onClick">
    Обновить посты
  </cds-button>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class CreateWidgetButton extends Vue {
  onClick() {
    this.$presenter.postInstance.onLoadList();
  }
}
</script>
