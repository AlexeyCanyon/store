class RootStore {
  static instanceRootStore: RootStore;


  constructor() {
    if (RootStore.instanceRootStore) return RootStore.instanceRootStore;
    RootStore.instanceRootStore = this;

  }
}

export const rootStore = new RootStore();
