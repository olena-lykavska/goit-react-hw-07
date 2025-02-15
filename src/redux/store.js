import { configureStore } from "@reduxjs/toolkit"; // Імпортуємо configureStore для налаштування store
import contactsReducer from "./contactsSlice"; // Імпортуємо редюсер для контактів
import filtersReducer from "./filtersSlice"; // Імпортуємо редюсер для фільтрів

// Налаштовуємо store, який міститиме редюсери для контактів та фільтрів
export const store = configureStore({
  reducer: {
    contacts: contactsReducer, // Редюсер для контактів
    filters: filtersReducer,   // Редюсер для фільтрів
  },
});
