import { ActionTree } from 'vuex';

export type RootState = ReturnType<typeof Object>;

export const actions: ActionTree<RootState, RootState> = {
  nuxtServerInit() {}
};
