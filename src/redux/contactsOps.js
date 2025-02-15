// Імпортуємо необхідні бібліотеки
import { createAsyncThunk } from "@reduxjs/toolkit"; // Імпортуємо createAsyncThunk для створення асинхронних дій
import axios from "axios"; // Імпортуємо axios для виконання HTTP запитів

// Встановлюємо базову URL для всіх запитів axios
axios.defaults.baseURL = "https://67b0756adffcd88a6789466c.mockapi.io/";

// Оголошуємо асинхронну дію для отримання всіх контактів
export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
  // Виконуємо GET запит до API для отримання всіх контактів
  const { data } = await axios.get("/contacts");
  return data; // Повертаємо отримані дані (контакти)
});

// Оголошуємо асинхронну дію для додавання нового контакту
export const addContact = createAsyncThunk(
  "contacts/add",
  async (contact) => {
    // Виконуємо POST запит до API для додавання нового контакту
    const { data } = await axios.post("/contacts", contact);
    return data; // Повертаємо доданий контакт
  }
);

// Оголошуємо асинхронну дію для видалення контакту
export const deleteContact = createAsyncThunk("contacts/delete", async (id) => {
  // Виконуємо DELETE запит до API для видалення контакту за ID
  await axios.delete(`/contacts/${id}`);
  return id; // Повертаємо ID видаленого контакту
});
