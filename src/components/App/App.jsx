import React, { useEffect } from "react"; // Імпортуємо React та useEffect для роботи з життєвим циклом компонента
import { useDispatch } from "react-redux"; // Імпортуємо хук для доступу до dispatch в Redux
import { fetchContacts } from "../../redux/contactsOps"; // Імпортуємо операцію для отримання контактів
import ContactForm from "../ContactForm/ContactForm"; // Компонент для додавання нових контактів
import ContactList from "../ContactList/ContactList"; // Компонент для відображення списку контактів
import SearchBox from "../SearchBox/SearchBox"; // Компонент для пошуку контактів
import css from "./App.module.css"; // Імпортуємо CSS модулі для стилізації

// Оголошуємо компонент App
const App = () => {
  const dispatch = useDispatch(); // Хук для доступу до dispatch в Redux

  // Використовуємо useEffect для завантаження контактів при першому рендері компонента
  useEffect(() => {
    dispatch(fetchContacts()); // Диспатчимо дію для отримання контактів з сервера чи бази даних
  }, [dispatch]);

  return (
    // Контейнер для основного контенту, до якого застосовуються стилі з модуля
    <div className={css.container}> 
      <h1>Phonebook</h1> {/* Заголовок, який відображає назву додатку */}
      <ContactForm /> {/* Компонент для введення нового контакту */}
      <SearchBox /> {/* Компонент для пошуку контактів */}
      <ContactList /> {/* Компонент для відображення списку контактів */}
    </div>
  );
};

// Експортуємо компонент App для використання в інших частинах програми
export default App;
