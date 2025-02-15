import { createSlice } from "@reduxjs/toolkit"; // Імпортуємо createSlice з Redux Toolkit

// Створюємо slice для фільтрів
const filtersSlice = createSlice({
  name: "filters", // Назва slice
  initialState: { name: "" }, // Початковий стан фільтра (порожнє ім'я)
  reducers: {
    // Редюсер для оновлення фільтра (зміна значення name)
    setFilter(state, action) {
      state.name = action.payload; // Оновлюємо фільтр на основі отриманого значення
    },
  },
});

// Експортуємо дію setFilter для використання в компонентах
export const { setFilter } = filtersSlice.actions;

// Експортуємо редюсер, щоб підключити до store
export default filtersSlice.reducer;
