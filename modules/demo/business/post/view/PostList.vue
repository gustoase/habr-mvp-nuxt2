<template>
  <cds-loading v-if="state.isLoading" fixed />
  <section v-else>
    <cds-container v-for="post in state.list" :key="post.id" label="container" class="cds-mb-xs">
      <template #header>
        <strong>{{ post.title }}</strong>
      </template>
      <p>{{ post.body }}</p>
    </cds-container>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { postStoreModule, TState } from '~/demo/business/post/Domain';

@Component
export default class PostList extends Vue {
  @postStoreModule.State('internalState') state: TState;

  mounted() {
    this.$presenter.postInstance.onLoadList();
  }
}
</script>
