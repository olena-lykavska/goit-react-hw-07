import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://67b0756adffcd88a6789466c.mockapi.io/";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
  const { data } = await axios.get("/contacts");
  return data;
});

export const addContact = createAsyncThunk(
  "contacts/add",
  async (contact) => {
    const { data } = await axios.post("/contacts", contact);
    return data;
  }
);

export const deleteContact = createAsyncThunk("contacts/delete", async (id) => {
  await axios.delete(`/contacts/${id}`);
  return id;
});
