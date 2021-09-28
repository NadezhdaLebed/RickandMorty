import configureStore from "./configureStore";
import { saveState } from "./localStorage";

const store = configureStore();

store.subscribe(() => {
    saveState({});
});

export default store;