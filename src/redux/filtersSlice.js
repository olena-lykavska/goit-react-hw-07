import { createSlice } from "@reduxjs/toolkit"; // Імпортуємо createSlice з Redux Toolkit

// Створюємо slice для фільтрів
const filtersSlice = createSlice({
  name: "filters", // Назва slice
  initialState: { name: "" }, // Початковий стан фільтра (порожнє ім'я)
  reducers: {
    // Редюсер для оновлення фільтра (зміна значення name)
    changeFilter(state, action) {
      state.name = action.payload; // Оновлюємо фільтр на основі отриманого значення
    },
  },
});

// Додаємо функцію для вибору значення фільтра зі стану
export const selectNameFilter = (state) => state.filters.name; // Використовуємо state.filters, щоб отримати значення фільтра

// Експортуємо дію changeFilter для використання в компонентах
export const { changeFilter } = filtersSlice.actions;

// Експортуємо редюсер, щоб підключити до store
export default filtersSlice.reducer;
