<template>
  <div id="page">
    <header>
      <div class="cds-flex cds-flex-col">
        <span class="title">Demo Model-View-Presenter</span>
        <cds-link class="cds-mt-xxs" :to="{name: 'demo.list'}" text="Перейти на страницу модуля" />
      </div>
      <permission-toggle class="toggle" />
    </header>

    <main>
      <nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import PermissionToggle from '~/demo/business/main/view/action/PermissionToggle.vue';
import { TNotification } from '~/demo/@types';
import eventEmitter from '~/modules/eventbus/EventEmitter';

@Component({
  components: { PermissionToggle }
})
export default class DefaultLayout extends Vue {
  mounted() {
    eventEmitter.on('notification', (payload: TNotification) => {
      this.$cds.notification({ dismissButton: true, ...payload });
    });
  }
}
</script>

<style lang="scss" scoped>
@import '~@central-design-system/components/dist/mixins/scss/layout/spacing';
@import '~@central-design-system/components/dist/mixins/scss/typo';

body {
  margin: 0;
  background-color: var(--cds-color-background-page-primary);
}

header {
  padding-left: $cds-spacing-s;
  background-color: var(--cds-color-background-page-secondary);
  display: flex;
  align-items: center;
  height: 50px;

  .title {
    font-size: 23px;
  }

  .toggle {
    margin-left: $cds-spacing-m;
  }
}

main {
  height: 100%;
  width: 100%;
  margin: $cds-spacing-m;
}
</style>
