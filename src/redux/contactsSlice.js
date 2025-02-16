// Імпортуємо необхідні функції з бібліотеки Redux Toolkit
import { createSlice, createSelector } from "@reduxjs/toolkit"; // Для створення slice та селекторів
import { fetchContacts, addContact, deleteContact } from "./contactsOps"; // Імпортуємо асинхронні операції (fetch, add, delete)

// Оголошуємо slice для контактів
const contactsSlice = createSlice({
  name: "contacts", // Назва slice
  initialState: { items: [], loading: false, error: null }, // Початковий стан slice
  reducers: {}, // Немає локальних редюсерів для цієї частини стану
  extraReducers: (builder) => {
    // Обробка асинхронних дій (fetchContacts, addContact, deleteContact)
    builder
      .addCase(fetchContacts.pending, (state) => {
        // Якщо запит на отримання контактів ще в процесі
        state.loading = true; // Встановлюємо loading в true
        state.error = null; // Скидаємо попередню помилку
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        // Якщо запит на отримання контактів успішно завершений
        state.items = action.payload; // Оновлюємо список контактів
        state.loading = false; // Завершуємо завантаження
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        // Якщо запит на отримання контактів завершився з помилкою
        state.loading = false; // Завершуємо завантаження
        state.error = action.error.message; // Зберігаємо повідомлення про помилку
      })
      .addCase(addContact.pending, (state) => {
        // Якщо запит на додавання контакту ще в процесі
        state.loading = true; // Встановлюємо loading в true
      })
      .addCase(addContact.fulfilled, (state, action) => {
        // Якщо контакт успішно додано
        state.items.push(action.payload); // Додаємо новий контакт до списку
        state.loading = false; // Завершуємо завантаження
      })
      .addCase(addContact.rejected, (state, action) => {
        // Якщо додавання контакту завершилось з помилкою
        state.loading = false; // Завершуємо завантаження
        state.error = action.error.message; // Зберігаємо повідомлення про помилку
      })
      .addCase(deleteContact.pending, (state) => {
        // Якщо запит на видалення контакту ще в процесі
        state.loading = true; // Встановлюємо loading в true
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        // Якщо контакт успішно видалено
        state.items = state.items.filter((item) => item.id !== action.payload); // Видаляємо контакт зі списку
        state.loading = false; // Завершуємо завантаження
      })
      .addCase(deleteContact.rejected, (state, action) => {
        // Якщо видалення контакту завершилось з помилкою
        state.loading = false; // Завершуємо завантаження
        state.error = action.error.message; // Зберігаємо повідомлення про помилку
      });
  },
});

// Селектор для фільтрації контактів за ім'ям
export const selectFilteredContacts = createSelector(
  // Перший аргумент: отримуємо всі контакти з state
  (state) => state.contacts.items,
  // Другий аргумент: отримуємо фільтр (ім'я для пошуку) з state
  (state) => state.filters.name,
  // Третій аргумент: фільтруємо контакти за ім'ям
  (items, filter) =>
    items.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) // Перевіряємо, чи містить ім'я контакту введене значення фільтру
    )
);

// Селектори для отримання стану завантаження та помилок
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

// Експортуємо редюсер з contactsSlice
export default contactsSlice.reducer;