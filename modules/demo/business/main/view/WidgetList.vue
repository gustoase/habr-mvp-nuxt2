<template>
  <cds-grid class="cds-mb-l" no-gutters>
    <cds-row align-v="stretch">
      <cds-col v-for="widget in state.list" :key="widget.id">
        <widget :data="widget" />
      </cds-col>
    </cds-row>
  </cds-grid>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { storeModule, TState } from '~/demo/business/main/Domain';

import CreateWidgetModal from '~/demo/business/main/view/modal/CreateWidgetModal.vue';
import Widget from '~/demo/business/main/view/Widget.vue';

@Component({
  components: { Widget, CreateWidgetModal }
})
export default class WidgetList extends Vue {
  @storeModule.State('internalState') state: TState;
}
</script>
