// Імпортуємо необхідні компоненти та стилі
import React from "react"; // Імпортуємо React для використання JSX синтаксису
import ContactForm from "../ContactForm/ContactForm"; // Компонент для додавання нових контактів
import ContactList from "../ContactList/ContactList"; // Компонент для відображення списку контактів
import SearchBox from "../SearchBox/SearchBox"; // Компонент для пошуку контактів
import css from "./App.module.css"; // Імпортуємо CSS модулі для стилізації

// Оголошуємо компонент App
const App = () => {
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
