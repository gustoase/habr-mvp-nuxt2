import { IEventBus } from '~/modules/eventbus/domain';

class EventEmitter implements IEventBus {
  private events: Record<string, any[]> = {};

  emit<T>(eventName: string, payload: T): void {
    const event = this.events[eventName];
    if (event) {
      event.forEach((clb: (payload: T) => void) => {
        // eslint-disable-next-line no-useless-call
        clb.call(null, payload);
      });
    }
  }

  on<T>(eventName: string, clb: (payload: T) => void): () => void {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(clb);
    return () => {
      this.events[eventName] = this.events[eventName].filter((eventFn: (payload: T) => void) => clb !== eventFn);
    };
  }
}

export default new EventEmitter();
