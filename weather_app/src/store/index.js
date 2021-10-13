import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      title: 'Titulo',
      search: '',
    };
  },
  mutations: {
    CHANGE_TITLE(state, payload) {
      state.title = payload;
    }
  },
  actions: {
  },
  getters: {
    // memories(state) {
    //   return state.memories;
    // },
    // memory(state) {
    //   return (memoryId) => {
    //     return state.memories.find((memory) => memory.id === memoryId);
    //   };
    // },
  },
});

export default store;
