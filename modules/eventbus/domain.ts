export interface IEventBus {
  on(eventName: string, clb: (payload: any) => void): () => void;
  emit<T>(eventName: string, payload: T): void;
}

declare module 'vue/types/vue' {
  interface Vue {
    $bus: IEventBus;
  }
}
