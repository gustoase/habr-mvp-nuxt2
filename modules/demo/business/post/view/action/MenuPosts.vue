<template>
  <client-only>
    <anchor-menu
      label="Возможно список постов"
      :anchors="anchors"
      initial-link="1"
      :disable-fixed="false"
    />
  </client-only>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
// @ts-ignore
import { AnchorMenu } from '@central-design-system/store/src/components';

@Component({
  components: {
    AnchorMenu
  }
})
export default class CreateWidgetButton extends Vue {
  private anchors = [
    { text: 'Первый пункт', to: '#', id: '1', disabled: false },
    { text: 'Второй пункт', to: '#', id: '2', disabled: false },
    { text: 'Третий пункт', to: '#', id: '3', disabled: false },
    { text: 'Четвертый пункт', to: '#', id: '4', iconName: 'CheckFill', disabled: false }
  ];
}
</script>
