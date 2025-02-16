// Імпортуємо необхідні бібліотеки
import { createAsyncThunk } from "@reduxjs/toolkit"; // Імпортуємо createAsyncThunk для створення асинхронних дій
import axios from "axios"; // Імпортуємо axios для виконання HTTP запитів

// Встановлюємо базову URL для всіх запитів axios
axios.defaults.baseURL = "https://67b0756adffcd88a6789466c.mockapi.io/";

// Оголошуємо асинхронну дію для отримання всіх контактів
export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
  try {
    // Виконуємо GET запит до API для отримання всіх контактів
    const { data } = await axios.get("/contacts");
    return data; // Повертаємо отримані дані (контакти)
  } catch (error) {
    // Обробляємо помилку, якщо вона сталася
    return thunkAPI.rejectWithValue(error.message); // Передаємо повідомлення про помилку
  }
});

// Оголошуємо асинхронну дію для додавання нового контакту
export const addContact = createAsyncThunk(
  "contacts/add",
  async (contact, thunkAPI) => {
    try {
      // Виконуємо POST запит до API для додавання нового контакту
      const { data } = await axios.post("/contacts", contact);
      return data; // Повертаємо доданий контакт
    } catch (error) {
      // Обробляємо помилку, якщо вона сталася
      return thunkAPI.rejectWithValue(error.message); // Передаємо повідомлення про помилку
    }
  }
);

// Оголошуємо асинхронну дію для видалення контакту
export const deleteContact = createAsyncThunk("contacts/delete", async (id, thunkAPI) => {
  try {
    // Виконуємо DELETE запит до API для видалення контакту за ID
    await axios.delete(`/contacts/${id}`);
    return id; // Повертаємо ID видаленого контакту
  } catch (error) {
    // Обробляємо помилку, якщо вона сталася
    return thunkAPI.rejectWithValue(error.message); // Передаємо повідомлення про помилку
  }
});
