<template>
  <demo-mediator />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import DemoMediator from '~/demo/mediator/DemoMediator.vue';

@Component({
  components: { DemoMediator }
})
export default class NuxtIndex extends Vue {}
</script>
