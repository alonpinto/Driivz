const LocalStorageService = () => {
  function get(key: string) {
    const result = window.localStorage.getItem(key);

    if (result !== null) {
      try {
        return JSON.parse(result);
      } catch (e) {
        console.error(`LocalStorageService=> `, e);
      }
    }

    return null;
  }

  function save(key: string, value: object | string): void {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  function remove(key: string) {
    window.localStorage.removeItem(key);
  }

  return {
    get,
    save,
    remove,
  };
};

const instance = LocalStorageService();
export { instance as LocalStorageService };
