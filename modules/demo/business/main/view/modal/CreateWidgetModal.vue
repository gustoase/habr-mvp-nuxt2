<template>
  <cds-modal :showed="true" header="Создание виджета" @hide="onHide">
    <template #body>
      <cds-notification class="cds-mt-m cds-mb-m" title="Предупреждение">
        <template #content>
          <div class="cds-mb-xs">
            Подумай над тем что делаешь братишка. Тебя дома ждут пельмени.
          </div>
        </template>
      </cds-notification>
      <validation-observer ref="validationObserver" v-slot="{ invalid }">
        <cds-form @submit.prevent="onCreate">
          <cds-form-group legend="Ну давай уже" description="Подзаголовок формы или вспомогательный текст верхнего уровня.">
            <cds-row>
              <cds-col lg="16" md="8" sm="4">
                <cds-form-item>
                  <validation-provider
                    v-slot="{ errors }"
                    name="title"
                    rules="required"
                  >
                    <cds-text-input
                      v-model="title"
                      label="Название"
                      name="title"
                      placeholder="Введите название виджета"
                      :error="!!errors[0]"
                      :error-message="errors[0]"
                    />
                  </validation-provider>
                </cds-form-item>
                <cds-form-item>
                  <validation-provider
                    v-slot="{ errors }"
                    name="title"
                    rules="required"
                  >
                    <cds-text-input
                      v-model="description"
                      label="Название"
                      name="title"
                      placeholder="Введите описание"
                      :error="!!errors[0]"
                      :error-message="errors[0]"
                    />
                  </validation-provider>
                </cds-form-item>
              </cds-col>
            </cds-row>
          </cds-form-group>
          <cds-button text="Отменить" appearance="secondary" @click="onHide" />
          <cds-button text="Добавить" type="submit" :disabled="invalid" />
        </cds-form>
      </validation-observer>
    </template>
  </cds-modal>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { storeModule, TState } from '~/demo/business/main/Domain';

@Component
export default class CreateWidgetModal extends Vue {
  @storeModule.State('internalState') state: TState;

  private title: string = '';
  private description: string = '';

  public async onCreate(): Promise<void> {
    await this.$presenter.mainInstance.onCreateWidget(this.title, this.description);
    this.onHide();
  }

  onHide() {
    this.$presenter.mainInstance.onCloseModal();
  }
}
</script>
