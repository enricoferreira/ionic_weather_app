import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      title: 'Titulo',
      search: '',
      ui_information_type_card: false,
    };
  },
  mutations: {
    CHANGE_INFORMATION_TYPE_CARD(state, payload){
      state.ui_information_type_card = payload;
    },
    CHANGE_TITLE(state, payload) {
      state.title = payload;
    },
    CHANGE_SEARCH(state, payload){
      state.search = payload;
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
