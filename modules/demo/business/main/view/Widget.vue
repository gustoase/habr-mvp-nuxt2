<template>
  <cds-card
    class="widget"
    bordered
    :centered="true"
    :clickable="false"
    eyebrow="Eyebrow"
    :heading="data.title"
    :description="data.description"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { TWidgetData } from '~/demo/business/main/Domain';
// @ts-ignore
import { CdsCard } from '@central-design-system/store/src/components';

@Component({
  components: { CdsCard }
})
export default class Widget extends Vue {
  @Prop({ required: true }) data: TWidgetData;
}
</script>

<style scoped>
.widget {
  width: 200px;
}
</style>
